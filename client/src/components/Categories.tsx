import { categories } from '../data/products';

const Categories = () => {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <h2 className="mb-8 text-3xl font-bold">Browse by Variety</h2>

      <div className="flex gap-8 overflow-x-auto">
        {categories.map((item) => (
          <div key={item.name} className="min-w-[160px] text-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-40 rounded-full object-cover"
            />

            <p className="mt-4 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
