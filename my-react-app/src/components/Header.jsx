import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <h1 className="text-3xl font-serif font-bold text-rose-600">Dream Wedding Venues</h1>
      <nav>
      <Link to="/" className="text-gray-800 hover:text-rose-600 px-3 py-2">Home</Link>
      <Link to="/your-perfect-venue" className="text-gray-800 hover:text-rose-600 px-3 py-2">Venues</Link>
      <Link to="/" className="text-gray-800 hover:text-rose-600 px-3 py-2">About</Link>
      <Link to="/" className="text-gray-800 hover:text-rose-600 px-3 py-2">Contact</Link>
      </nav>
    </div>
  </header>
  );
}

export default Header;