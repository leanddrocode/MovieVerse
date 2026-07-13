"use client";

import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieGrid from "../components/MovieGrid";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getMovies() {
      const response = await fetch("/api/movies");
      const data = await response.json();

      setMovies(data.results);
    }

    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
<HeroBanner movie={movies[0]} />

      <main
        style={{
          background: "#111827",
          minHeight: "100vh",
          color: "white",
          padding: "140px 40px 40px",
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-2">
  🔥 Filmes Populares
</h2>

<p className="text-gray-400 mb-8">
  Descubra os filmes mais populares do momento.
</p>

       <SearchBar
  search={search}
  setSearch={setSearch}
/>

        <MovieGrid movies={filteredMovies} />
      </main>
    </>
  );
}