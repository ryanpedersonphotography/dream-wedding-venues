import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const YourPerfectVenuePage = () => {
  const [venueType, setVenueType] = useState('');
  const [guestCapacity, setGuestCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const venueTypes = ['Beach', 'Rustic', 'Garden', 'Ballroom', 'Historic', 'Modern'];
  const capacityRanges = ['0-50', '51-100', '101-200', '201-300', '301+'];
  const locations = ['New York', 'California', 'Texas', 'Florida', 'Illinois'];
  const priceRanges = ['$', '$$', '$$$', '$$$$'];

  const handleSearch = () => {
    console.log('Searching with filters:', { venueType, guestCapacity, location, priceRange });
  };

  return (
    <div className="bg-rose-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center">Find Your Perfect Venue</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Venue Search</h2>
            <p className="text-gray-600 mb-6">Use the filters below to discover your dream wedding venue.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <select
                  className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={venueType}
                  onChange={(e) => setVenueType(e.target.value)}
                >
                  <option value="">Venue Type</option>
                  {venueTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <select
                  className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={guestCapacity}
                  onChange={(e) => setGuestCapacity(e.target.value)}
                >
                  <option value="">Guest Capacity</option>
                  {capacityRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <select
                  className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <select
                  className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Price Range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 text-gray-400" size={20} />
              </div>
            </div>
            
            <button
              className="w-full bg-rose-600 text-white font-bold py-3 px-4 rounded-md hover:bg-rose-700 transition duration-300 flex items-center justify-center"
              onClick={handleSearch}
            >
              <Search size={20} className="mr-2" />
              Find Your Perfect Venue
            </button>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Featured Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-rose-50 rounded-lg overflow-hidden shadow-md">
                  <img src={`https://placehold.co/400x300`} alt={`Sample Venue ${index}`} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Sample Venue {index}</h3>
                    <p className="text-gray-600 mb-4">This is where venue details would appear after searching.</p>
                    <a href="#" className="text-rose-600 hover:text-rose-700 font-bold">View 3D Tour</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPerfectVenuePage;