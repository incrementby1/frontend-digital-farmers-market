const Newsletter = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            From our farm to your kitchen.
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Join our weekly harvest newsletter.
          </p>

          <div className="mt-8 flex gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border px-6 py-4"
            />

            <button className="rounded-full bg-lime-700 px-6 py-4 text-white">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
