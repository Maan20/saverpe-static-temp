"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CircleCheck, Send, TriangleAlert } from "lucide-react";

const SUBJECTS = ["General", "Order Query", "Partnership", "Other"] as const;

type Status = { type: "success" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Brand pages link here with ?brand=<name>; pre-fill a helpful message.
  useEffect(() => {
    const brand = new URLSearchParams(window.location.search).get("brand");
    if (brand && messageRef.current && !messageRef.current.value) {
      messageRef.current.value = `Hi SaverPe team, I'd like to gift a ${brand.slice(0, 80)} e-gift card. `;
    }
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject_category: String(data.get("subject") ?? "General"),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""), // honeypot
    };

    const nextErrors: Record<string, string> = {};
    if (payload.name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = "Please enter a valid email address.";
    if (payload.message.length < 10) nextErrors.message = "Tell us a little more (at least 10 characters).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setStatus(null);
    const apiUrl = process.env.NEXT_PUBLIC_LEADS_API_URL?.replace(/\/$/, "");
    try {
      if (!apiUrl) {
        // Mock mode: no backend configured (frontend-only development).
        await new Promise((r) => setTimeout(r, 600));
      } else {
        const res = await fetch(`${apiUrl}/api/contact-us/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const body = await res.json().catch(() => null);
        if (!res.ok || body?.success === false) {
          if (body?.errors) {
            setErrors(Object.fromEntries(Object.entries(body.errors as Record<string, string[]>).map(([k, v]) => [k === "subject_category" ? "subject" : k, v[0]])));
          }
          throw new Error(body?.message ?? "We couldn't send your message. Please try again.");
        }
      }
      formEl.reset();
      setStatus({ type: "success", message: "Thanks! Your message is on its way. Our support team replies within one business day." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error && err.message !== "Failed to fetch" ? err.message : "Network error — please email support@saverpe.com directly." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" className="field" placeholder="Aarav Sharma" required />
        </Field>
        <Field label="Email address" name="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" required />
        </Field>
      </div>
      <Field label="Subject" name="subject" error={errors.subject}>
        <select id="subject" name="subject" className="field" defaultValue="General">
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" name="message" error={errors.message}>
        <textarea ref={messageRef} id="message" name="message" rows={6} maxLength={3000} className="field resize-y" placeholder="How can we help? Include your order reference if it's about a gift card you received." required />
      </Field>
      {/* Honeypot: hidden from humans, bots tend to fill it. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {submitting ? "Sending…" : "Send message"} <Send className="size-4" aria-hidden />
      </button>
      <p className="text-xs text-muted">By submitting you agree to our privacy policy. We never share your details.</p>
      {status && (
        <div role="status" className={`flex items-start gap-3 rounded-2xl p-4 text-sm font-semibold ${status.type === "success" ? "bg-mint-soft text-ink" : "bg-accent-soft text-ink"}`}>
          {status.type === "success" ? <CircleCheck className="size-5 shrink-0 text-mint" aria-hidden /> : <TriangleAlert className="size-5 shrink-0 text-accent" aria-hidden />}
          {status.message}
        </div>
      )}
    </form>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-accent">{error}</p>}
    </div>
  );
}
