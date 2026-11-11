import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Documentation Guidance",
    description:
      "Understand the typical documents and shipment information required for an import or export process.",
  },
  {
    number: "02",
    title: "Import & Export Coordination",
    description:
      "Organize shipment information and coordinate the different parties involved in international cargo movement.",
  },
  {
    number: "03",
    title: "Customs Process Support",
    description:
      "Understand key customs procedures, declarations and clearance milestones relevant to your shipment.",
  },
  {
    number: "04",
    title: "Compliance Awareness",
    description:
      "Identify documentation and regulatory considerations that may affect the movement of goods across borders.",
  },
];

const stages = [
  ["01", "Shipment information", "Gather cargo details, origin, destination and intended movement."],
  ["02", "Document review", "Review the relevant shipment and supporting documentation."],
  ["03", "Process coordination", "Coordinate with the appropriate licensed customs professionals and relevant parties."],
  ["04", "Status and next steps", "Communicate available updates and outstanding requirements."],
];

export default function CustomsSupportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-slate-950">
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
            Customs Support.
            <span className="block text-cyan-300">
              Clarity Across Borders.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Explore customs documentation guidance and shipment coordination
            concepts designed to make international trade processes easier
            to understand.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Shipment →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            CUSTOMS & TRADE DOCUMENTATION
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Helping make complex processes clearer.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            International shipments involve documentation, regulatory
            requirements and coordination between multiple parties.
            Understanding these requirements early can help businesses
            prepare more effectively.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            This portfolio demonstration illustrates customs support
            information and coordination workflows. It does not claim that
            AEROBRIDGE is a licensed customs broker or that it performs
            customs declarations or clearance.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85"
            alt="International shipping containers at a port"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              OUR SUPPORT AREAS
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Customs support solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore the information and coordination areas that can help
              businesses prepare for cross-border shipments.
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
              THE PROCESS
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              A more organized approach to shipment preparation.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Clear information and communication can help businesses
              understand the steps involved in cross-border cargo movement.
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
            INTERNATIONAL SHIPMENT ENQUIRIES
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Prepare your shipment with greater clarity.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Tell us about your shipment and the documentation or coordination
            information you need to understand.
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