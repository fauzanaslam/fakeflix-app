import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, Grid, TextField } from "@mui/material";
import { searchMovie, getMovieList } from "../api";
import { useEffect, useState } from "react";

interface Movie {
  title: string;
  poster_path: string;
  overview: string;
}

export default function ActionAreaCard() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (searchTerm.trim().length > 3) {
      searchMovie(searchTerm).then((result) => {
        setPopularMovies(result);
      });
    } else {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  }, [searchTerm]);

  console.log({ popularMovies: popularMovies });

  return (
    <Grid container spacing={2}>
      <Grid container>
        <Grid item xs sx={{ paddingLeft: "15px" }}>
          <TextField
            variant="filled"
            label="Movies"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ bgcolor: "common.white" }}
          />
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ height: "100%", borderRadius: "2px" }}
          >
            search
          </Button>
        </Grid>
      </Grid>
      {popularMovies.map((movie, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <CardActionArea>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                  movie.poster_path
                }`}
                alt="Movie Poster"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.overview}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}
