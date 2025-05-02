import React from 'react';

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-cover bg-center h-64 flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg bg-black bg-opacity-70 p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-white mb-2">Our Services</h1>
            <p className="text-white">Discover how we make your shopping and delivery experience exceptional</p>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Shopping Services */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Online Shopping</h3>
            <p className="text-gray-700">
              Browse our extensive collection of gourmet food products from the comfort of your home. Our user-friendly website makes shopping a breeze.
            </p>
          </div>
          
          {/* Food Delivery */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Express Food Delivery</h3>
            <p className="text-gray-700">
              Enjoy our premium food products delivered to your doorstep within 60 minutes. We ensure your gourmet items arrive fresh and ready to enjoy.
            </p>
          </div>
          
          {/* Bike/Scooter Delivery */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bike & Scooter Delivery</h3>
            <p className="text-gray-700">
              Our fleet of dedicated delivery partners use eco-friendly bikes and scooters to navigate through traffic efficiently, ensuring your order arrives on time.
            </p>
          </div>
          
          {/* Secure Payments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payments</h3>
            <p className="text-gray-700">
              Shop with confidence using our secure payment gateway that protects your personal and financial information.
            </p>
          </div>
          
          {/* Temperature-Controlled Delivery */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Temperature-Controlled Delivery</h3>
            <p className="text-gray-700">
              Our specialized delivery containers maintain the perfect temperature for your gourmet foods, ensuring they arrive in optimal condition.
            </p>
          </div>
          
          {/* Easy Returns */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Returns</h3>
            <p className="text-gray-700">
              Not satisfied with your purchase? Our hassle-free return policy allows you to return items within 30 days.
            </p>
          </div>
          
          {/* 24/7 Support */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-700">
              Our dedicated customer support team is available around the clock to assist you with any questions or concerns.
            </p>
          </div>
          
          {/* Real-time Tracking */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Tracking</h3>
            <p className="text-gray-700">
              Track your delivery in real-time through our mobile app. Know exactly when your gourmet food will arrive at your doorstep.
            </p>
          </div>
          
          {/* Gift Services */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gift Services</h3>
            <p className="text-gray-700">
              Looking for the perfect gift? We offer premium gift wrapping, personalized messages, and special delivery options for a memorable experience.
            </p>
          </div>
        </div>
        
        {/* Delivery Process Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Delivery Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Placement</h3>
              <p className="text-gray-700">
                Place your order through our website or mobile app with just a few clicks.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Processing</h3>
              <p className="text-gray-700">
                Our team carefully selects and packages your gourmet items with care.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dispatch</h3>
              <p className="text-gray-700">
                Your order is assigned to the nearest delivery partner with appropriate transport.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery</h3>
              <p className="text-gray-700">
                Receive your gourmet food items at your doorstep and enjoy the premium quality.
              </p>
            </div>
          </div>
        </div>
      {/* Delivery Fleet Section */}
<div className="mt-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Delivery Fleet</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
           alt="Delivery Bikes" 
           className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Electric Bikes</h3>
        <p className="text-gray-700">
          Our eco-friendly electric bikes are perfect for navigating through busy urban areas, ensuring quick delivery while reducing our carbon footprint.
        </p>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="https://images.unsplash.com/photo-1565438525268-adf2e49737e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
           alt="Delivery Scooters" 
           className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery Scooters</h3>
        <p className="text-gray-700">
          Our fleet of scooters allows for efficient delivery across longer distances, equipped with specialized compartments to keep your food at the right temperature.
        </p>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
           alt="Delivery Vans" 
           className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Refrigerated Vans</h3>
        <p className="text-gray-700">
          For larger orders or catering services, our refrigerated vans ensure that bulk orders maintain perfect temperature and quality during transport.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Customer Testimonials */}
<div className="mt-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold text-xl">S</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
          <div className="flex text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">
        "The delivery was incredibly fast! I ordered some artisanal cheeses for a dinner party, and they arrived perfectly chilled. The delivery person was very professional and followed all my delivery instructions."
      </p>
    </div>
    


    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold text-xl">M</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Michael Rodriguez</h3>
          <div className="flex text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">
        "I love the bike delivery option! It's environmentally friendly and still gets my food to me quickly. The temperature-controlled packaging keeps everything fresh, and I can track my delivery in real-time."
      </p>
    </div>
  </div>
</div>

{/* Service Area */}
<div className="mt-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Service Areas</h2>
  
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">We Deliver To:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Downtown
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Midtown
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Uptown
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                West End
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                East Side
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                North Hills
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                South Park
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Riverside
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:border-l md:pl-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Delivery Times</h3>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="font-medium">Monday - Friday:</span>
            <span>8:00 AM - 10:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Saturday:</span>
            <span>9:00 AM - 11:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Sunday:</span>
            <span>10:00 AM - 9:00 PM</span>
          </li>
          <li className="mt-4 text-sm text-gray-600">
            * Delivery times may vary during holidays and special events
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Call to Action */}
<div className="mt-16 bg-blue-600 rounded-lg shadow-lg p-8 text-center">
  <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience Our Services?</h2>
  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
    Discover the convenience of our gourmet food delivery service. From farm-fresh ingredients to artisanal products, we bring quality to your doorstep.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300">
      Order Now
    </button>
    <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300">
      Download Our App
    </button>
  </div>
</div>
      </main>
    </div>
  );
};

export default Service;

