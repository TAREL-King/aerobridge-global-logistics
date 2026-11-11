import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    category: "AIR FREIGHT",
    title: "Moving Time-Critical Cargo Across Borders",
    challenge:
      "A fictional business needs to move urgent commercial components between international markets within a demanding timeframe.",
    solution:
      "An illustrative air freight strategy combining shipment planning, documentation coordination and milestone visibility.",
    outcome:
      "Demonstrates how time-sensitive cargo movements can be planned with greater coordination and visibility.",
    tags: ["Air Cargo", "Time-Critical", "International"],
  },
  {
    number: "02",
    category: "OCEAN FREIGHT",
    title: "Planning a Smarter Route for Bulk Cargo",
    challenge:
      "A fictional importer needs a structured approach to moving large-volume commercial goods across international waters.",
    solution:
      "An illustrative ocean freight plan covering container selection, port coordination and shipping documentation.",
    outcome:
      "Demonstrates a structured approach to bulk cargo planning and international freight coordination.",
    tags: ["Ocean Cargo", "Container Shipping", "Import"],
  },
  {
    number: "03",
    category: "SUPPLY CHAIN",
    title: "Creating Better Visibility Across Distribution",
    challenge:
      "A fictional distributor wants improved visibility across inventory handling, storage and delivery coordination.",
    solution:
      "An illustrative supply chain approach combining warehousing coordination, inventory visibility and distribution planning.",
    outcome:
      "Demonstrates how connected logistics processes can support more organised distribution operations.",
    tags: ["Warehousing", "Distribution", "Supply Chain"],
  },
];

export default function CaseStudiesPage() {
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

      <section className="bg-[#07172d] px-5 py-24 text-white sm:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Ideas Into Movement
          </p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Logistics Thinking.
            <span className="block text-cyan-400">
              Practical Solutions.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore illustrative logistics scenarios showing how thoughtful
            planning and coordinated freight solutions can address complex
            supply chain challenges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 lg:py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
            Illustrative Projects
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Explore Our Sample Case Studies
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            These fictional examples demonstrate how a logistics company
            could communicate its capabilities, approach and potential value
            to customers.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.number}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-100"
            >
              <div className="grid lg:grid-cols-[0.35fr_1fr]">
                <div className="flex min-h-48 flex-col justify-between bg-[#0b2342] p-8 text-white lg:p-10">
                  <span className="text-5xl font-black text-cyan-400">
                    {study.number}
                  </span>
                  <span className="mt-8 text-xs font-bold tracking-[0.2em] text-slate-300">
                    {study.category}
                  </span>
                </div>

                <div className="p-7 sm:p-10">
                  <h3 className="max-w-3xl text-2xl font-black leading-snug sm:text-3xl">
                    {study.title}
                  </h3>

                  <div className="mt-8 grid gap-7 md:grid-cols-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-cyan-600">
                        The Challenge
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-cyan-600">
                        The Approach
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-cyan-600">
                        Demonstrated Value
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#07172d] px-7 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-black">
            Have a Logistics Challenge?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Explore how a tailored logistics strategy could support your
            business requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-7 py-4 text-sm font-black text-[#07172d] transition hover:bg-cyan-300"
          >
            START A CONVERSATION →
          </Link>
        </div>
      </section>

      <footer className="bg-[#07172d] px-5 py-8 text-center text-xs leading-6 text-slate-400 sm:px-10">
        AEROBRIDGE GLOBAL LOGISTICS — Fictional portfolio demonstration.
        <br />
        All case studies and scenarios are illustrative, not real client projects.
        <div className="mt-3">
          <Link href="/" className="font-semibold text-cyan-400 hover:text-white">
            Return to Homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}