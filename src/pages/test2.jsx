import { useEffect, useState } from "react";

const genreId = {
  romance: 10749,
  "sci-fi": 878,
  adventure: 12,
  fantasy: 14,
};

const MovieFilter = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    async function getMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=YOURKEY`
      );
      const data = await res.json();
      setMovies(data.results);
    }
    getMovies();
  }, []);

  const filtered = movies.filter((movie) => {
    if (!genre) return true;
    // if (!genre) return true;
    // Kalau genre kosong (""):
    // user belum memilih genre
    // tampilkan semua film
    // Karena .filter() tetap memasukkan semua item.
    return movie.genre_ids.includes(genreId[genre]);
    // genreId adalah object mapping:
    // Kalau genre = "romance" →
    // genreId["romance"] === 10749

    // Kalau genre = "sci-fi" →
    // genreId["sci-fi"] === 878
  });

  return (
    <div>
      <h2>Filter By Genre (Button Version)</h2>

      {/* Button yang mengirim value */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setGenre("")}>ALL</button>
        <button onClick={() => setGenre("romance")}>Romance</button>
        <button onClick={() => setGenre("sci-fi")}>Sci-Fi</button>
        <button onClick={() => setGenre("adventure")}>Adventure</button>
        <button onClick={() => setGenre("fantasy")}>Fantasy</button>
      </div>

      {/* Hasil filter */}
      <div>
        {filtered.map((m) => (
          <p key={m.id}>{m.title}</p>
        ))}
      </div>
    </div>
  );
};

export default MovieFilter;
