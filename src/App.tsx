import { ThemeProvider } from "@emotion/react";
import theme from "./utils/Theme";
import Header from "./components/Header";
import Features from "./components/Features";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Features />
    </ThemeProvider>
  );
}

export default App;
