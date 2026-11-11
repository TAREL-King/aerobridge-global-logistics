"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white text-[#0b2342]">
      <header className="border-b border-slate-100 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-10">
          <Link href="/" className="text-xl font-black tracking-wide">
            AEROBRIDGE
            <span className="ml-2 text-cyan-500">GLOBAL</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 transition hover:text-cyan-600"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      <section className="bg-[#07172d] px-5 py-20 text-white sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Let's move your business forward
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Let's Talk About
            <span className="block text-cyan-400">Your Next Shipment.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Tell us what you need to move. Explore how a logistics partner
            could support your next shipment with confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            Contact AeroBridge
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Start a Conversation
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Whether you are exploring air freight, ocean freight, road
            transport or supply chain support, share a few details and see
            how a tailored solution could take shape.
          </p>

          <div className="mt-10 space-y-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Location
              </p>
              <p className="mt-2 font-semibold">Houston, Texas, USA</p>
              <p className="mt-1 text-sm text-slate-500">
                Serving the Port Houston region
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Enquiries
              </p>
              <p className="mt-2 font-semibold">Use the enquiry form</p>
              <p className="mt-1 text-sm text-slate-500">
                This portfolio demo does not receive live enquiries.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
            Request a Quote
          </p>
          <h2 className="mt-3 text-2xl font-black">Tell Us About Your Cargo</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Complete the sample form below to explore the enquiry experience.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-cyan-200 bg-cyan-50 p-6">
              <h3 className="text-lg font-bold text-[#0b2342]">
                Demo submission successful
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Your sample enquiry has been processed on this page only.
                No information has been sent or stored.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-5 rounded-md bg-[#0b2342] px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-700"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Full Name *
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Business Name
                  <input
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Email Address *
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Phone Number
                  <input
                    type="tel"
                    placeholder="+1 000 000 0000"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Origin *
                  <input
                    required
                    type="text"
                    placeholder="City or country"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Destination *
                  <input
                    required
                    type="text"
                    placeholder="City or country"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Freight Type *
                  <select
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-cyan-500"
                  >
                    <option value="" disabled>Select freight type</option>
                    <option>Air Freight</option>
                    <option>Ocean Freight</option>
                    <option>Road Freight</option>
                    <option>Warehousing</option>
                    <option>Customs Support</option>
                    <option>Supply Chain Solutions</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Estimated Weight
                  <input
                    type="text"
                    placeholder="e.g. 500 kg"
                    className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                  />
                </label>
              </div>

              <label className="block text-sm font-semibold">
                Cargo Description *
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you need to transport..."
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-cyan-500"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-500 px-6 py-4 text-sm font-black tracking-wide text-[#07172d] transition hover:bg-cyan-300"
              >
                SUBMIT SAMPLE ENQUIRY →
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Portfolio demonstration only. Form submissions are not
                transmitted or stored.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-[#07172d] px-5 py-8 text-center text-xs leading-6 text-slate-400 sm:px-10">
        AEROBRIDGE GLOBAL LOGISTICS — Fictional portfolio demonstration.
        <br />
        All company details and sample interactions are illustrative.
        <div className="mt-3">
          <Link href="/" className="font-semibold text-cyan-400 hover:text-white">
            Return to Homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}