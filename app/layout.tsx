import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const headingFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Footprint Podiatry",
  description: "Premier foot and ankle specialist site built in Next.js"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <a
          href="/request-appointment"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-teal-950 shadow-lg transition hover:bg-amber-400"
        >
          Request Appointment
        </a>
      </body>
    </html>
  );
}
