import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { branding, office } from "@/data/site";

export default function OurDoctorPage() {
  return (
    <>
      <PageHero title="Our Doctor" subtitle="Meet your dedicated podiatric care specialist." />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-[280px_1fr]">
          <div className="relative min-h-[320px]">
            <Image src={branding.blockPattern} alt="" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-teal-900/55" />
            <div className="relative flex h-full items-center justify-center p-8">
              <div className="relative h-56 w-44 overflow-hidden rounded-xl border-4 border-white/40">
                <Image src={branding.doctorImage} alt={office.doctor} fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="p-8">
            <h2 className="font-serif text-3xl text-teal-950">{office.doctor}</h2>
            <p className="mt-4 text-slate-700">
              Podiatrist {office.doctor}, with offices in Smithfield, NC, is dedicated to getting to the
              root of your foot or ankle problem.
            </p>
            <p className="mt-4 text-slate-700">
              Our practice specializes in ingrown toenails, diabetic foot care, wound care, and full-service
              care from fungal nails to foot surgery.
            </p>
            <p className="mt-4 text-slate-700">
              We accept most insurance plans and welcome new patients. Call today and get back on your feet.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
