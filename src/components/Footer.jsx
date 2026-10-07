const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">MINI Shopping</p>
          <p className="mt-1 text-xs text-gray-400">
            A simple React shopping cart project.
          </p>
        </div>

        <p className="text-xs text-gray-400">
          © 2026 MINI Shopping. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
