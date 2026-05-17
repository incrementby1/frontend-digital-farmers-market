const Hero = () => {
  return (
    <section className="mt-20 px-6">
      <div className="mx-auto flex max-w-7xl rounded-3xl bg-lime-700 p-12 text-white">
        <div className="max-w-2xl">
          <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase text-black">
            Direct from Farm
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">
            Experience the Digital Harvest.
          </h1>

          <p className="mt-6 text-lg text-lime-100">
            Curated fresh produce from local soil to your doorstep.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-bold text-lime-700">
              Shop Fresh
            </button>

            <button className="rounded-full border border-white px-6 py-3">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
