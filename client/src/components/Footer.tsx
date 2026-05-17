const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div>
          <h2 className="text-3xl font-black text-lime-700">GikanUma</h2>

          <p className="mt-2 text-sm text-gray-500">© 2026 GikanUma</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Sustainability</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
