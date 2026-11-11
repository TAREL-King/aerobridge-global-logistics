"use client";

import { useState } from "react";
import Link from "next/link";
const demoShipments: Record<string, {
  origin: string;
  destination: string;
  method: string;
  status: string;
  eta: string;
  progress: number;
  events: string[];
}> = {
  "ABG-2026-00125": {
    origin: "Houston, USA",
    destination: "London, UK",
    method: "Ocean Freight",
    status: "In Transit",
    eta: "November 24, 2026",
    progress: 65,
    events: [
      "Shipment received at origin facility",
      "Export documentation completed",
      "Departed Port of Houston",
      "Currently in international transit",
    ],
  },
  "ABG-2026-00126": {
    origin: "New York, USA",
    destination: "Lagos, Nigeria",
    method: "Air Freight",
    status: "Processing",
    eta: "November 13, 2026",
    progress: 30,
    events: [
      "Shipment registered",
      "Cargo received at origin facility",
      "Export processing in progress",
    ],
  },
  "ABG-2026-00127": {
    origin: "Chicago, USA",
    destination: "Toronto, Canada",
    method: "Road Freight",
    status: "Delivered",
    eta: "November 8, 2026",
    progress: 100,
    events: [
      "Shipment collected",
      "Departed origin facility",
      "Arrived at destination facility",
      "Successfully delivered",
    ],
  },
};

const services = [
  {
    number: "01",
    icon: "✈",
    title: "Air Freight",
    description:
      "Time-sensitive international cargo solutions designed for speed, reliability and precision.",
    detail: "EXPRESS & INTERNATIONAL",
  },
  {
    number: "02",
    icon: "🚢",
    title: "Ocean Freight",
    description:
      "Flexible global shipping solutions for full-container and less-than-container cargo.",
    detail: "FCL & LCL SHIPPING",
  },
  {
    number: "03",
    icon: "▰",
    title: "Road Freight",
    description:
      "Dependable ground transportation connecting businesses, distribution centres and markets.",
    detail: "DOMESTIC & CROSS-BORDER",
  },
  {
    number: "04",
    icon: "▦",
    title: "Warehousing",
    description:
      "Storage, cargo handling and distribution support for more efficient supply chains.",
    detail: "STORAGE & DISTRIBUTION",
  },
  {
    number: "05",
    icon: "◈",
    title: "Customs Support",
    description:
      "Documentation and customs coordination support to help shipments move through international trade processes.",
    detail: "TRADE DOCUMENTATION",
  },
  {
    number: "06",
    icon: "⌁",
    title: "Supply Chain Solutions",
    description:
      "Integrated logistics planning designed around your cargo, business needs and delivery objectives.",
    detail: "END-TO-END COORDINATION",
  },
];

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState<
    (typeof demoShipments)[string] | null
  >(null);
  const [trackingError, setTrackingError] = useState("");
  
  const [quoteSent, setQuoteSent] = useState(false);

  function trackShipment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const reference = trackingNumber.trim().toUpperCase();

    const result = demoShipments[reference];

    if (result) {
      setShipment(result);
      setTrackingError("");
    } else {
      setShipment(null);
      setTrackingError(
        "We couldn't find that reference. Please check the number and try again. This is a demonstration tracking system."
      );
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TOP BAR */}
      <div className="bg-[#07172d] px-5 py-2 text-center text-[11px] tracking-[0.16em] text-slate-300 sm:text-left sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2">
          <span>HOUSTON, TEXAS, USA · SERVING PORT HOUSTON</span>
          <span>GLOBAL LOGISTICS · INTERNATIONAL SHIPPING</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10 lg:px-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b2342] text-xl font-black text-cyan-400">
              A
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-[0.12em] text-[#0b2342]">
                AEROBRIDGE
              </div>
              <div className="text-[9px] font-semibold tracking-[0.28em] text-slate-500">
                GLOBAL LOGISTICS
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-5 whitespace-nowrap text-[12px] font-semibold text-slate-600 lg:ml-8 lg:flex">
            <a href="/services" className="hover:text-cyan-600">Services</a>
            <a href="/about" className="hover:text-cyan-600">About Us</a>
            <a href="/industries" className="hover:text-cyan-600">Industries</a>
            <a href="/case-studies" className="hover:text-cyan-600">Case Studies</a>
            <a href="#tracking" className="hover:text-cyan-600">Track Shipment</a>
            <a href="/contact" className="hover:text-cyan-600">Contact</a>
          </div>

          <a
            href="#quote"
            className="hidden rounded-md bg-cyan-500 px-5 py-3 text-xs font-bold tracking-wide text-[#07172d] transition hover:bg-cyan-300 lg:ml-6 lg:block"
          >
            REQUEST A QUOTE →
          </a>

          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer touch-manipulation rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-[#0b2342]">
              MENU ☰
            </summary>

            <div className="border-t border-slate-100 bg-white px-6 py-5">
              {[
                ["Services", "/services"],
                ["About Us", "/about"],
                ["Industries", "/industries"],
                ["Case Studies", "/case-studies"],
                ["Track Shipment", "#tracking"],
                ["Contact", "/contact"],
                ["Request a Quote", "#quote"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="block border-b border-slate-100 py-3 text-sm font-semibold"
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
          </nav>
            </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[620px] items-center overflow-hidden bg-[#07172d] sm:min-h-[690px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,17,35,0.97) 0%, rgba(4,17,35,0.82) 48%, rgba(4,17,35,0.24) 100%), url('https://images.unsplash.com/photo-1494412574643-35d324698f1a?auto=format&fit=crop&w=2000&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172d]/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <div className="h-px w-10 bg-cyan-400" />
              <span className="text-xs font-bold tracking-[0.3em] text-cyan-300">
                CONNECTING COMMERCE. MOVING THE WORLD.
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              GLOBAL LOGISTICS.
              <span className="mt-2 block text-cyan-400">
                WITHOUT LIMITS.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Moving beyond borders. Delivering with confidence. Explore
              smarter freight solutions designed to connect businesses,
              markets and opportunities around the world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-md bg-cyan-400 px-7 py-4 text-xs font-extrabold tracking-wider text-[#07172d] transition hover:bg-white"
              >
                EXPLORE OUR SERVICES →
              </a>
              <a
                href="#tracking"
                className="rounded-md border border-white/50 px-7 py-4 text-xs font-bold tracking-wider text-white transition hover:border-cyan-400 hover:bg-white/10"
              >
                TRACK YOUR SHIPMENT
              </a>
            </div>
          </div>

          <div className="mt-20 grid max-w-2xl grid-cols-3 border-t border-white/20 pt-7">
            <div>
              <p className="text-2xl font-extrabold text-white">AIR</p>
              <p className="mt-1 text-[10px] tracking-widest text-slate-400">FREIGHT</p>
            </div>
            <div className="border-l border-white/20 pl-5">
              <p className="text-2xl font-extrabold text-white">OCEAN</p>
              <p className="mt-1 text-[10px] tracking-widest text-slate-400">FREIGHT</p>
            </div>
            <div className="border-l border-white/20 pl-5">
              <p className="text-2xl font-extrabold text-white">ROAD</p>
              <p className="mt-1 text-[10px] tracking-widest text-slate-400">FREIGHT</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKING */}
      <section id="tracking" className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 py-14 sm:px-10 lg:px-16">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                SHIPMENT VISIBILITY
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b2342]">
                Track your cargo.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Enter your shipment reference to view its current demonstration
                status and delivery progress.
              </p>
            </div>

            <form onSubmit={trackShipment} className="flex flex-col gap-3 sm:flex-row">
              <input
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number e.g. ABG-2026-00125"
                className="min-w-0 flex-1 rounded-md border border-slate-300 px-4 py-4 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                aria-label="Shipment tracking number"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-[#0b2342] px-7 py-4 text-xs font-bold tracking-wider text-white transition hover:bg-cyan-600"
              >
                TRACK SHIPMENT →
              </button>
            </form>
          </div>

          <p className="mt-5 text-[11px] text-slate-400">
            DEMONSTRATION ONLY · Sample tracking references are not connected
            to real cargo or shipping carriers.
          </p>

          {trackingError && (
            <div role="alert" className="mt-5 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {trackingError}
            </div>
          )}

          {shipment && (
            <div className="mt-8 rounded-lg border border-cyan-100 bg-slate-50 p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400">
                    SHIPMENT REFERENCE
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-[#0b2342]">
                    {trackingNumber.trim().toUpperCase()}
                  </p>
                </div>
                <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold text-cyan-800">
                  {shipment.status}
                </span>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-slate-400">ORIGIN</p>
                  <p className="mt-1 font-bold">{shipment.origin}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">DESTINATION</p>
                  <p className="mt-1 font-bold">{shipment.destination}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">SHIPPING METHOD</p>
                  <p className="mt-1 font-bold">{shipment.method}</p>
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-2 flex justify-between text-xs font-bold">
                  <span>DEMONSTRATION PROGRESS</span>
                  <span>{shipment.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-cyan-500 transition-all"
                    style={{ width: `${shipment.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400">
                    ESTIMATED ARRIVAL
                  </p>
                  <p className="mt-2 text-lg font-extrabold text-[#0b2342]">
                    {shipment.eta}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-slate-400">
                    SHIPMENT ACTIVITY
                  </p>
                  <ol className="mt-3 space-y-3">
                    {shipment.events.map((event, index) => (
                      <li key={event} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                          {index + 1}
                        </span>
                        {event}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {!shipment && !trackingError && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-slate-400">Try a sample:</span>
              {Object.keys(demoShipments).map((reference) => (
                <button
                  key={reference}
                  onClick={() => setTrackingNumber(reference)}
                  className="text-xs font-semibold text-cyan-700 underline decoration-cyan-300 underline-offset-4"
                >
                  {reference}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f5f8fb] px-5 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-cyan-600">
                WHAT WE DO
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-[#0b2342] sm:text-5xl">
                Logistics solutions built around your business.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-500">
              Explore a range of freight and supply chain services designed
              to support the movement of goods across markets and borders.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
           {services.map((service) => (
  <Link
    key={service.number}
    href={
  service.title.toLowerCase().includes("air freight")
    ? "/services/air-freight"
    : service.title.toLowerCase().includes("ocean freight")
      ? "/services/ocean-freight"
      : service.title.toLowerCase().includes("road freight")
        ? "/services/road-freight"
        : service.title.toLowerCase().includes("warehousing")
          ? "/services/warehousing"
          : service.title.toLowerCase().includes("customs")
            ? "/services/customs-support"
            : service.title.toLowerCase().includes("supply chain")
              ? "/services/supply-chain"
              : "/#contact"
}
    className="group block border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
  >
    <div className="flex items-center justify-between">
      <span className="text-3xl text-cyan-600">{service.icon}</span>
      <span className="text-sm font-bold text-slate-300">
        {service.number}
      </span>
    </div>

    <h3 className="mt-9 text-xl font-extrabold text-[#0b2342]">
      {service.title}
    </h3>

    <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">
      {service.description}
    </p>

    <div className="mt-6 border-t border-slate-100 pt-5 text-[10px] font-extrabold tracking-[0.17em] text-cyan-700">
      {service.detail}
    </div>

    <div className="mt-4 text-xs font-bold text-cyan-700">
      EXPLORE SERVICE →
    </div>
  </Link>
))}
</div>
          <div
            className="min-h-[420px] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85')",
            }}
          >
            <div className="m-5 inline-block rounded-md bg-[#07172d]/90 px-5 py-4 text-white">
              <p className="text-xs tracking-widest text-cyan-300">OUR APPROACH</p>
              <p className="mt-1 text-lg font-bold">Precision in every movement.</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-600">
              ABOUT AEROBRIDGE
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0b2342] sm:text-5xl">
              Moving beyond borders. Delivering with confidence.
            </h2>
            <p className="mt-6 text-sm leading-8 text-slate-500">
              AEROBRIDGE GLOBAL LOGISTICS is a logistics business concept
              created to demonstrate a modern approach to freight
              coordination, cargo visibility and international supply chain
              solutions.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-500">
              Our concept is built around clear communication, thoughtful
              logistics planning and a customer-focused approach to moving
              goods across borders.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-5">
              <div className="border-l-2 border-cyan-400 pl-4">
                <p className="font-extrabold text-[#0b2342]">Transparency</p>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  Clear shipment information and communication.
                </p>
              </div>
              <div className="border-l-2 border-cyan-400 pl-4">
                <p className="font-extrabold text-[#0b2342]">Precision</p>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  Structured logistics and cargo coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-[#07172d] px-5 py-24 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Supporting the movement of global commerce.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Different industries have different cargo requirements. Our
              concept focuses on flexible logistics solutions that can be
              adapted to a range of business sectors.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Manufacturing", "Components, machinery and industrial goods."],
              ["02", "Retail & E-commerce", "Commercial goods and consumer products."],
              ["03", "Technology", "Electronics and specialised equipment."],
              ["04", "Automotive", "Vehicle parts and related cargo."],
              ["05", "Healthcare", "Healthcare-related supplies and equipment."],
              ["06", "Agriculture", "Agricultural products and commodities."],
              ["07", "Construction", "Building materials and project cargo."],
              ["08", "Energy", "Energy-sector equipment and supplies."],
            ].map(([number, title, description]) => (
              <div key={number} className="bg-[#0b2342] p-7 transition hover:bg-[#10365d]">
                <p className="text-xs font-bold text-cyan-400">{number}</p>
                <h3 className="mt-7 font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-600">
              HOW IT WORKS
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-[#0b2342]">
              A clearer path from origin to destination.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              ["01", "Request", "Share your shipment requirements and destination."],
              ["02", "Plan", "Review the cargo details and proposed logistics solution."],
              ["03", "Coordinate", "Arrange the movement and monitor shipment milestones."],
              ["04", "Deliver", "Coordinate destination handling and delivery arrangements."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative border-t-2 border-cyan-400 pt-7">
                <span className="text-4xl font-black text-slate-200">{number}</span>
                <h3 className="mt-5 text-xl font-extrabold text-[#0b2342]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section id="quote" className="bg-[#0b2342] px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              LET'S MOVE FORWARD
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Have cargo to move?
              <span className="block text-cyan-400">Let's plan the journey.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Share your cargo requirements and destination to begin a
              quotation enquiry.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-cyan-400 px-8 py-5 text-xs font-extrabold tracking-widest text-[#07172d] transition hover:bg-white"
          >
            START YOUR ENQUIRY →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-600">
              GET IN TOUCH
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-[#0b2342] sm:text-5xl">
              Tell us about your shipment.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-slate-500">
              Provide your contact details and cargo requirements. This
              demonstration form currently displays a local confirmation;
              it is not connected to a live enquiry service.
            </p>
            <div className="mt-9 space-y-5 text-sm">
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400">LOCATION CONCEPT</p>
                <p className="mt-2 font-semibold text-[#0b2342]">Houston, Texas, USA · Serving Port Houston</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-slate-400">SERVICE COVERAGE</p>
                <p className="mt-2 font-semibold text-[#0b2342]">International freight and logistics concept</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuoteSent(true);
            }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:p-9"
          >
            <h3 className="text-xl font-extrabold text-[#0b2342]">Request a quote</h3>
            <p className="mt-2 text-xs text-slate-500">Demonstration enquiry form</p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold text-slate-600">
                FULL NAME *
                <input required className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none focus:border-cyan-500" placeholder="Your name" />
              </label>
              <label className="text-xs font-bold text-slate-600">
                EMAIL ADDRESS *
                <input required type="email" className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none focus:border-cyan-500" placeholder="you@example.com" />
              </label>
              <label className="text-xs font-bold text-slate-600">
                ORIGIN *
                <input required className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none focus:border-cyan-500" placeholder="City / Country" />
              </label>
              <label className="text-xs font-bold text-slate-600">
                DESTINATION *
                <input required className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none focus:border-cyan-500" placeholder="City / Country" />
              </label>
              <label className="text-xs font-bold text-slate-600 sm:col-span-2">
                FREIGHT TYPE *
                <select required defaultValue="" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-cyan-500">
                  <option value="" disabled>Select a service</option>
                  <option>Air Freight</option>
                  <option>Ocean Freight</option>
                  <option>Road Freight</option>
                  <option>Warehousing</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-xs font-bold text-slate-600 sm:col-span-2">
                CARGO DETAILS
                <textarea rows={4} className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none focus:border-cyan-500" placeholder="Describe your cargo, weight and requirements..." />
              </label>
            </div>

            <button type="submit" className="mt-6 w-full rounded-md bg-[#0b2342] px-6 py-4 text-xs font-extrabold tracking-widest text-white transition hover:bg-cyan-600">
              SUBMIT DEMO ENQUIRY →
            </button>

            {quoteSent && (
              <p role="status" className="mt-4 rounded-md bg-cyan-50 p-4 text-sm text-cyan-800">
                Thank you! Your demonstration enquiry has been completed locally. No information has been sent to a company.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061326] px-5 py-12 text-white sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-extrabold tracking-[0.12em]">AEROBRIDGE</div>
            <div className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-cyan-400">
              GLOBAL LOGISTICS
            </div>
            <p className="mt-5 max-w-xs text-xs leading-7 text-slate-400">
              Moving Beyond Borders. Delivering With Confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-cyan-400">QUICK LINKS</h4>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <a href="#home" className="hover:text-cyan-400">Home</a>
              <a href="/about" className="hover:text-cyan-400">About Us</a>
              <a href="/services" className="hover:text-cyan-400">Services</a>
              <a href="/industries" className="hover:text-cyan-400">Industries</a>
              <a href="/case-studies" className="hover:text-cyan-600">Case Studies</a>
              <a href="#tracking" className="hover:text-cyan-400">Tracking</a>
              <a href="/contact" className="hover:text-cyan-400">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-cyan-400">OUR POSITIONING</h4>
            <p className="mt-5 text-xs leading-7 text-slate-400">
              Houston, Texas, USA
              <br />
              Serving Port Houston
              <br />
              International logistics concept
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-7 text-[10px] text-slate-500 sm:flex-row">
          <p>© 2026 AEROBRIDGE GLOBAL LOGISTICS · PORTFOLIO DEMONSTRATION</p>
          <p>FICTIONAL BRAND · NOT A LIVE LOGISTICS OPERATOR</p>
        </div>
      </footer>
    </main>
  );
}