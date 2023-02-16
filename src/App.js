// Global Styles
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap Stles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
