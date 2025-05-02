// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Header = () => {
//   const cart = useSelector((state) => state.cart);
  
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold text-gray-800">OrebiShopping</Link>
          
//           <nav className="hidden md:flex space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
//             <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</Link>
//             <Link to="/service" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</Link>
//           </nav>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                   {cart.totalQuantity || 0}
//                 </span>
//               </Link>
//             </div>
            
//             {/* Mobile menu button */}
//             <button className="md:hidden text-gray-700 hover:text-gray-900">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile menu - hidden by default */}
//         <div className="md:hidden hidden pt-4">
//           <nav className="flex flex-col space-y-3">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
//             <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</Link>
//             <Link to="/service" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105">OrebiShopping</Link>
          
          {/* Right side navbar */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Home</Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">About</Link>
              <Link to="/service" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Services</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Contact</Link>
            </nav>
            
            <div className="relative">
              <Link to="/cart" className="flex items-center space-x-1 text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.totalQuantity || 0}
                </span>
              </Link>
            </div>
            
            <button 
              className="md:hidden text-white hover:text-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden pt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-white hover:text-blue-400 transition-all duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition-all duration-300">About</Link>
            <Link to="/service" className="text-white hover:text-blue-400 transition-all duration-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-all duration-300">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

