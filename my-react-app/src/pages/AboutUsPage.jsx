import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-rose-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center">About Dream Wedding Venues</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <img src="https://placehold.co/120x400" alt="Our Story" className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Dream Wedding Venues was born out of a passion for creating unforgettable moments. Founded in 2020, 
              we set out on a mission to revolutionize the way couples discover and choose their perfect wedding venue. 
              Our journey began when our founder, Sarah, struggled to find the ideal location for her own wedding.
            </p>
            <p className="text-gray-600">
              Recognizing the need for a more intuitive and immersive venue selection experience, we harnessed the 
              power of technology to bring wedding venues to life through stunning 3D virtual tours.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Dream Wedding Venues, our mission is to make the journey of finding the perfect wedding venue as 
              magical as the big day itself. We strive to provide couples with an innovative platform that offers:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>Immersive 3D virtual tours of stunning venues</li>
              <li>Comprehensive information to make informed decisions</li>
              <li>A stress-free and enjoyable venue selection process</li>
              <li>Connections to top-tier venues across the country</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Sarah Johnson', 'Michael Lee', 'Emma Thompson'].map((name, index) => (
                <div key={index} className="text-center">
                  <img src={`https://placehold.co/150x150`} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800">{name}</h3>
                  <p className="text-gray-600">Co-Founder</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;