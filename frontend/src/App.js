// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Import components
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Service from './components/pages/Service';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/service" element={<Service />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

