import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home/Home";
import GamePage from "./routes/GamePage/GamePage";
import LogInPage from "./routes/LogInPage/LogInPage";
import PageNotFound from "./routes/PageNotFound/PageNotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
