export default function MovieCard({ title, rating, image }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white line-clamp-1">
          {title}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
            ⭐ {rating.toFixed(1)}
          </span>

          <button className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-black transition hover:bg-red-600 hover:text-white">
            Ver
          </button>
        </div>
      </div>

    </div>
  );
}