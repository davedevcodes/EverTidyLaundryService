'use client';

import React, { useState, useRef } from 'react';
import Image from "next/image";
import { ShoppingCart, Plus, Minus, Trash2, Printer, X } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

const LaundryReceipt = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [customerName, setCustomerName] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [receiptStyle, setReceiptStyle] = useState('standard'); // 'standard' or 'pos'
  const receiptRef = useRef();

  // Laundry items with pricing
  const laundryItems = {
    men: [
      { name: 'Colored Shirt', price: 800 },
      { name: 'White Shirt', price: 800 },
      { name: 'Trouser', price: 800 },
      { name: 'Suit (2pcs)', price: 2500 },
      { name: 'Suit (3pcs)', price: 3500 },
      { name: 'Tie', price: 300 },
      { name: 'T-Shirt', price: 800 },
      { name: 'Jeans Trousers', price: 1500 },
      { name: 'Plain Trousers', price: 800 },
      { name: 'Safari Suit', price: 2500 },
      { name: 'Overall', price: 2000 },
      { name: 'Kaftan', price: 2500 },
      { name: 'Baseball Cap', price: 500 },
      { name: 'Native Cap', price: 500 },
      { name: 'Agbada (Alone)', price: 1500 },
      { name: 'Agbada (Complete)', price: 3000 },
      { name: 'Aso Oke (Complete)', price: 3000 },
      { name: 'Buba & Sokoto (Lace)', price: 2500 },
      { name: 'Buba & Sokoto (Ankara)', price: 2000 },
      { name: 'Trousers & Igbo Buba', price: 2000 },
      { name: 'Hoodie', price: 1000 },
      { name: 'Blazer / Suit Jacket', price: 1500 }, 
      { name: 'Lawyers Collar', price: 500 }, 
      { name: 'Lawyers Bib', price: 1000 }, 
      { name: 'Pyjamas Set', price: 1000 }, 
      { name: 'Boxers', price: 300 }, 
      { name: 'Armless Jacket', price: 1000 }, 
      { name: 'Canvas Shoe', price: 2000 }, 
      { name: 'Laptop Bag', price: 1000 },  
      { name: 'Jalamia', price: 1000 }, 
      { name: 'singlet', price: 300 }, 
      { name: 'Sweat Shirt', price: 1000 }, 
      { name: 'Small Face Towel', price: 300 }, 
      { name: 'Handkerchief', price: 50 }, 
      { name: 'Jeans Jacket', price: 1000 }, 
      { name: 'Complete Pullover', price: 1500 }, 
      { name: 'Pullover Top', price: 1000 }, 
      { name: 'Shorts', price: 400 },
      { name: 'Jeans Nika', price: 1000 },
      { name: 'Polo', price: 800 },
      { name: 'Armless Polo', price: 500 },
    ],
    women: [
      { name: 'Colored Shirt', price: 800 },
      { name: 'White Shirt', price: 800 },
      { name: 'Blouse', price: 1000 },
      { name: 'Beaded Blouse', price: 1500 },
      { name: 'small Blouse', price: 1000 },
      { name: 'Coat / Jacket', price: 1500 },
      { name: 'Camisole', price: 500 },
      { name: 'Plain Skirt(short)', price: 800 },
      { name: 'Skirt(long)', price: 1000 },
      { name: 'Pleated/Beaded Skirt', price: 1200 },
      { name: 'Suit (2pcs)', price: 2000 },
      { name: 'Plain Short Gown', price: 800 },
      { name: 'Plain Long Gown', price: 1000 },
      { name: 'Beaded Gown', price: 2500 },
      { name: 'Boubou', price: 2000 },
      { name: 'Beaded Boubou', price: 2500 },
      { name: 'Trouser', price: 800 },
      { name: 'Jeans', price: 1300 },
      { name: 'Native Skirt & Blouse (Ankara)', price: 1500 },
      { name: 'Native Skirt & Blouse (Lace)', price: 2500 },
      { name: 'Gele / Headtie', price: 800 },
      { name: 'Cardigan', price: 1000 },
      { name: 'Tracksuit', price: 1500 },
      { name: 'Apron', price: 500 },
      { name: 'Gym wear/Underwear/Crop Top', price: 500 },
      { name: 'Bathrobe', price: 1000 },
      { name: 'Kimono Jacket', price: 1000 },
      { name: 'Hijab', price: 500 },
      { name: 'Two-piece outfit(Top & Trousers/Skirt', price: 1300 },
      { name: 'Palazzo Trousers', price: 1000 },
      { name: 'Tunic Top', price: 800 },
      { name: 'Turtle Neck Top', price: 800 },
      { name: 'Crop Top', price: 600 },
      { name: 'Palazzo Jeans', price: 1000 },
      { name: 'Bum shot', price: 600 },
      { name: 'Polo', price: 800 },
      { name: 'Armless Polo', price: 500 },
    ],
    children: [
      { name: 'Shirt / T-shirt', price: 500 },
      { name: 'Short / Trouser', price: 600 },
      { name: 'Skirt / Blouse', price: 600 },
      { name: 'Gown', price: 800 },
      { name: 'Suit (2pcs)', price: 1500 },
      { name: 'Pyjamas', price: 500 },
      { name: 'Sweater / Cardigan', price: 800 },
      { name: 'Socks', price: 100 },
      { name: 'School Uniform set', price: 500 },
      { name: 'Baby Shawl / Blanket', price: 1000 },
      { name: 'Bibs', price: 300 },
    ],
    household: [
      { name: 'Bedsheet Big', price: 1500 },
      { name: 'Bedsheet Small', price: 1000 },
      { name: 'Pillowcase', price: 500 },
      { name: 'Duvet (medium)', price: 2500 },
      { name: 'Duvet (large)', price: 3000 },
      { name: 'Duvet Cover', price: 1500 },
      { name: 'Curtain (per pair)', price: 1500 },
      { name: 'Towel (large)', price: 1500 },
      { name: 'Towel (small/face)', price: 500 },
      { name: 'Blanket', price: 2000 },
      { name: 'Sofa Covers (per set)', price: 2000 },
      { name: 'Mattress Cover', price: 2000 },
    ],
    SpecialPackages: [
      { name: '(Kids) 40 Cloths (Wash & Fold)', price: 15000 },
      { name: '(Kids) 40 Cloths (Wash & Iron)', price: 30000 },
      { name: '(Adult) 20 Cloths (Wash & Fold)', price: 10000 },
      { name: '(Adult) 20 Cloths (Wash & Fold)', price: 15000 },
    ],
    StainRemoval: [
      { name: 'Heavy Grease / Oil(Palm oil, Diesel)', price: 3000 },
      { name: 'Ink / Dye / Paint Stains', price: 3000 },
      { name: 'Blood', price: 2000 },
      { name: 'Red Wine', price: 1500 },
      { name: 'Mildew / Mold Treatment', price: 1500 },
      { name: 'Whitening Service (Brightening Whites)', price: 3000 },
      { name: 'Sweat Collar & Underarm Stain Removal', price: 1000 },
      { name: 'Rust Stain Removal', price: 2000 },
      { name: 'Odour Neutralizing Treatment', price: 1000 },
      { name: 'Starch & Ironing', price: 1000 },
    ],
  };

  const addToCart = (item, category) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.name === item.name && cartItem.category === category
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name && cartItem.category === category
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, category, quantity: 1 }]);
    }
  };

  const updateQuantity = (item, delta) => {
    setCart(
      cart
        .map((cartItem) =>
          cartItem.name === item.name && cartItem.category === item.category
            ? { ...cartItem, quantity: Math.max(0, cartItem.quantity + delta) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => !(cartItem.name === item.name && cartItem.category === item.category)));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - discount;
  };

  const handleDiscountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    const subtotal = calculateSubtotal();
    // Ensure discount doesn't exceed subtotal
    if (value <= subtotal) {
      setDiscount(value);
    } else {
      setDiscount(subtotal);
    }
  };

  const generateReceipt = () => {
    if (cart.length === 0 || !customerName.trim()) {
      alert('Please add items to cart and enter your name');
      return;
    }
    setShowReceipt(true);
  };

  const handlePrint = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: `Laundry-Receipt-${Date.now()}`,
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Laundry Service
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Items Selection */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Items</h2>
            
            {/* Category Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {Object.keys(laundryItems).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {laundryItems[selectedCategory].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-indigo-600 font-bold">₦{item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item, selectedCategory)}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus size={16} />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 h-fit sticky top-4">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
              <span className="bg-indigo-600 text-white text-sm rounded-full px-2 py-1">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item, -1)}
                            className="bg-gray-200 rounded p-1 hover:bg-gray-300"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item, 1)}
                            className="bg-gray-200 rounded p-1 hover:bg-gray-300"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-indigo-600">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Subtotal:</span>
                    <span className="text-lg font-semibold text-gray-700">
                      ₦{calculateSubtotal().toLocaleString()}
                    </span>
                  </div>

                  <div className="mb-3">
                    <label className="text-sm font-semibold text-gray-700 block mb-1">
                      Discount (₦)
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      value={discount || ''}
                      onChange={handleDiscountChange}
                      min="0"
                      max={calculateSubtotal()}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-4 pb-3 border-b">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-2xl font-bold text-indigo-600">
                      ₦{calculateTotal().toLocaleString()}
                    </span>
                  </div>

                  <div className="mb-3">
                    <label className="text-sm font-semibold text-gray-700 block mb-1">
                      Receipt Style
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setReceiptStyle('standard')}
                        className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                          receiptStyle === 'standard'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Standard
                      </button>
                      <button
                        onClick={() => setReceiptStyle('pos')}
                        className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                          receiptStyle === 'pos'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        POS
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button
                    onClick={generateReceipt}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Generate Receipt
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`bg-white text-black rounded-lg shadow-2xl ${receiptStyle === 'pos' ? 'max-w-sm' : 'max-w-xl'} w-full max-h-[90vh] overflow-y-auto`}>
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center print:hidden">
              <button
                onClick={() => setShowReceipt(false)}
                className="text-gray-500 hover:text-gray-700 ml-auto"
              >
                <X size={24} />
              </button>
            </div>

            {receiptStyle === 'standard' ? (
              // Standard Receipt
              <div ref={receiptRef} className="p-8">
                <div className="text-center mb-6">
                  <Image
                    src="/Logo.png"
                    alt="Evertidy logo"
                    width={200}
                    height={200}
                    className="bg-blue-950 rounded-full flex self-center mx-auto mb-5"
                  />
                  <h1 className="text-3xl font-bold text-indigo-900">RECEIPT</h1>
                  <div className="w-full h-1 bg-indigo-600 my-2"></div>
                </div>

                <div className="mb-6 space-y-1">
                  <p><strong>Customer Name:</strong> {customerName}</p>
                  <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                  <p><strong>Receipt #:</strong> {Date.now().toString().slice(-8)}</p>
                </div>

                <table className="w-full mb-6">
                  <thead>
                    <tr className="border-b-2 border-gray-800">
                      <th className="text-left py-2">Item</th>
                      <th className="text-left py-2">Category</th>
                      <th className="text-center py-2">Qty</th>
                      <th className="text-right py-2">Price</th>
                      <th className="text-right py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{item.name}</td>
                        <td className="py-2 capitalize">{item.category}</td>
                        <td className="text-center py-2">{item.quantity}</td>
                        <td className="text-right py-2">₦{item.price.toLocaleString()}</td>
                        <td className="text-right py-2">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="border-t-2 border-gray-800 pt-4 mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg">Subtotal:</span>
                    <span className="text-lg">₦{calculateSubtotal().toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center mb-2 text-green-600">
                      <span className="text-lg">Discount:</span>
                      <span className="text-lg">-₦{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-xl font-bold">TOTAL:</span>
                    <span className="text-3xl font-bold text-indigo-600">
                      ₦{calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-center text-gray-600 italic my-6">
                  Thank you for your patronage!
                </div>

                <button
                  onClick={handlePrint}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center gap-2 print:hidden"
                >
                  <Printer size={20} />
                  Print / Save as PDF
                </button>
              </div>
            ) : (
              // POS Receipt Style
              <div ref={receiptRef} className="p-6 font-mono text-sm bg-white">
                <div className="text-center mb-4">
                  <Image
                    src="/Logo.png"
                    alt="Evertidy logo"
                    width={120}
                    height={120}
                    className="bg-blue-950 rounded-full flex self-center mx-auto mb-3"
                  />
                  <h1 className="text-xl font-bold">EVERTIDY LAUNDRY</h1>
                  <p className="text-xs mt-1">Premium Laundry Services</p>
                  <p className="text-xs">Tel: +234-812-209-9927</p>
                  <div className="border-t-2 border-dashed border-gray-800 my-2"></div>
                </div>

                <div className="mb-4 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Customer:</span>
                    <span className="font-semibold">{customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{new Date().toLocaleTimeString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Receipt #:</span>
                    <span>{Date.now().toString().slice(-8)}</span>
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-gray-800 my-2"></div>

                <div className="mb-4">
                  {cart.map((item, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold">{item.name}</span>
                      </div>
                      <div className="flex justify-between text-xs ml-2">
                        <span>
                          {item.quantity} x ₦{item.price.toLocaleString()}
                        </span>
                        <span className="font-semibold">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-dashed border-gray-800 my-2"></div>

                <div className="space-y-1 mb-2">
                  <div className="flex justify-between">
                    <span>SUBTOTAL:</span>
                    <span>₦{calculateSubtotal().toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>DISCOUNT:</span>
                      <span>-₦{discount.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t-2 border-double border-gray-800 my-2"></div>

                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>TOTAL:</span>
                  <span>₦{calculateTotal().toLocaleString()}</span>
                </div>

                <div className="border-t-2 border-dashed border-gray-800 my-2"></div>

                <div className="text-center text-xs mt-4">
                  <p className="font-semibold">Thank you for your patronage!</p>
                  <p className="mt-2">Visit us again soon</p>
                  <p className="mt-2">www.evertidylaundryservices.com</p>
                </div>

                <div className="text-center text-xs mt-4">
                  <p>* * * END OF RECEIPT * * *</p>
                </div>

                <button
                  onClick={handlePrint}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center gap-2 mt-6 print:hidden"
                >
                  <Printer size={20} />
                  Print / Save as PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LaundryReceipt;