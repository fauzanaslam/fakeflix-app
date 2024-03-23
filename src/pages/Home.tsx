import { ThemeProvider } from "@emotion/react";
import theme from "../utils/Theme";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { useState } from "react";
import Login from "../components/Login";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header OpenModal={() => setOpen(true)} />
      <Features />
      <Footer />
      <Login open={open} CloseModal={() => setOpen(false)} />
    </ThemeProvider>
  );
}

export default Home;
