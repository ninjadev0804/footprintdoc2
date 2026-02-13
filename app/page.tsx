import Image from "next/image";
import Link from "next/link";
import { branding, commonConditions, featureServices, office } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px]">
          <Image
            src={branding.heroSlide1}
            alt="Podiatry clinic hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-teal-900/55 to-transparent" />
          <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
            <Image src={branding.heroSlide2} alt="Foot and ankle treatment" fill className="object-cover opacity-55" />
          </div>
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <Image
                src={branding.overlayLogo}
                alt="Footprint Podiatry overlay logo"
                width={82}
                height={82}
                className="h-16 w-16"
              />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Our Premier Foot &amp; Ankle Specialist
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
                Podiatry Foot &amp; Ankle Center
              </h1>
              <p className="mt-5 max-w-xl text-base text-teal-50 md:text-lg">
                We provide structured diagnosis, clear treatment plans, and compassionate care for chronic and
                acute foot and ankle pain.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/request-appointment"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-teal-950 transition hover:bg-amber-300"
                >
                  Request Appointment
                </Link>
                <a
                  href={`tel:${office.phone}`}
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call {office.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-7 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-teal-950 md:text-4xl">Featured Services</h2>
          <Link href="/services" className="text-sm font-semibold text-teal-800 hover:text-teal-950">
            View all services
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
            >
              <Image src={service.icon} alt={service.name} width={44} height={44} />
              <span className="text-sm font-semibold text-slate-700 group-hover:text-teal-900">{service.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl text-teal-950 md:text-4xl">Common Foot &amp; Ankle Conditions</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commonConditions.map((item) => (
              <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Image src={item.icon} alt={item.name} width={56} height={56} />
                <p className="mt-4 font-semibold text-teal-900">{item.name}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Personalized treatment pathways to reduce pain, restore mobility, and prevent recurrence.
                </p>
                <Link href="/services" className="mt-4 inline-block text-sm font-bold text-amber-700 hover:text-amber-800">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Our Doctor</p>
            <h3 className="mt-3 font-serif text-3xl text-teal-950">{office.doctor}</h3>
            <p className="mt-4 text-slate-700">
              Dedicated to diagnosing the root cause of pain and delivering full-service foot and ankle care,
              from conservative treatment to surgical planning when needed.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/our-doctor"
                className="rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Get to Know Our Doctor
              </Link>
              <Link
                href="/office"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Visit Our Office
              </Link>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image src={branding.blockPattern} alt="" fill className="object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-950/80 via-teal-900/70 to-teal-700/70" />
            <div className="relative flex h-full items-center gap-5 p-6">
              <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded-xl border-2 border-white/30">
                <Image src={branding.doctorImage} alt={office.doctor} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Meet the Team</p>
                <p className="mt-2 text-xl font-semibold text-white">{office.name}</p>
                <p className="mt-3 text-sm text-teal-100">
                  Comfortable environment, advanced imaging workflow, and efficient appointments that respect your time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
