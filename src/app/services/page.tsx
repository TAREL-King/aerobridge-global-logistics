import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Air Freight",
    description:
      "Explore flexible air cargo solutions designed for time-sensitive and international shipments.",
    href: "/services/air-freight",
  },
  {
    number: "02",
    title: "Ocean Freight",
    description:
      "Explore sea freight options for containerized cargo and international trade movements.",
    href: "/services/ocean-freight",
  },
  {
    number: "03",
    title: "Road Freight",
    description:
      "Explore road transportation options for domestic and cross-border cargo movements.",
    href: "/services/road-freight",
  },
  {
    number: "04",
    title: "Warehousing",
    description:
      "Explore storage and inventory support concepts for more organized cargo handling.",
    href: "/services/warehousing",
  },
  {
    number: "05",
    title: "Customs Support",
    description:
      "Explore documentation and customs coordination support for international shipments.",
    href: "/services/customs-support",
  },
  {
    number: "06",
    title: "Supply Chain Solutions",
    description:
      "Explore coordinated logistics planning designed to support smoother supply chain operations.",
    href: "/services/supply-chain",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#0b2342]">
      <section className="bg-[#07172d] px-6 py-24 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            What We Offer
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Logistics Solutions Designed Around Your Cargo.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
            Discover the service areas featured in the AeroBridge Global
            Logistics portfolio demonstration. Each solution can be explored
            in more detail below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            Our Service Areas
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Explore Our Services
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Select a service to view its dedicated information page. These
            pages illustrate possible service offerings and are not live
            booking or operational commitments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-widest text-cyan-600">
                  {service.number}
                </span>
                <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-600">
                  →
                </span>
              </div>
              <h3 className="mt-8 text-xl font-extrabold">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <p className="mt-7 text-xs font-bold uppercase tracking-wider text-cyan-700">
                Explore Service →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-[#0b2342] p-8 text-white sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Have a shipment in mind?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Use the contact page to share your shipment requirements in this
            portfolio demonstration.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-cyan-400 px-6 py-4 text-sm font-extrabold text-[#07172d] transition hover:bg-cyan-300"
          >
            CONTACT US →
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-xs text-slate-500">
        AeroBridge Global Logistics — Fictional portfolio demonstration.
      </footer>
    </main>
  );
}