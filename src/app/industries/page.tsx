import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Explore logistics planning for raw materials, production supplies, finished goods and international distribution.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Retail & E-commerce",
    description:
      "Understand inventory movement, order fulfilment and distribution concepts for growing retail businesses.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Healthcare & Pharmaceuticals",
    description:
      "Consider shipment handling, documentation and coordination requirements for healthcare-related goods.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Energy & Industrial",
    description:
      "Explore transportation planning concepts for industrial equipment, components and specialized cargo.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    title: "Automotive",
    description:
      "Consider logistics requirements for vehicle components, spare parts and automotive supply chains.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "06",
    title: "Technology & Electronics",
    description:
      "Explore shipment planning for electronic equipment, components and technology products.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28">
          <Link
            href="/"
            className="mb-10 inline-block text-sm font-semibold text-cyan-300 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            AEROBRIDGE GLOBAL LOGISTICS
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Industries We Serve.
            <span className="block text-cyan-300">
              Logistics Across Sectors.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Discover how logistics planning and supply chain coordination
            concepts apply across different industries and business
            environments.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Requirements →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            INDUSTRY EXPERTISE
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Different industries. Different logistics needs.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Every industry has its own supply chain priorities. Cargo type,
            handling requirements, delivery expectations and documentation
            all influence how logistics movements are planned.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            The sectors presented below illustrate the industries this
            portfolio concept is designed to address. They are not claims
            of existing clients or completed contracts.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="text-sm font-bold text-cyan-700">
                  {industry.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              INTEGRATED LOGISTICS THINKING
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Connecting every part of the supply chain.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              From international freight movements to storage, distribution
              and documentation, effective logistics planning considers
              how each stage connects to the next.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-cyan-700"
            >
              Explore Your Requirements →
            </Link>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
              alt="Organized logistics warehouse"
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            LET'S START A CONVERSATION
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Let's understand your industry's logistics needs.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Tell us about your business, cargo and transportation
            requirements to explore a suitable logistics approach.
          </p>

          <Link
            href="/#contact"
            className="mt-9 inline-flex bg-cyan-500 px-9 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Tell Us About Your Shipment →
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 pb-10 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl border-t border-slate-800 pt-8">
          <p className="font-bold tracking-widest text-white">
            AEROBRIDGE GLOBAL LOGISTICS
          </p>

          <p className="mt-3">
            Moving Beyond Borders. Delivering With Confidence.
          </p>

          <p className="mt-5 text-xs">
            Fictional portfolio demonstration. Not an operating logistics
            company. Services and capabilities shown are illustrative only.
          </p>

          <p className="mt-5">
            © 2026 AEROBRIDGE GLOBAL LOGISTICS
          </p>
        </div>
      </footer>
    </main>
  );
}