import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { featureServices, serviceList } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Comprehensive podiatric medicine and surgery for foot and ankle conditions."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <p className="max-w-4xl text-slate-700">
          Dr. XXX is available to treat foot and ankle ailments such as diabetic foot care, ingrown
          toenails, fungal toenails, warts, and painful calluses. Our practice specializes in complete foot care.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureServices.map((service) => (
            <article key={service.name} className="flex items-center gap-3 rounded-xl bg-teal-900 px-4 py-3 text-white">
              <Image src={service.icon} alt={service.name} width={30} height={30} />
              <p className="text-sm font-semibold">{service.name}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <article
              key={service}
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              {service}
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-teal-950">Highlighted Conditions</h2>
          <p className="text-slate-700">
            <strong>Ankle Sprains:</strong> Very common injuries that often involve torn or stretched ligaments.
          </p>
          <p className="text-slate-700">
            <strong>Bunions:</strong> Progressive deformity at the base of the big toe that may require surgery.
          </p>
          <p className="text-slate-700">
            <strong>Flat Feet:</strong> Complete or near-complete arch collapse with symptoms ranging from none to severe pain.
          </p>
          <p className="text-slate-700">
            <strong>Diabetes and Your Feet:</strong> Foot screenings are crucial and any sore or cut should be treated promptly.
          </p>
        </div>
      </section>
    </>
  );
}
