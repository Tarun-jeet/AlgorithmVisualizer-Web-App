import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SortAlgorithms from './pages/SortAlgorithms';
import TreeAlgorithms from './pages/TreeAlgorithms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sort-algorithms" element={<SortAlgorithms />} />
            <Route path="/tree-algorithms" element={<TreeAlgorithms />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
