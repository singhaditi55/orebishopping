import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/features/cartSlice';

const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [products] = useState([
    {
      id: 1,
      title: "Artisanal Pasta",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      description: "Handcrafted Italian pasta made with organic ingredients"
    },
    {
      id: 2,
      title: "Gourmet Cheese Selection",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862",
      description: "Assortment of premium cheeses from around the world"
    },
    {
      id: 3,
      title: "Organic Honey",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
      description: "Pure, raw honey harvested from local beekeepers"
    },
    {
      id: 4,
      title: "Premium Chocolate Box",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b",
      description: "Assorted handmade chocolates with exotic flavors"
    },
    {
      id: 5,
      title: "Specialty Coffee Beans",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1559525323-cbb5269e4497",
      description: "Freshly roasted single-origin coffee beans"
    },
    {
      id: 6,
      title: "Gourmet Olive Oil",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
      description: "Cold-pressed extra virgin olive oil from Mediterranean groves"
    },
    {
      id: 7,
      title: "Fresh Bakery Bread",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      description: "Artisanal sourdough bread baked fresh daily"
    },
    {
      id: 8,
      title: "Exotic Fruit Basket",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
      description: "Selection of seasonal exotic fruits from around the world"
    },
    {
      id: 9,
      title: "Gourmet Spice Collection",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757",
      description: "Premium spices to elevate your culinary creations"
    },
    {
      id: 10,
      title: "Organic Tea Sampler",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
      description: "Assortment of organic loose-leaf teas from top tea gardens"
    },
    {
      id: 11,
      title: "Artisanal Jam Set",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1563778084459-859099e48677",
      description: "Handcrafted fruit preserves made with seasonal berries"
    },
    {
      id: 12,
      title: "Gourmet Nut Mix",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1536591168415-c368e7507110",
      description: "Premium selection of roasted nuts and dried fruits"
    },
    {
      id: 13,
      title: "Artisanal Cheese Board",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1543198126-c9e494586219",
      description: "Handcrafted wooden cheese board with serving tools"
    },
    {
      id: 14,
      title: "Truffle Oil Set",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc",
      description: "Premium black and white truffle oils for gourmet cooking"
    },
    {
      id: 15,
      title: "Gourmet Sea Salt Collection",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b",
      description: "Variety of flavored and specialty sea salts from around the world"
    },
    {
      id: 16,
      title: "Organic Maple Syrup",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd",
      description: "Pure maple syrup harvested from family-owned farms"
    },
    {
      id: 17,
      title: "Artisanal Vinegar Set",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d",
      description: "Collection of aged balsamic and fruit-infused vinegars"
    },
    {
      id: 18,
      title: "Premium Dried Mushrooms",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073",
      description: "Assortment of gourmet dried mushrooms for culinary excellence"
    },
    {
      id: 19,
      title: "Gourmet Hot Sauce Collection",
      price: 25.99,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
      description: "Set of artisanal hot sauces with varying heat levels"
    },
    {
      id: 20,
      title: "Organic Herb Garden Kit",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      description: "Grow your own culinary herbs with this complete starter kit"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg bg-black bg-opacity-70 p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-white mb-4">Gourmet Food Collection</h1>
            <p className="text-white text-lg mb-6">Discover our premium selection of artisanal and gourmet food products from around the world.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <img src="https://images.unsplash.com/photo-1528750997573-3c83ec3d8b9c" alt="Bakery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Bakery</span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <img src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d" alt="Spices" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Spices</span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <img src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0" alt="Beverages" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Beverages</span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-40 group">
            <img src="https://images.unsplash.com/photo-1452195100486-9cc805987862" alt="Cheese" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Cheese</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
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
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      <button 
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded-l"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold">${cart.totalAmount.toFixed(2)}</span>
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