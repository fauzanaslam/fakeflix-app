import { useEffect, useState } from "react";
import { detailMovie } from "../api";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
interface Movie {
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  id: number;
}

const DetailMovie = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const [detailMovieData, setDetailMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const result = await detailMovie(Number(movieId));
        setDetailMovieData(result);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  console.log({ detailMovie: detailMovieData });

  if (!detailMovieData) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Box bgcolor={"black"}>
      <Box
        sx={{
          position: "relative",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`,
          },
        }}
      >
        <img
          src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
            detailMovieData.backdrop_path
          }`}
          alt="Backdrop Netflix"
          width="100%"
        />{" "}
      </Box>
      <Container sx={{ padding: "1rem" }}>
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          {detailMovieData.title}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: "white" }}>
          {detailMovieData.overview}
        </Typography>
      </Container>
    </Box>
  );
};

export default DetailMovie;
