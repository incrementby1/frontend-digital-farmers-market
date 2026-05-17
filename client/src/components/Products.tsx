import { products } from '../data/products';

const Products = () => {
  return (
    <section className="mx-auto mt-20 max-w-7xl rounded-3xl bg-gray-100 px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black">Ang tinda karun</h2>
          <p className="text-gray-500">Today's hand-picked selection.</p>
        </div>

        <button className="font-bold text-lime-700">View catalogue</button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full rounded-xl object-cover"
            />

            <div className="mt-5">
              <p className="text-xs uppercase text-gray-400">
                {product.category}
              </p>

              <h3 className="mt-1 text-xl font-bold">{product.name}</h3>

              <div className="mt-4 flex items-center justify-between">
                <p className="font-black text-lime-700">{product.price}</p>

                <button className="rounded-full bg-lime-700 px-4 py-2 text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
