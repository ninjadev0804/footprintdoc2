"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { branding, navItems, office, socialLinks } from "@/data/site";

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/20 bg-white/95 backdrop-blur">
      <div className="bg-teal-900 px-4 py-2 text-center text-xs font-medium tracking-wide text-teal-50">
        Top Podiatry Notice Banner
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-slate-100 px-4 py-2 text-xs text-slate-600 md:px-6">
        <p>
          Smithfield: <a className="font-semibold text-slate-700" href={`tel:${office.phone}`}>{office.phone}</a>
        </p>
        <div className="hidden items-center gap-4 sm:flex">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-teal-900">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Image src={branding.logo} alt={office.name} width={188} height={56} className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                isActive(pathname, item.href)
                  ? "text-teal-900"
                  : "text-slate-600 hover:text-teal-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a className="text-sm font-semibold text-slate-700 hover:text-teal-900" href={`tel:${office.phone}`}>
            {office.phone}
          </a>
          <Link
            href="/request-appointment"
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-teal-950 transition hover:bg-amber-400"
          >
            Request Appointment
          </Link>
        </div>

        <button
          type="button"
          suppressHydrationWarning={true}
          className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold ${
                  isActive(pathname, item.href) ? "text-teal-900" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-teal-950"
            >
              Request Appointment
            </Link>
            <p className="pt-2 text-xs text-slate-500">Fax: {office.fax}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
