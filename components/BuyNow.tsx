"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CircleCheck, Minus, Plus, ShoppingBag, TriangleAlert, X } from "lucide-react";

const MAX_QUANTITY = 5;

export interface BuyBrand {
  slug: string;
  name: string;
  /** Allowed card values: fixed slabs, or presets within a range. */
  denominations: number[];
  range: { min: number; max: number } | null;
}

type Status = { type: "success" | "error"; message: string } | null;

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function BuyNow({ brand, className = "" }: { brand: BuyBrand; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [denomination, setDenomination] = useState<number>(brand.denominations[Math.min(1, brand.denominations.length - 1)] ?? brand.range?.min ?? 500);
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const validValue = brand.range ? denomination >= brand.range.min && denomination <= brand.range.max : brand.denominations.includes(denomination);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      brand_name: brand.name,
      brand_slug: brand.slug,
      denomination,
      quantity,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      mobile: String(data.get("mobile") ?? "").trim(),
      website: String(data.get("website") ?? ""), // honeypot
    };

    const next: Record<string, string> = {};
    if (payload.name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) next.email = "Please enter a valid email address.";
    if (!/^(\+?91|0)?[6-9]\d{9}$/.test(payload.mobile.replace(/[\s-]/g, ""))) next.mobile = "Enter a valid 10-digit mobile number.";
    if (!validValue) next.denomination = "Choose a card value the brand offers.";
    if (quantity < 1 || quantity > MAX_QUANTITY) next.quantity = `Quantity must be between 1 and ${MAX_QUANTITY}.`;
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    setStatus(null);
    const apiUrl = process.env.NEXT_PUBLIC_LEADS_API_URL?.replace(/\/$/, "");
    try {
      if (!apiUrl) {
        await new Promise((r) => setTimeout(r, 600)); // mock mode without backend
      } else {
        const res = await fetch(`${apiUrl}/api/buy-request/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        const body = await res.json().catch(() => null);
        if (!res.ok || body?.success === false) {
          if (body?.errors) setErrors(Object.fromEntries(Object.entries(body.errors as Record<string, string[]>).map(([k, v]) => [k, String(Array.isArray(v) ? v[0] : v)])));
          throw new Error(body?.message ?? "We couldn't submit your request. Please try again.");
        }
      }
      setStatus({ type: "success", message: "Thank you! Our team will contact you soon." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error && err.message !== "Failed to fetch" ? err.message : "Network error — please try again or email support@saverpe.com." });
    } finally {
      setSubmitting(false);
    }
  }

  function close() {
    setOpen(false);
    if (status?.type === "success") {
      setStatus(null);
      setQuantity(1);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`btn-primary ${className}`}>
        <ShoppingBag className="size-4" aria-hidden /> Buy now
      </button>

      <dialog
        ref={dialogRef}
        onClose={close}
        aria-labelledby={`buy-title-${brand.slug}`}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl border border-line bg-cream p-0 text-ink shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line bg-brand px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-800">Buy e-gift card</p>
            <h2 id={`buy-title-${brand.slug}`} className="font-display text-2xl font-extrabold">{brand.name}</h2>
          </div>
          <button type="button" onClick={close} aria-label="Close" className="grid size-10 place-items-center rounded-full bg-white/70 hover:bg-white">
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {status?.type === "success" ? (
          <div className="px-6 py-10 text-center">
            <CircleCheck className="mx-auto size-14 text-mint" aria-hidden />
            <p role="status" className="mt-4 font-display text-2xl font-extrabold">{status.message}</p>
            <p className="mt-2 text-sm text-muted">
              Request: {quantity} × {brand.name} ({inr.format(denomination)} each) · Total {inr.format(denomination * quantity)}
            </p>
            <button type="button" onClick={close} className="btn-dark mt-6">Done</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-5 px-6 py-6">
            <fieldset>
              <legend className="mb-2 text-sm font-bold">Card value</legend>
              <div className="flex flex-wrap gap-2">
                {brand.denominations.map((d) => (
                  <button key={d} type="button" aria-pressed={denomination === d} onClick={() => setDenomination(d)} className={`rounded-full border px-3.5 py-1.5 text-sm font-bold transition ${denomination === d ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}>
                    {inr.format(d)}
                  </button>
                ))}
              </div>
              {brand.range && (
                <label className="mt-3 block text-xs text-muted">
                  Or enter any value between {inr.format(brand.range.min)} and {inr.format(brand.range.max)}
                  <input type="number" inputMode="numeric" min={brand.range.min} max={brand.range.max} value={denomination} onChange={(e) => setDenomination(Math.floor(Number(e.target.value) || 0))} className="field mt-1 !py-2.5" />
                </label>
              )}
              {errors.denomination && <p className="mt-1.5 text-xs font-semibold text-accent">{errors.denomination}</p>}
            </fieldset>

            <fieldset>
              <legend className="mb-2 text-sm font-bold">Quantity <span className="font-normal text-muted">(max {MAX_QUANTITY})</span></legend>
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="grid size-10 place-items-center rounded-full border border-line bg-white disabled:opacity-40">
                  <Minus className="size-4" aria-hidden />
                </button>
                <output aria-live="polite" className="w-8 text-center font-display text-xl font-extrabold">{quantity}</output>
                <button type="button" aria-label="Increase quantity" disabled={quantity >= MAX_QUANTITY} onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))} className="grid size-10 place-items-center rounded-full border border-line bg-white disabled:opacity-40">
                  <Plus className="size-4" aria-hidden />
                </button>
                <span className="ml-auto text-right text-sm">
                  <span className="block text-xs text-muted">Total</span>
                  <span className="font-display text-lg font-extrabold">{validValue ? inr.format(denomination * quantity) : "—"}</span>
                </span>
              </div>
              {errors.quantity && <p className="mt-1.5 text-xs font-semibold text-accent">{errors.quantity}</p>}
            </fieldset>

            <Field id={`buy-name-${brand.slug}`} name="name" label="Full name" error={errors.name}>
              <input id={`buy-name-${brand.slug}`} name="name" autoComplete="name" className="field" placeholder="Aarav Sharma" />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={`buy-email-${brand.slug}`} name="email" label="Email" error={errors.email}>
                <input id={`buy-email-${brand.slug}`} name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" />
              </Field>
              <Field id={`buy-mobile-${brand.slug}`} name="mobile" label="Mobile number" error={errors.mobile}>
                <input id={`buy-mobile-${brand.slug}`} name="mobile" type="tel" inputMode="tel" autoComplete="tel" className="field" placeholder="98765 43210" />
              </Field>
            </div>
            <div aria-hidden className="absolute -left-[9999px]">
              <label>
                Website <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? "Sending…" : "Submit buy request"}
            </button>
            {status?.type === "error" && (
              <p role="alert" className="flex items-start gap-2 rounded-2xl bg-accent-soft p-3 text-sm font-semibold">
                <TriangleAlert className="size-5 shrink-0 text-accent" aria-hidden /> {status.message}
              </p>
            )}
            <p className="text-center text-xs text-muted">No payment now. Our team will contact you to confirm your order and complete payment.</p>
          </form>
        )}
      </dialog>
    </>
  );
}

function Field({ id, label, error, children }: { id: string; name: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-accent">{error}</p>}
    </div>
  );
}
