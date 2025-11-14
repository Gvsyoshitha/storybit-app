export interface Movie {
  id: number;
  title: string;
  name?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
  vote_average?: number;
}
export async function getMovies() {
  try {
    const res = await fetch("/api/movies");

    if (!res.ok) {
      console.error("API error:", res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}