import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Express Air Freight",
    description:
      "For urgent shipments that need to move quickly across international borders, with carefully coordinated air transport.",
  },
  {
    number: "02",
    title: "Consolidated Air Cargo",
    description:
      "A practical option for smaller shipments. Cargo can be consolidated to help optimise shipping costs.",
  },
  {
    number: "03",
    title: "Import & Export Support",
    description:
      "Coordinated shipment preparation and documentation support for international import and export movements.",
  },
  {
    number: "04",
    title: "Special Cargo Coordination",
    description:
      "Planning support for sensitive, high-value, oversized or time-critical cargo, subject to carrier requirements.",
  },
];

const process = [
  ["01", "Share your shipment details", "Tell us what you are shipping, its dimensions, weight, origin and destination."],
  ["02", "Review your options", "Compare suitable routing, service options and estimated transit arrangements."],
  ["03", "Prepare your cargo", "Coordinate packaging, documentation and shipment readiness."],
  ["04", "Coordinate delivery", "Follow the shipment process through the agreed logistics arrangements."],
];

export default function AirFreightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="absolute left-0 top-0 z-30 w-full border-b border-white/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/70 bg-white/10 text-xl font-black text-cyan-300">
              A
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-[0.18em]">
                AEROBRIDGE
              </span>
              <span className="block text-[9px] tracking-[0.28em] text-slate-300">
                GLOBAL LOGISTICS
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            <Link href="/" className="transition hover:text-cyan-300">Home</Link>
            <Link href="/#about" className="transition hover:text-cyan-300">About</Link>
            <Link href="/#services" className="text-cyan-300">Services</Link>
            <Link href="/#tracking" className="transition hover:text-cyan-300">Track Shipment</Link>
            <Link href="/#contact" className="transition hover:text-cyan-300">Contact</Link>
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-cyan-400 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-white"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[690px] items-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Air Freight Solutions
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              YOUR CARGO.
              <br />
              <span className="text-cyan-300">THE WORLD.</span>
              <br />
              CONNECTED.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Move goods across borders with coordinated air freight
              solutions designed around speed, visibility and confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white"
              >
                Request an Air Freight Quote →
              </Link>
              <Link
                href="/#services"
                className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/20 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold text-white">Global Connectivity</p>
              <p className="mt-1 text-xs text-slate-300">International shipping routes</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Cargo Coordination</p>
              <p className="mt-1 text-xs text-slate-300">Shipment planning and support</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Clear Communication</p>
              <p className="mt-1 text-xs text-slate-300">Updates throughout the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
            Air freight, reimagined
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            When time matters, every movement counts.
          </h2>
          <p className="mt-7 leading-8 text-slate-600">
            International air freight requires more than moving cargo from
            one airport to another. It takes careful planning, shipment
            coordination and attention to the details that keep goods moving.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            AEROBRIDGE presents a coordinated approach to air cargo logistics,
            helping businesses plan shipments with greater clarity from
            origin to destination.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-3 font-bold text-cyan-800 transition hover:gap-5"
          >
            Discuss your shipment <span>→</span>
          </Link>
        </div>

        <div className="relative">
          <div
            className="h-[420px] rounded-2xl bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85')",
            }}
          />
          <div className="absolute -bottom-7 -left-4 max-w-xs rounded-xl bg-slate-950 p-6 text-white shadow-xl sm:-left-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Our approach
            </p>
            <p className="mt-3 text-lg font-bold">
              Precision in planning. Confidence in every connection.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
              What we offer
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Air freight services built around your cargo.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Explore the air cargo service categories represented in this
              logistics concept.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-cyan-700">
                    {service.number}
                  </span>
                  <span className="text-2xl text-slate-300 transition group-hover:text-cyan-500">
                    ↗
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href="/#contact"
                  className="mt-7 inline-block text-sm font-bold text-cyan-800 hover:text-slate-950"
                >
                  Make an enquiry →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo image banner */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Beyond transportation
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Your supply chain deserves a smarter connection.
            </h2>
            <p className="mt-6 leading-8 text-slate-200">
              From shipment preparation to destination coordination, the
              details matter. Start with a clear understanding of your cargo
              and the journey ahead.
            </p>
            <Link
              href="/#contact"
              className="mt-9 inline-flex rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-white"
            >
              Start a Shipment Enquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            A clearer path for your cargo.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            A straightforward process helps establish expectations before
            your shipment begins its journey.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, description]) => (
            <div key={number} className="border-t-2 border-cyan-500 pt-7">
              <span className="text-sm font-extrabold text-cyan-700">
                STEP {number}
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
                Industry applications
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Different industries. Different cargo needs.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Shipment requirements vary by product, destination, handling
                needs and regulatory requirements. Planning should begin with
                understanding the cargo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Technology & Electronics", "Fashion & Retail", "Healthcare Supplies", "Industrial Equipment", "Automotive Parts", "Consumer Goods"].map((item) => (
                <div
                  key={item}
                  className="flex min-h-28 items-center rounded-xl border border-slate-200 bg-white p-5 text-sm font-bold transition hover:border-cyan-400 hover:shadow-md"
                >
                  <span className="mr-3 text-cyan-600">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-500 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-900/70">
            Let's move forward
          </p>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Have cargo to move?
            <br />
            Let's discuss the journey.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-900/80">
            Share your shipment requirements and begin planning an air
            freight solution suited to your needs.
          </p>
          <Link
            href="/#contact"
            className="mt-9 inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300 text-lg font-black text-cyan-300">
              A
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-[0.18em]">
                AEROBRIDGE
              </span>
              <span className="block text-[9px] tracking-[0.25em] text-slate-400">
                GLOBAL LOGISTICS
              </span>
            </span>
          </Link>

          <div className="text-sm leading-7 text-slate-400">
            Houston, Texas, USA | Serving Port Houston
            <br />
            <span className="text-xs">
              Moving Beyond Borders. Delivering With Confidence.
            </span>
          </div>

          <Link href="/" className="text-sm font-semibold text-cyan-300 hover:text-white">
            ← Back to Homepage
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs leading-6 text-slate-500">
          AEROBRIDGE GLOBAL LOGISTICS is a fictional portfolio demonstration.
          Service descriptions are illustrative and do not represent actual
          operating services, carrier partnerships or shipment commitments.
          <span className="block mt-2">
            © {2026} AEROBRIDGE GLOBAL LOGISTICS. Portfolio concept.
          </span>
        </div>
      </footer>
    </main>
  );
}