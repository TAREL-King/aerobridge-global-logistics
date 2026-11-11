import Link from "next/link";

const services = [
  {
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truck capacity for larger shipments requiring direct transportation and greater control.",
  },
  {
    title: "Less Than Truckload (LTL)",
    description:
      "Flexible freight solutions for smaller shipments that do not require a full truck.",
  },
  {
    title: "Regional Distribution",
    description:
      "Coordinated regional transportation planning for businesses moving goods between locations.",
  },
  {
    title: "Oversized Cargo",
    description:
      "Planning support for heavy, bulky and specialized cargo requiring additional handling considerations.",
  },
];

const process = [
  ["01", "Shipment enquiry", "Share your cargo details, origin and destination."],
  ["02", "Route planning", "Review routing, handling and transportation requirements."],
  ["03", "Freight coordination", "Coordinate the proposed movement and shipment arrangements."],
  ["04", "Delivery confirmation", "Confirm delivery details and close out the shipment record."],
];

export default function RoadFreightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

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
            Road Freight.
            <span className="block text-cyan-300">
              Connected by Confidence.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Explore flexible road transportation concepts designed to connect
            businesses, distribution points and supply chains across regional
            markets.
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
            ROAD TRANSPORTATION
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            A flexible link in the supply chain.
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            Road freight plays an important role in connecting ports,
            warehouses, manufacturers and final destinations. The right
            transportation plan considers cargo characteristics, route
            conditions, timing and handling requirements.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            This portfolio demonstration presents how a logistics provider
            could communicate road freight options and coordinate shipment
            enquiries. Actual routes, capacity and delivery commitments would
            require operational confirmation.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1200&q=85"
            alt="Heavy-duty freight truck on a highway"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              TRANSPORT OPTIONS
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Road freight solutions
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Different cargo requirements call for different transportation
              arrangements. Explore the service concepts below.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-bold text-cyan-700">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
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
              OUR APPROACH
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              A clearer shipment coordination process.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Effective freight coordination starts with accurate shipment
              information and a clear understanding of the delivery
              requirements.
            </p>
          </div>

          <div className="space-y-7">
            {process.map(([number, title, description]) => (
              <div key={number} className="flex gap-5 border-b border-slate-200 pb-7">
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
            LET'S PLAN YOUR SHIPMENT
          </p>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Every successful delivery starts with a conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Share your transportation requirements and explore the right
            coordination approach for your cargo.
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
          <p className="mt-5">© 2026 AEROBRIDGE GLOBAL LOGISTICS</p>
        </div>
      </footer>
    </main>
  );
}