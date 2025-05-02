import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/features/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
        
        {cart.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-800">Shopping Cart ({cart.totalQuantity} items)</h2>
                </div>
                
                <div className="divide-y">
                  {cart.items.map(item => (
                    <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between p-4">
                      <div className="flex items-center mb-4 md:mb-0">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between md:w-1/3">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => handleDecrementQuantity(item.id)}
                            className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-x">{item.quantity}</span>
                          <button 
                            onClick={() => handleIncrementQuantity(item.id)}
                            className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="font-semibold text-gray-800 mr-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button 
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${cart.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${(cart.totalAmount * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold text-gray-800">
                    <span>Total</span>
                    <span>${(cart.totalAmount * 1.1).toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
