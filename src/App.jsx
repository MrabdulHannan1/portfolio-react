// app.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/styles/projec.css";
import "./components/styles/about.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Footer from "./components/footer.jsx";
import HireMeForm from "./components/hire.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/hire" element={<HireMeForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
