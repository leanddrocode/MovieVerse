export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold text-red-600 cursor-pointer">
          🎬 MovieVerse
        </h1>

        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300"
          >
            Populares
          </a>

          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300"
          >
            Favoritos
          </a>
        </nav>
      </div>
    </header>
  );
}