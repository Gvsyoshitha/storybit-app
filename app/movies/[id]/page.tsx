import  getMovieDetails, { getMovieById }  from "@/service/tmdb";

export default async function MovieDetails({ params }: any) {
  const { id } = params;

  const movie = await getMovieById(id);

  if (!movie) {
    return <div>Movie details not found.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        {movie.title}
      </h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "250px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {movie.overview}
      </p>

      <p style={{ marginTop: "10px", fontSize: "16px" }}>
        ⭐ Rating: {movie.vote_average}
      </p>

      <p style={{ fontSize: "16px" }}>
        📅 Release Date: {movie.release_date}
      </p>
    </div>
  );
}
