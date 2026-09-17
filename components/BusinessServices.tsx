import { ArrowUpRight, Building, CodeXml, Handshake, HeartHandshake, Layers, Trophy, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";

// Business offerings are delivered through Orbit by SaverPe, so every card links there.
export const businessServices: { icon: LucideIcon; title: string; text: string; path: string; badge?: string }[] = [
  { icon: Building, title: "Corporate Gifting", text: "Festive, client and milestone gifts from 290+ brands — one order, one invoice.", path: "/solutions" },
  { icon: Layers, title: "Bulk Gift Cards", text: "Mix brands, denominations and quantities for hundreds or thousands of recipients.", path: "/brands" },
  { icon: Trophy, title: "Employee Rewards", text: "Spot awards, anniversaries and recognition programs your people value.", path: "/solutions/employee-rewards-recognition" },
  { icon: Handshake, title: "Channel Partner Rewards", text: "Dealer, distributor and retailer incentives that move sales.", path: "/solutions/channel-partner-incentives" },
  { icon: HeartHandshake, title: "Customer Loyalty", text: "Referral, loyalty and promotional rewards customers love to redeem.", path: "/solutions/customer-loyalty-rewards" },
  { icon: CodeXml, title: "API & SDK Integration", text: "Plug gift card rewards into your HRMS, CRM or app.", path: "/api-integration", badge: "Early access" },
];

export default function BusinessServices() {
  return (
    <section aria-labelledby="business-services" className="container-page mt-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-white sm:px-10 sm:py-16">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-28 -left-10 size-80 rounded-full bg-[#e0078d]/25 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow !border-white/10 !bg-white/5 !text-brand">SaverPe for Business</p>
            <h2 id="business-services" className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Gifting &amp; rewards solutions for every business
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Through <strong className="text-white">Orbit by SaverPe</strong>, companies send gift cards at scale to employees, partners and customers.
            </p>
          </div>
          <a href={`${site.orbitUrl}/contact-sales`} className="btn-primary shrink-0">
            Talk to our business team <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessServices.map((s) => (
            <li key={s.title}>
              <a
                href={`${site.orbitUrl}${s.path}`}
                className="group flex h-full gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-brand hover:bg-white/10"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-ink transition group-hover:rotate-6">
                  <s.icon className="size-6" aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-2 font-display text-lg font-bold">
                    {s.title}
                    {s.badge && <span className="rounded-full bg-[#e0078d] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{s.badge}</span>}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/65">{s.text}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:gap-2">
                    Learn more <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
