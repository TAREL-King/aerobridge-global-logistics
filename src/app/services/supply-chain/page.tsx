import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Supply Chain Planning",
    description:
      "Structure the movement of goods around business priorities, shipment requirements and distribution needs.",
  },
  {
    number: "02",
    title: "Freight Coordination",
    description:
      "Bring transportation requirements together across air, ocean and road freight planning.",
  },
  {
    number: "03",
    title: "Inventory & Distribution",
    description:
      "Explore inventory visibility, storage planning and distribution coordination across the supply chain.",
  },
  {
    number: "04",
    title: "Procurement Coordination",
    description:
      "Organize supplier information, purchasing requirements and delivery considerations.",
  },
  {
    number: "05",
    title: "Shipment Visibility",
    description:
      "Use clear shipment records and status communication to support operational decision-making.",
  },
  {
    number: "06",
    title: "Process Improvement",
    description:
      "Identify opportunities to improve coordination, reduce avoidable delays and organize logistics workflows.",
  },
];

const stages = [
  ["01", "Understand", "Review business objectives, cargo requirements and supply chain priorities."],
  ["02", "Plan", "Map the relevant transportation, storage and distribution requirements."],
  ["03", "Coordinate", "Organize information and coordinate the proposed movement between relevant parties."],
  ["04", "Review", "Evaluate shipment information and identify opportunities for better coordination."],
];

export default function SupplyChainPage() {
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
            Supply Chain Solutions.
            <span className="block text-cyan-300">
              Every Link Connected.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Explore integrated supply chain planning and coordination
            concepts that connect procurement, transportation, inventory
            and distribution.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Supply Chain →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            INTEGRATED LOGISTICS PLANNING
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Look beyond individual shipments.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            A supply chain is more than the movement of cargo. It involves
            connected decisions about procurement, suppliers, transportation,
            storage, inventory and final distribution.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            This portfolio demonstration presents a structured approach
            to supply chain coordination. The capabilities shown are
            illustrative and do not represent verified operating services
            or existing client contracts.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"
            alt="Cargo containers at an international shipping port"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              OUR SOLUTION AREAS
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Connected supply chain solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the key areas that contribute to a more organized
              and coordinated supply chain.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-bold text-cyan-700">
                  {solution.number}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              OUR APPROACH
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              From planning to coordinated movement.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A clear process helps businesses understand how individual
              logistics activities fit into the bigger supply chain picture.
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
            LET'S CONNECT YOUR SUPPLY CHAIN
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Better coordination starts with a clear plan.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Tell us about your business, supply chain priorities and
            logistics requirements to explore a suitable approach.
          </p>

          <Link
            href="/#contact"
            className="mt-9 inline-flex bg-cyan-500 px-9 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Requirements →
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