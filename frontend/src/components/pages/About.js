import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            Welcome to OrebiShopping, your premier destination for quality fashion and accessories.
          </p>
          <p className="text-gray-700 mb-4">
            Founded in 2023, OrebiShopping has quickly become a trusted name in online retail, offering a wide range of products from casual wear to formal attire, accessories, and more.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to provide high-quality products at affordable prices, with exceptional customer service and a seamless shopping experience.
          </p>
          <p className="text-gray-700">
            We source our products from trusted manufacturers and designers, ensuring that every item meets our strict quality standards before it reaches our customers.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
