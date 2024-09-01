import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';


const HomePage = () => {
  const featuredVenues = [
    {
      name: "Seaside Resort",
      description: "Experience the beauty of a beachfront ceremony.",
      image: "https://placehold.co/400x300"
    },
    {
      name: "Rustic Barn",
      description: "A charming countryside venue for a cozy celebration.",
      image: "https://placehold.co/400x300"
    },
    {
      name: "City Skyline",
      description: "An elegant rooftop venue with breathtaking views.",
      image: "https://placehold.co/400x300"
    }
  ];

  return (
    <div className="font-sans bg-rose-50 min-h-screen flex flex-col">

      <main className="flex-grow">
        <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: "url('https://placehold.co/1200x600')"}}>
          <div className="text-center text-white">
            <h2 className="text-5xl font-serif font-bold mb-4">Find Your Dream Wedding Venue</h2>
            <p className="text-xl mb-8">Explore stunning venues with our 3D virtual tours</p>
            <button className="bg-rose-600 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-700 transition duration-300">
              Start Exploring
            </button>
          </div>
        </section>

        <section className="py-16">
          <div className=" mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">Featured Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredVenues.map((venue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{venue.name}</h3>
                    <p className="text-gray-600 mb-4">{venue.description}</p>
                    <a href="#" className="text-rose-600 hover:text-rose-700 font-bold">View 3D Tour</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-100 py-16 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Ready to Find Your Dream Venue?</h2>
          <p className="text-xl text-gray-600 mb-8">Explore our full collection of stunning wedding venues in immersive 3D.</p>
          <button className="bg-rose-600 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-700 transition duration-300">
            View All Venues
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className=" mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Dream Wedding Venues</h3>
              <p className="text-gray-400">Helping you find the perfect wedding venue with immersive 3D tours.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Venues</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: info@dreamweddingvenues.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dream Wedding Venues. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;