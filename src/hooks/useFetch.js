import { useEffect, useState } from "react";

const useFetch = (urlF) => {
  const [url, setUrl] = useState(() => {
    if (typeof urlF === "function") return urlF();
    return urlF;
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) return;
    // mengatasi url kosong
    // mengatasi url kalau null

    (async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const json = await response.json();
        setData(Array.isArray(json) ? json : json.results);
        setError("");
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  // Fetch ulang jika url berubah

  return { data, loading, error, setUrl };
};

export default useFetch;
