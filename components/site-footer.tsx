import Image from "next/image";
import Link from "next/link";
import { branding, navItems, office } from "@/data/site";

const socialIcons = [
  { label: "Facebook", href: "#", icon: "/source-assets/images/social-icons/facebook-icon.svg" },
  { label: "X", href: "#", icon: "/source-assets/images/social-icons/twitter-icon.svg" },
  { label: "Instagram", href: "#", icon: "/source-assets/images/social-icons/instagram-icon.svg" },
  {
    label: "Google Reviews",
    href: "https://search.google.com/local/writereview?placeid=",
    icon: "/source-assets/images/social-icons/google-icon.svg"
  }
];

export function SiteFooter() {
  return (
    <footer className="bg-teal-950 pb-8 pt-14 text-teal-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-6">
        <div>
          <Image src={branding.logo} alt={office.name} width={180} height={54} className="h-12 w-auto" />
          <p className="mt-3 text-sm text-teal-100">
            Call Footprint Podiatry for the best local podiatric support and medical care.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socialIcons.map((item) => (
              <a
                key={item.label}
                aria-label={item.label}
                href={item.href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-900/60 transition hover:bg-teal-800"
              >
                <Image src={item.icon} alt={item.label} width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-teal-100 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-teal-100 hover:text-white" href="/request-appointment">
                Request Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Our Office</h3>
          <p className="mt-4 text-sm text-teal-100">
            {office.addressLine1}
            <br />
            {office.addressLine2}
          </p>
          <p className="mt-3 text-sm text-teal-100">
            Phone: <a href={`tel:${office.phone}`}>{office.phone}</a>
            <br />
            Fax: {office.fax}
          </p>
          <div className="mt-3 space-y-1 text-sm text-teal-100">
            {office.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-teal-900 px-4 pt-4 text-xs text-teal-200 md:px-6">
        <p>Copyright {new Date().getFullYear()} Footprint Podiatry</p>
      </div>
    </footer>
  );
}
