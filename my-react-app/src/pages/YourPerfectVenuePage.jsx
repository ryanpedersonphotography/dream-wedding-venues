import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const YourPerfectVenuePage = () => {
  const [venueType, setVenueType] = useState('');
  const [guestCapacity, setGuestCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const venueTypes = ['Beach', 'Rustic', 'Garden', 'Ballroom', 'Historic', 'Modern'];
  const capacityRanges = ['0-50', '51-100', '101-200', '201-300', '301+'];
  const locations = ['New York', 'California', 'Texas', 'Florida', 'Illinois']; // Example locations
  const priceRanges = ['$', '$$', '$$$', '$$$$'];

  const handleSearch = () => {
    // In a real application, this would trigger a search based on the selected filters
    console.log('Searching with filters:', { venueType, guestCapacity, location, priceRange });
  };

  return (
    <div className="font-sans bg-rose-50 min-h-screen">
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center">Your Perfect Venue</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <select
                className="w-full p-2 border border-gray-300 rounded appearance-none"
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
                className="w-full p-2 border border-gray-300 rounded appearance-none"
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
                className="w-full p-2 border border-gray-300 rounded appearance-none"
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
                className="w-full p-2 border border-gray-300 rounded appearance-none"
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
            className="w-full bg-rose-600 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 transition duration-300 flex items-center justify-center"
            onClick={handleSearch}
          >
            <Search size={20} className="mr-2" />
            Find Your Perfect Venue
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This is where search results would be displayed */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/400x300" alt="Sample Venue" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sample Venue</h3>
              <p className="text-gray-600 mb-4">This is where venue details would appear after searching.</p>
              <a href="#" className="text-rose-600 hover:text-rose-700 font-bold">View 3D Tour</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/400x300" alt="Sample Venue" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sample Venue</h3>
              <p className="text-gray-600 mb-4">This is where venue details would appear after searching.</p>
              <a href="#" className="text-rose-600 hover:text-rose-700 font-bold">View 3D Tour</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://placehold.co/400x300" alt="Sample Venue" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sample Venue</h3>
              <p className="text-gray-600 mb-4">This is where venue details would appear after searching.</p>
              <a href="#" className="text-rose-600 hover:text-rose-700 font-bold">View 3D Tour</a>
            </div>
          </div>
          {/* More venue results would be dynamically added here based on search */}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Dream Wedding Venues. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default YourPerfectVenuePage;


// import React, { useState } from 'react';
// import { Search, ChevronDown } from 'lucide-react';

// const YourPerfectVenuePage = () => {
//   const [venueType, setVenueType] = useState('');
//   const [guestCapacity, setGuestCapacity] = useState('');
//   const [location, setLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');

//   const venueTypes = ['Beach', 'Rustic', 'Garden', 'Ballroom', 'Historic', 'Modern'];
//   const capacityRanges = ['0-50', '51-100', '101-200', '201-300', '301+'];
//   const locations = ['New York', 'California', 'Texas', 'Florida', 'Illinois'];
//   const priceRanges = ['$', '$$', '$$$', '$$$$'];

//   const handleSearch = () => {
//     console.log('Searching with filters:', { venueType, guestCapacity, location, priceRange });
//   };

//   return (
//     <div className="font-sans bg-rose-50 min-h-screen flex flex-col">
//       <div className=" mx-auto px-6 py-8">
//       <h2 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center">Your Perfect Venue</h2>
      
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//           {/* Filter dropdowns remain the same */}
//         </div>
//         <button
//           className="w-full bg-rose-600 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 transition duration-300 flex items-center justify-center"
//           onClick={handleSearch}
//         >
//           <Search size={20} className="mr-2" />
//           Find Your Perfect Venue
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Sample venue card remains the same */}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default YourPerfectVenuePage;