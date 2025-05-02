import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-64 flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg bg-black bg-opacity-70 p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-white">We'd love to hear from you. Reach out to our team.</p>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information & Map */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-700">+1 (123) 456-7890</p>
                    <p className="text-gray-700">+1 (987) 654-3210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-700">info@orebishopping.com</p>
                    <p className="text-gray-700">support@orebishopping.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-700">123 Shopping Street</p>
                    <p className="text-gray-700">Fashion District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9am to 5pm</p>
                    <p className="text-gray-700">Saturday: 10am to 4pm</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-md p-6 h-80">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
              <div className="relative h-56 w-full rounded-lg overflow-hidden border-4 border-white shadow-lg">
                {/* Google Maps iframe - Replace with your actual location */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076294379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sFashion%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1628436301513!5m2!1sen!2sus" 
                  className="absolute inset-0 w-full h-full"
                  style={{border: 0}}
                  allowFullScreen="" 
                  loading="lazy"
                  title="Store Location"
                ></iframe>
                
                {/* Focal point marker */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What are your shipping rates?</h3>
              <p className="text-gray-700">
                We offer free shipping on all orders over $50. For orders under $50, a flat shipping rate of $5.99 applies.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I track my order?</h3>
              <p className="text-gray-700">
                Once your order ships, you will receive a tracking number via email that you can use to monitor your delivery status.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What is your return policy?</h3>
              <p className="text-gray-700">
                We accept returns within 30 days of purchase. Items must be in original condition with tags attached.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you ship internationally?</h3>
              <p className="text-gray-700">
                Yes, we ship to select international destinations. Additional shipping fees and customs duties may apply.
              </p>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
