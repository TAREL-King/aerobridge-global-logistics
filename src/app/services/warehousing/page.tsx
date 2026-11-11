import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Storage Solutions",
    description:
      "Flexible storage concepts for businesses managing inventory, products and distribution requirements.",
  },
  {
    number: "02",
    title: "Inventory Management",
    description:
      "Organized inventory visibility, stock records and reporting to support better operational decisions.",
  },
  {
    number: "03",
    title: "Order Fulfilment",
    description:
      "A coordinated approach to receiving, picking, packing and preparing orders for dispatch.",
  },
  {
    number: "04",
    title: "Distribution Coordination",
    description:
      "Planning support for moving goods from storage locations towards their intended destinations.",
  },
];

const stages = [
  ["01", "Goods received", "Record incoming shipment details and inspect the receiving information."],
  ["02", "Storage planning", "Organize inventory according to product and storage requirements."],
  ["03", "Order preparation", "Identify, pick and prepare items for dispatch."],
  ["04", "Dispatch coordination", "Coordinate the next stage of the distribution process."],
];

export default function WarehousingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85')",
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
            Warehousing.
            <span className="block text-cyan-300">
              Distribution Made Clear.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Discover practical warehousing and distribution concepts designed
            to support inventory organization, order preparation and supply
            chain coordination.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Requirements →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            STORAGE & DISTRIBUTION
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Bringing structure to inventory movement.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Warehousing is an important part of the supply chain. Businesses
            need clear processes for receiving goods, organizing inventory,
            preparing orders and coordinating distribution.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            This portfolio demonstration illustrates how a logistics provider
            could present warehousing and distribution capabilities. It does
            not represent a verified warehouse facility or an active storage
            operation.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85"
            alt="Warehouse storage and organized inventory"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              OUR SOLUTIONS
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Warehousing services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the key areas that contribute to an organized storage
              and distribution process.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-bold text-cyan-700">
                  {solution.number}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              From receiving to distribution.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A structured workflow helps businesses understand how goods
              move through the storage and fulfilment process.
            </p>
          </div>

          <div className="space-y-7">
            {stages.map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 border-b border-slate-200 pb-7"
              >
                <span className="text-2xl font-bold text-cyan-700">
                  {number}
                </span>

                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            PLAN YOUR LOGISTICS REQUIREMENTS
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Better organization. Clearer distribution.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Tell us about your storage, inventory or distribution
            requirements to explore a suitable logistics approach.
          </p>

          <Link
            href="/#contact"
            className="mt-9 inline-flex bg-cyan-500 px-9 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Tell Us About Your Requirements →
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