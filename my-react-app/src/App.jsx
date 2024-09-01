import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import YourPerfectVenuePage from './pages/YourPerfectVenuePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/your-perfect-venue" element={<YourPerfectVenuePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;