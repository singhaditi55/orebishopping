import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
        
        {/* Main About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Welcome to OrebiShopping, your premier destination for quality fashion, accessories, and gourmet food products.
          </p>
          <p className="text-gray-700 mb-4">
            Founded in 2023, OrebiShopping has quickly become a trusted name in online retail, offering a wide range of products from casual wear to formal attire, accessories, and now featuring an exclusive collection of gourmet food items.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to provide high-quality products at affordable prices, with exceptional customer service and a seamless shopping experience.
          </p>
          <p className="text-gray-700">
            We source our products from trusted manufacturers, designers, and artisanal food producers, ensuring that every item meets our strict quality standards before it reaches our customers.
          </p>
        </div>
        
        {/* Food Section */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Gourmet Food Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Food Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
              alt="Organic Meals" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">Organic Meals</h4>
              <p className="text-gray-600 mt-2 text-sm">Freshly prepared organic meals made with locally sourced ingredients.</p>
              <div className="mt-4">
                <span className="text-blue-600 font-medium">Starting from $12.99</span>
              </div>
            </div>
          </div>
          
          {/* Food Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187" 
              alt="Artisanal Pastries" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">Artisanal Pastries</h4>
              <p className="text-gray-600 mt-2 text-sm">Handcrafted pastries from award-winning bakers across the country.</p>
              <div className="mt-4">
                <span className="text-blue-600 font-medium">Starting from $4.99</span>
              </div>
            </div>
          </div>
          
          {/* Food Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8" 
              alt="Specialty Drinks" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">Specialty Drinks</h4>
              <p className="text-gray-600 mt-2 text-sm">Premium coffee, tea, and craft beverages from around the world.</p>
              <div className="mt-4">
                <span className="text-blue-600 font-medium">Starting from $3.49</span>
              </div>
            </div>
          </div>
          
          {/* Food Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d" 
              alt="Gourmet Ingredients" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">Gourmet Ingredients</h4>
              <p className="text-gray-600 mt-2 text-sm">Hard-to-find specialty ingredients for the home chef and food enthusiast.</p>
              <div className="mt-4">
                <span className="text-blue-600 font-medium">Starting from $8.99</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Delivery Times Section */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Delivery Information</h3>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Delivery Times</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Standard Delivery:</span>
                  <span>3-5 business days</span>
                </li>
                <li className="flex justify-between">
                  <span>Express Delivery:</span>
                  <span>1-2 business days</span>
                </li>
                <li className="flex justify-between">
                  <span>Same Day Delivery:</span>
                  <span>Available in select cities</span>
                </li>
                <li className="flex justify-between">
                  <span>Food Items Delivery:</span>
                  <span>1-3 business days (refrigerated)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Processing Times</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Order Processing:</span>
                  <span>24-48 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Fresh Food Preparation:</span>
                  <span>Same day of shipping</span>
                </li>
                <li className="flex justify-between">
                  <span>Custom Orders:</span>
                  <span>3-5 business days</span>
                </li>
                <li className="flex justify-between">
                  <span>Order Modifications:</span>
                  <span>Up to 12 hours after ordering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Terms and Conditions */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Terms & Conditions</h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Food Products</h4>
            <p className="text-gray-700 mb-2">
              All food products are carefully packaged to maintain freshness during transit. Due to the perishable nature of food items, we cannot accept returns on these products unless they arrive damaged or spoiled.
            </p>
            <p className="text-gray-700">
              Food items are shipped with appropriate cooling materials and temperature-controlled packaging when necessary. We recommend consuming perishable items within 24-48 hours of delivery.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Shipping Policy</h4>
            <p className="text-gray-700 mb-2">
              Free shipping on orders over $50. Additional fees may apply for express delivery, same-day delivery, or delivery to remote locations.
            </p>
            <p className="text-gray-700">
              International shipping is available to select countries. Import duties and taxes may apply and are the responsibility of the customer.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Return Policy</h4>
            <p className="text-gray-700 mb-2">
              Non-food items may be returned within 30 days of delivery for a full refund or exchange. Items must be unused and in original packaging.
            </p>
            <p className="text-gray-700">
              For any issues with food products, please contact our customer service team within 24 hours of delivery with photos of the received items.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;