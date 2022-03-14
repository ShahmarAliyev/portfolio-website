import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import SideBar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <div>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="portfolio/about" element={<About />} />
              <Route path="portfolio/" element={<Home />} />
              <Route path="portfolio/projects" element={<Projects />} />
              <Route path="portfolio/resume" element={<Resume />} />
            </Routes>
            <Footer className="footer" />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
