import BMI from "./pages/BMI";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/bmi" element={<BMI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;