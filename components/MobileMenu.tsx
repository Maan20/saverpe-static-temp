"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";

export default function MobileMenu() {
  // Remember which path the menu was opened on; navigating elsewhere closes it without an effect.
  const pathname = usePathname();
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpenedOn(open ? null : pathname)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-11 place-items-center rounded-full border border-line bg-white"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[7.5rem] z-50 overflow-y-auto bg-cream px-4 pb-10 pt-4">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line rounded-3xl border border-line bg-white">
              {[...mainNav, { href: "/faq", label: "FAQs" }, { href: "/contact-us", label: "Contact us" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpenedOn(null)} className="block px-5 py-4 font-display text-lg font-bold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={site.orbitUrl} className="mt-4 block rounded-3xl bg-ink px-5 py-4 font-bold text-white">
              Corporate gifting? Visit Orbit by SaverPe →
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
