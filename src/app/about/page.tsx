export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#071426] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-cyan-400">
            ABOUT AEROBRIDGE
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Connecting Markets.
            <span className="block text-cyan-400">
              Moving Possibilities.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            AEROBRIDGE GLOBAL LOGISTICS is a logistics and freight-forwarding
            portfolio concept built around smarter cargo movement, dependable
            coordination and seamless global trade.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold tracking-widest text-cyan-700">
            WHO WE ARE
          </p>
          <h2 className="text-3xl font-bold">
            A clearer approach to global logistics.
          </h2>
        </div>

        <p className="text-lg leading-8 text-slate-600">
          Logistics is more than moving cargo from one location to another.
          It requires planning, communication, coordination and attention to
          detail. Our concept focuses on bringing these elements together to
          create a more transparent and connected logistics experience.
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold tracking-widest text-cyan-700">
              OUR FOUNDATION
            </p>
            <h2 className="text-3xl font-bold">What guides our approach</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Mission",
                description:
                  "To demonstrate how thoughtful logistics coordination can make cargo movement clearer, more organized and more accessible.",
              },
              {
                title: "Our Vision",
                description:
                  "To represent a connected logistics experience where businesses can approach global trade with greater confidence.",
              },
              {
                title: "Our Values",
                description:
                  "Transparency, accountability, communication, efficiency and continuous improvement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-slate-200 bg-white p-8"
              >
                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-cyan-700">
              OUR APPROACH
            </p>
            <h2 className="text-3xl font-bold">
              Every shipment deserves a thoughtful plan.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              From air and ocean freight to road transportation, warehousing
              and customs support, our service concept is designed around
              understanding shipment requirements and coordinating the right
              logistics process.
            </p>
          </div>

          <div className="bg-[#071426] p-9 text-white">
            <h3 className="mb-6 text-2xl font-bold">
              Moving Beyond Borders.
            </h3>
            <p className="leading-8 text-slate-300">
              Delivering With Confidence.
            </p>
            <div className="mt-8 h-1 w-20 bg-cyan-400" />
          </div>
        </div>
      </section>

      <section className="bg-[#071426] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Let&apos;s move your business forward.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Explore our logistics service concepts and discover a more connected
          approach to cargo movement.
        </p>
        <a
          href="/#contact"
          className="mt-8 inline-block bg-cyan-500 px-8 py-4 font-bold text-[#071426] transition hover:bg-cyan-400"
        >
          CONTACT US
        </a>
      </section>

      <p className="bg-slate-100 px-6 py-4 text-center text-xs text-slate-500">
        AEROBRIDGE GLOBAL LOGISTICS — Fictional portfolio demonstration.
        Not an operating logistics company.
      </p>
    </main>
  );
}