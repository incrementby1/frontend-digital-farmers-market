const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-black text-lime-700">GikanUma</h1>

        <div className="hidden gap-6 md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
