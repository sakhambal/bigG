import Homepage from "./pages/Homepage/Homepage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route, Navigate } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/ContactUs/Contact"
import ProjectsPage from "./pages/Projects/Projects"
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/projects" element={<Navigate to="/projects/residential" replace />} />
      <Route path="/projects/:category" element={<ProjectsPage />} />
      <Route path="/projects/:category/:projectId" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;