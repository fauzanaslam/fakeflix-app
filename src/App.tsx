import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<DetailMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
