export default function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <input
        type="text"
        placeholder="🔍 Pesquisar filmes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl bg-gray-800 text-white px-5 py-4 outline-none border border-gray-700 focus:border-red-600 transition"
      />
    </div>
  );
}