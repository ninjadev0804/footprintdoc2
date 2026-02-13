"use client";

import { FormEvent, useState } from "react";

const referralOptions = [
  "Internet / Google",
  "Doctor Referral",
  "Insurance Website",
  "Friend / Family",
  "Facebook",
  "Other"
];

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-600">
        Please note this form is for requesting appointments only. Availability will vary and someone
        from our office will call you to confirm.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Date You Would Prefer *
          <input required type="date" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Full Name *
          <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email *
          <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone *
          <input required type="tel" placeholder="(###) ###-####" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700">How did you hear about us?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {referralOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-teal-700" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-medium text-slate-700">
          Referred by Doctor?
          <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Referred by?
          <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Referred by other?
          <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Describe Nature of Appointment
        <textarea rows={4} maxLength={260} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </label>

      <button
        type="submit"
        className="rounded-full bg-teal-800 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        Send
      </button>

      {submitted ? <p className="text-sm font-medium text-emerald-700">Thanks. Your request was captured.</p> : null}
    </form>
  );
}
