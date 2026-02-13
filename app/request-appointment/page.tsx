import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { RequestForm } from "@/components/request-form";
import { branding, office } from "@/data/site";

export default function RequestAppointmentPage() {
  return (
    <>
      <PageHero
        title="Request Appointment"
        subtitle="Send your preferred date and details. Our office will call to confirm availability."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="md:col-span-2">
          <RequestForm />
        </div>
        <aside className="space-y-5">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-52">
              <Image src={branding.heroSlide2} alt="Clinic" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl text-teal-950">Patient-Focused Care</h2>
              <p className="mt-2 text-slate-700">
                Every appointment request is reviewed quickly by our team for efficient scheduling.
              </p>
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-teal-950">Call Us</h2>
            <p className="mt-2 text-slate-700">
              For urgent needs, call directly: <a href={`tel:${office.phone}`}>{office.phone}</a>
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-teal-950">Office Hours</h2>
            <div className="mt-2 space-y-1 text-slate-700">
              {office.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </>
  );
}
