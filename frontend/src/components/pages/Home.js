import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [products] = useState([
    {
      id: 1,
      title: "Casual Shirt",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      description: "Comfortable casual shirt for everyday wear"
    },
    {
      id: 2,
      title: "Denim Jeans",
      price: 59.99,
      image: "https://via.placeholder.com/150",
      description: "Classic denim jeans with perfect fit"
    },
    {
      id: 3,
      title: "Sneakers",
      price: 79.99,
      image: "https://via.placeholder.com/150",
      description: "Stylish and comfortable sneakers"
    },
    {
      id: 4,
      title: "Leather Jacket",
      price: 129.99,
      image: "https://via.placeholder.com/150",
      description: "Premium leather jacket for a stylish look"
    },
    {
      id: 5,
      title: "Formal Suit",
      price: 199.99,
      image: "https://via.placeholder.com/150",
      description: "Elegant formal suit for special occasions"
    },
    {
      id: 6,
      title: "Winter Coat",
      price: 149.99,
      image: "https://via.placeholder.com/150",
      description: "Warm winter coat for cold weather"
    },
    {
      id: 7,
      title: "Summer Dress",
      price: 69.99,
      image: "https://via.placeholder.com/150",
      description: "Light and breezy summer dress"
    },
    {
      id: 8,
      title: "Running Shoes",
      price: 89.99,
      image: "https://via.placeholder.com/150",
      description: "High-performance running shoes"
    },
    {
      id: 9,
      title: "Backpack",
      price: 45.99,
      image: "https://via.placeholder.com/150",
      description: "Durable backpack for everyday use"
    },
    {
      id: 10,
      title: "Sunglasses",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      description: "Stylish sunglasses with UV protection"
    },
    {
      id: 11,
      title: "Wristwatch",
      price: 119.99,
      image: "https://via.placeholder.com/150",
      description: "Elegant wristwatch for any occasion"
    },
    {
      id: 12,
      title: "Beanie Hat",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      description: "Warm beanie hat for winter"
    },
    {
      id: 13,
      title: "Scarf",
      price: 24.99,
      image: "https://via.placeholder.com/150",
      description: "Soft and warm scarf for cold days"
    },
    {
      id: 14,
      title: "Leather Wallet",
      price: 39.99,
      image: "https://via.placeholder.com/150",
      description: "Genuine leather wallet with multiple compartments"
    },
    {
      id: 15,
      title: "Belt",
      price: 34.99,
      image: "https://via.placeholder.com/150",
      description: "Classic leather belt for formal and casual wear"
    },
    {
      id: 16,
      title: "Polo Shirt",
      price: 44.99,
      image: "https://via.placeholder.com/150",
      description: "Classic polo shirt for a smart casual look"
    },
    {
      id: 17,
      title: "Hoodie",
      price: 54.99,
      image: "https://via.placeholder.com/150",
      description: "Comfortable hoodie for casual outings"
    },
    {
      id: 18,
      title: "Sweatpants",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      description: "Comfortable sweatpants for workouts or lounging"
    },
    {
      id: 19,
      title: "Baseball Cap",
      price: 22.99,
      image: "https://via.placeholder.com/150",
      description: "Stylish baseball cap for sun protection"
    },
    {
      id: 20,
      title: "Crossbody Bag",
      price: 59.99,
      image: "https://via.placeholder.com/150",
      description: "Trendy crossbody bag for everyday essentials"
    }
  ]);

  const addToCart = (product) => {
    dispatch({
      type: 'cart/addToCart',
      payload: product
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: 'cart/removeFromCart',
      payload: productId
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.items && cart.items.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {cart.items.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-600">${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold">${cart.totalAmount || 0}</span>
              </div>
              <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
