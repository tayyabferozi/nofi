import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./screens/Landing.jsx";
import ServerError from "./screens/ServerError";
import Forbidden from "./screens/Forbidden";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/50x" element={<ServerError />} />
        <Route exact path="/403" element={<Forbidden />} />
        <Route exact path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
