export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-extrabold leading-tight">
                Premium Car Care
                <span className="block text-green-400">
                  At Your Doorstep
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-300">
                AquaGlow Mobility provides premium doorstep
                car washing and detailing services.
              </p>

              <div className="mt-10 flex gap-4">
                <a
                  href="https://wa.me/919778525972"
                  target="_blank"
                  className="rounded-2xl bg-green-500 px-8 py-4 font-bold text-black"
                >
                  Book Now
                </a>

                <a
                  href="https://instagram.com/aquaglow_kerala"
                  target="_blank"
                  className="rounded-2xl border border-white px-8 py-4"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-white/5 p-10">
              <h2 className="text-3xl font-bold">
                Monthly Plan
              </h2>

              <div className="mt-6">
                <span className="text-7xl font-extrabold text-green-400">
                  ₹2199
                </span>

                <p className="mt-2 text-gray-400">
                  All Cars • One Price
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="rounded-xl bg-white/5 p-4">
                  ✅ 2 Dry Washes / Week
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  ✅ 1 Wet Wash / Week
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  ✅ Interior Vacuum
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  ✅ Doorstep Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}