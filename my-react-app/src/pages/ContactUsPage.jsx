import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-rose-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-rose-600 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">We're here to help you find your dream wedding venue. Feel free to reach out to us through any of the following methods:</p>
              <ul className="text-gray-600">
                <li className="mb-2"><strong>Email:</strong> info@dreamweddingvenues.com</li>
                <li className="mb-2"><strong>Phone:</strong> (123) 456-7890</li>
                <li className="mb-2"><strong>Address:</strong> 123 Wedding Lane, Celebration City, WV 12345</li>
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <img src="https://placehold.co/800x400" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;