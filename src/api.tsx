// const REACT_APP_BASEURL = import.meta.env.VITE_REACT_APP_BASEURL || "";
// const REACT_APP_APIKEY = import.meta.env.VITE_REACT_APP_APIKEY || "";

export const getMovieList = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASEURL}/movie/popular?api_key=${
        import.meta.env.VITE_REACT_APP_APIKEY
      }`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
  }
};

export const searchMovie = async (q: string) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASEURL
      }/search/movie?query=${q}&api_key=${
        import.meta.env.VITE_REACT_APP_APIKEY
      }`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
  }
};
