import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Internships from './pages/Internship';
import About from './pages/About';
import PT from './pages/PT';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Home page */}
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/pt" element={<PT />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
