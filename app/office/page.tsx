import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { office } from "@/data/site";

const officeIcons = {
  location: "/source-assets/images/social-icons/location-icon.svg",
  phone: "/source-assets/images/social-icons/phone-icon.svg",
  fax: "/source-assets/images/social-icons/fax-icon.svg",
  time: "/source-assets/images/social-icons/time-icon.svg"
};

export default function OfficePage() {
  return (
    <>
      <PageHero
        title="Office"
        subtitle="Hours, location, appointment policy, and insurance acceptance."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-slate-700">
            To ensure your convenience, below is the information you need about our podiatry office,
            including our hours, location, appointment scheduling, and insurance acceptance.
          </p>
          <h2 className="mt-6 font-serif text-2xl text-teal-950">Appointments</h2>
          <p className="mt-2 text-slate-700">
            If, for any reason, you cannot keep a scheduled appointment or will be delayed, please call as
            soon as possible. Charges may be incurred for appointments canceled less than 24 hours in advance.
          </p>
          <h2 className="mt-6 font-serif text-2xl text-teal-950">Insurance</h2>
          <p className="mt-2 text-slate-700">
            Our office accepts a variety of HMOs, PPOs, and other health plans. Call our office to verify
            acceptance of your insurance carrier.
          </p>
          <div className="mt-6 rounded-xl bg-slate-50 p-5 text-sm text-slate-700">
            <p className="font-semibold text-teal-900">{office.name}</p>
            <p className="mt-2 flex items-start gap-2">
              <Image src={officeIcons.location} alt="" width={16} height={16} className="mt-0.5" />
              <span>
                {office.addressLine1}
                <br />
                {office.addressLine2}
              </span>
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Image src={officeIcons.phone} alt="" width={16} height={16} />
              <span>Phone: {office.phone}</span>
            </p>
            <p className="mt-1 flex items-center gap-2">
              <Image src={officeIcons.fax} alt="" width={16} height={16} />
              <span>Fax: {office.fax}</span>
            </p>
            <div className="mt-3 space-y-1">
              {office.hours.map((line) => (
                <p key={line} className="flex items-start gap-2">
                  <Image src={officeIcons.time} alt="" width={16} height={16} className="mt-0.5" />
                  <span>{line}</span>
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className="min-h-[360px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            title="Podiatry Office Map"
            src={office.mapEmbed}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
