


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Header = () => {
//   const location = useLocation();

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/your-perfect-venue', label: 'Your Perfect Venue' },
//     { path: '/about', label: 'About' },
//     { path: '/contact', label: 'Contact' }
//   ];

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//         <h1 className="text-3xl font-serif font-bold text-rose-600">Dream Wedding Venues</h1>
//         <nav>
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`text-gray-800 hover:text-rose-600 px-3 py-2 ${
//                 location.pathname === item.path ? 'font-bold' : 'font-normal'
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/your-perfect-venue', label: 'Your Perfect Venue' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold text-rose-600 hover:text-rose-700 transition duration-300">
          Dream Wedding Venues
        </Link>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-800 hover:text-rose-600 px-3 py-2 ${
                location.pathname === item.path ? 'font-bold' : 'font-normal'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;