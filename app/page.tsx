import Image from "next/image";
import Link from "next/link";
import getMovies from "@/service/tmdb";

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>

      {!movies ? (
        <p>Failed to load movies.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie: any) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <div className="bg-gray-900 p-3 rounded-lg cursor-pointer">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  width={300}
                  height={450}
                  className="rounded"
                />

                <h2 className="mt-2 text-lg font-semibold">
                  {movie.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
