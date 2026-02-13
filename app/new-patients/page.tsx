import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { insuranceList } from "@/data/site";

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        title="New Patient Forms"
        subtitle="Prepare for your first visit with forms, checklists, and insurance details."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-slate-700">
              During the first visit, we gather medical background information and give you time to get to know
              your doctor. We accept most insurances.
            </p>
            <h2 className="mt-6 font-serif text-2xl text-teal-950">Patient Forms</h2>
            <p className="mt-2 text-slate-700">
              Please print and fill out new patient forms before your first visit so we can expedite check-in.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/source-assets/images/new-patients.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-700"
              >
                <Image src="/source-assets/images/pdf-download.png" alt="" width={18} height={18} />
                Download New Patient PDF
              </a>
              <a
                href="/source-assets/images/privacy-policy.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Image src="/source-assets/images/pdf-download.png" alt="" width={18} height={18} />
                Download Privacy Policy
              </a>
            </div>
          </article>

          <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h3 className="font-semibold text-amber-900">Bring These Items</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-amber-900/90">
              <li>Insurance card</li>
              <li>Current medications and doses</li>
              <li>Medical and surgical history</li>
              <li>Recent test results or x-rays</li>
            </ul>
          </aside>
        </div>

        <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-teal-950">Insurance and Payment Information</h2>
          <p className="mt-3 text-slate-700">
            You are responsible for co-payments or charges not covered by insurance. Questions regarding
            benefits should be directed to your employer or insurance carrier.
          </p>
          <h3 className="mt-5 font-semibold text-teal-900">We Accept Most Types of Insurance</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceList.map((plan) => (
              <li key={plan} className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {plan}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
