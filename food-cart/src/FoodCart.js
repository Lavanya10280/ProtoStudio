import React, { useState } from 'react';
import PopupMessage from './PopupMessage';
import './FoodCart.css'; // Import your stylesheet
import { useCart } from './CartContext';

const FoodCart = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default category is set to 'all'

  // Define foodData at the function component level
  const foodData = {
    all: [
      { id:1, name: 'Butter Chicken', price: 12.99, image: '/butter_chicken.webp', category: 'indian' },
      { id:2, name: 'Margherita Pizza', price: 10.99, image: '/margherita_pizza.jpg', category: 'italian' },
      { id:3, name: 'Grilled Salmon', price: 15.99, image: '/grilled_salmon.jpg', category: 'asian' },
      { id:4, name: 'Chocolate Lava Cake', price: 7.99, image: '/chocolate_lava_cake.jpg', category: 'dessert' },
      { id:5, name: 'Shawarma', price: 7.99, image: '/shawarma.jpg', category: 'dessert' },
      { id:6, name: 'Spagehetti', price: 7.99, image: '/Spaghetti.jpeg', category: 'dessert' },
      { id:7, name: 'Chicken wings', price: 7.99, image: '/chicken-wings.jpeg', category: 'dessert' },
      { id:8, name: 'Beef cake', price: 7.99, image: '/beef.webp', category: 'dessert' },
      { id:9, name: 'Chocolate Cake', price: 7.99, image: '/choco.webp', category: 'dessert' },
      { id:10, name: 'Fried Noodles', price: 7.99, image: '/noodle.jpeg', category: 'dessert' },
  
      // Add more items as needed
    ],
    indian: [
      { id:1, name: 'Butter Chicken', price: 12.99, image: '/butter_chicken.webp', category: 'indian' },
      { id:11, name: 'Chicken Biriyani', price: 12.99, image: '/biriyani.jpeg', category: 'indian' },
      { id:12, name: 'Chicken Tandoori', price: 12.99, image: '/chicken-tandoori.jpeg', category: 'indian' },
      { id:13, name: 'Naan', price: 12.99, image: '/naan.jpeg', category: 'indian' },
      { id:14, name: 'Curry', price: 12.99, image: '/curry.jpeg', category: 'indian' },
      { id:15, name: 'Chicken chops', price: 12.99, image: '/chops.jpeg', category: 'indian' },
      { id:16, name: 'Indian Thali', price: 12.99, image: '/thali.jpg', category: 'indian' },
      { id:17, name: 'Roti', price: 12.99, image: '/roti.jpeg', category: 'indian' },
      { id:18, name: 'Paratha', price: 12.99, image: '/paratha.jpeg', category: 'indian' },
      { id:19, name: 'Samosa', price: 12.99, image: '/samosa.jpeg', category: 'indian' },
      { id:20, name: 'Paani-Poori', price: 12.99, image: '/pani-poori.webp', category: 'indian' },
      { id:21, name: 'Kulcha', price: 12.99, image: '/kulcha.jpeg', category: 'indian' },
      { id:22, name: 'Dosa', price: 12.99, image: '/dosa.jpeg', category: 'indian' },
      { id:23, name: 'Vada pav', price: 12.99, image: '/vada-pav.webp', category: 'indian' },
      { id:24, name: 'Kathi-roll', price: 12.99, image: '/kathi-rool.webp', category: 'indian' },
      { id:25, name: 'Pakoda', price: 12.99, image: '/pakoda.webp', category: 'indian' },
      { id:26, name: 'Chicken-65', price: 12.99, image: '/chicken-65.webp', category: 'indian' },
      { id:27, name: 'Idly & Vada', price: 12.99, image: '/idly.jpeg', category: 'indian' },
      { id:28, name: 'Channa-Masala', price: 12.99, image: '/channa-masala.jpg', category: 'indian' },
      { id:29, name: 'Aaloo-Gobi', price: 12.99, image: '/aalo-gobi.jpeg', category: 'indian' },
      { id:30, name: 'Kofta', price: 12.99, image: '/kofta.jpeg', category: 'indian' },
      { id:31, name: 'Paneer Butter Masala', price: 12.99, image: '/paneer-butter-masala.webp', category: 'indian' },
      { id:32, name: 'Bhel poori', price: 12.99, image: '/bhel.jpeg', category: 'indian' },
      { id:33, name: 'Thayir Vadai', price: 12.99, image: '/Thayir-Vadai.jpg', category: 'indian' },
      { id:34, name: 'Saag Paneer', price: 12.99, image: '/Saag-Paneer.jpg', category: 'indian' },
  
  
      // Add more Indian food items as needed
    ],
    italian: [
      { id: 2, name: 'Margherita Pizza', price: 10.99, image: '/margherita_pizza.jpg', category: 'italian' },
      { id:35, name: 'Polenta', price: 10.99, image: '/polenta.webp', category: 'italian' },
      { id:36, name: 'Ribollita', price: 10.99, image: '/ribollita.webp', category: 'italian' },
      { id:37, name: 'Ristto alla Milanese', price: 10.99, image: '/risotto-alla-milanese.webp', category: 'italian' },
      { id:38, name: 'Cotoletta alla Milanese', price: 10.99, image: '/cotoletta-alla-milanese.webp', category: 'italian' },
      { id:40, name: 'Osso Buco alla Milanese', price: 10.99, image: '/osso-buco-alla-milanese.webp', category: 'italian' },
      { id:41, name: 'Risotto di Seppie alla Veneziana', price: 10.99, image: '/risotto-di-seppie-alla-veneziana.webp', category: 'italian' },
      { id:42, name: 'Bottarga', price: 10.99, image: '/bottarga.webp', category: 'italian' },
      { id:43, name: 'Baccalà', price: 10.99, image: '/baccal.webp', category: 'italian' },
      { id:44, name: 'Vitello Tonnato', price: 10.99, image: '/vitello-tonnato.webp', category: 'italian' },
      { id:45, name: 'Canederli', price: 10.99, image: '/canederli.webp', category: 'italian' },
      { id:46, name: 'Fritto Misto', price: 10.99, image: '/fritto-misto.webp', category: 'italian' },
      { id:47, name: 'Ragù alla Bolognese', price: 10.99, image: '/rag-alla-bolognese.webp', category: 'italian' },
      { id:48, name: 'Bistecca Fiorentina', price: 10.99, image: '/bistecca-fiorentina.webp', category: 'italian' },
      { id:49, name: 'Arancini', price: 10.99, image: '/arancini.webp', category: 'italian' },
      { id:50, name: 'Melanzane alla Parmigiana', price: 10.99, image: '/melanzane-alla-parmigiana.webp', category: 'italian' },
      { id:51, name: 'Saltimbocca alla Romana', price: 10.99, image: '/saltimbocca-alla-romana.webp', category: 'italian' },
      { id:52, name: 'Cacio e Pepe', price: 10.99, image: '/cacio-e-pepe.webp', category: 'italian' },
      { id:53, name: 'Gnocchi', price: 10.99, image: '/gnocchi.webp', category: 'italian' },
      { id:54, name: 'Spaghetti alle Vongole', price: 10.99, image: '/spaghetti-alle-vongole.webp', category: 'italian' },
      { id:55, name: 'Lasagna', price: 10.99, image: '/Lasagna.jpeg', category: 'italian' },
      { id:56, name: 'Minestrone', price: 10.99, image: '/minestrone.webp', category: 'italian' },
      { id:57, name: 'Focaccia', price: 10.99, image: '/focaccia.webp', category: 'italian' },
      { id:58, name: 'Pasta puttanesca', price: 10.99, image: '/pasta-puttanesca.webp', category: 'italian' },
      { id:59, name: 'Bagna cauda', price: 10.99, image: '/bagna-cauda.webp', category: 'italian' },
  
      // Add more Italian food items as needed
    ],
    asian: [
      { id:3, name: 'Grilled Salmon', price: 15.99, image: '/grilled_salmon.jpg', category: 'asian' },
      { id:60, name: 'Sushi', price: 15.99, image: '/sushi.webp', category: 'asian' },
      { id:61, name: 'Kimchi', price: 15.99, image: '/kimchi.jpg', category: 'asian' },
      { id:62, name: 'Dim Sum', price: 15.99, image: '/dim-sum-china.jpeg', category: 'asian' },
      { id:63, name: 'Satay', price: 15.99, image: '/satay-indonesia.jpeg', category: 'asian' },
      { id:64, name: 'Ramen', price: 15.99, image: '/ramen-japan.webp', category: 'asian' },
      { id:65, name: 'Pho', price: 15.99, image: '/pho-vietnam.webp', category: 'asian' },
      { id:66, name: 'Pad Krapow', price: 15.99, image: '/Pad-Krapow.jpeg', category: 'asian' },
      { id:67, name: 'Bulgogi', price: 15.99, image: '/Bulgogi.jpeg', category: 'asian' },
      { id:68, name: 'Adobo', price: 15.99, image: '/Adobo-chicken.jpeg', category: 'asian' },
      { id:69, name: 'Falafel', price: 15.99, image: '/Falafel.jpeg', category: 'asian' },
      { id:70, name: 'Peking Duck', price: 15.99, image: '/peking-duck.jpeg', category: 'asian' },
      { id:71, name: 'Tempura', price: 15.99, image: '/prawn-tempura.jpeg', category: 'asian' },
      { id:72, name: 'Manti', price: 15.99, image: '/manti.webp', category: 'asian' },
      { id:73, name: 'Jiaozi', price: 15.99, image: '/Jiaozi.jpeg', category: 'asian' },
      { id:74, name: 'Gaeng Keow Wan ', price: 15.99, image: '/green.jpeg', category: 'asian' },
      { id:75, name: 'Bánh mì', price: 15.99, image: '/Bánh-mì.jpeg', category: 'asian' },
      { id:76, name: 'Yakiniku', price: 15.99, image: '/Yakiniku.webp', category: 'asian' },
      { id:77, name: 'Kung Pao Chicken', price: 15.99, image: '/Kung-Pao-Chicken.jpg', category: 'asian' },
      { id:78, name: 'Sambal', price: 15.99, image: '/sambal.jpeg', category: 'asian' },
      { id:79, name: 'Gõi Cuôn', price: 15.99, image: '/go.jpeg', category: 'asian' },
      { id:80, name: 'Samgyeopsal', price: 15.99, image: '/Samgyeopsal.webp', category: 'asian' },
      { id:81, name: 'Char Siu', price: 15.99, image: '/car.jpeg', category: 'asian' },
      { id:82, name: 'Wonton Noodles', price: 15.99, image: '/Wonton Noodles.webp', category: 'asian' },
      { id:83, name: 'Bibimbap', price: 15.99, image: '/Bibimbap.jpeg', category: 'asian' },
  
      // Add more Asian food items as needed
    ],
    dessert: [
      { id:4, name: 'Chocolate Lava Cake', price: 7.99, image: '/chocolate_lava_cake.jpg', category: 'dessert' },
      { id:84, name: 'Graham Caracker', price: 7.99, image: '/crackers.webp', category: 'dessert' },
      { id:85, name: 'Waffles', price: 7.99, image: '/waffle.webp', category: 'dessert' },
      { id:86, name: 'Cookie cream', price: 7.99, image: '/cookie-cream.webp', category: 'dessert' },
      { id:87, name: 'Ice-Creams', price: 7.99, image: '/cream.webp', category: 'dessert' },
      { id:88, name: 'Strawberry marshallow', price: 7.99, image: '/marshmellow.jpg', category: 'dessert' },
      { id:89, name: 'Cool mint', price: 7.99, image: '/cool.jpg', category: 'dessert' },
      { id:90, name: 'Vanilla special', price: 7.99, image: '/vannila.jpg', category: 'dessert' },
      { id:91, name: 'Watermelon Fruit Pizza', price: 7.99, image: '/water.webp', category: 'dessert' },
      { id:92, name: 'Red Wine Chololate Lava Cake', price: 7.99, image: '/red-wine-chocolate-lava-cakes.webp', category: 'dessert' },
      { id:93, name: 'Fried Apple Pie Roll', price: 7.99, image: '/apple-pie-rolls.webp', category: 'dessert' },
      { id:94, name: 'Chocolate Peanut Butter', price: 7.99, image: '/Chocolate-Peanut-Butter.webp', category: 'dessert' },
      { id:95, name: 'Strawberry Short Cake', price: 7.99, image: '/Strawberry-shortcake-Cake.webp', category: 'dessert' },
      { id:96, name: 'Mini Blueberry-Lemon Cheesecake', price: 7.99, image: '/mini.webp', category: 'dessert' },
      { id:97, name: 'Chocomole Pudding', price: 7.99, image: '/chocomole.webp', category: 'dessert' },
      { id:98, name: 'Apple Coffee Cake', price: 7.99, image: '/apple.webp', category: 'dessert' },
      { id:99, name: 'Strawberry-Oat Streusel Bar', price: 7.99, image: '/oat.webp', category: 'dessert' },
      { id:100, name: 'Pineapple Nice Cream', price: 7.99, image: '/pineapple.webp', category: 'dessert' },
      { id:101, name: 'Peanut Butter Chocolate Cookie', price: 7.99, image: '/no-bake.webp', category: 'dessert' },
      { id:102, name: 'Lemon Icebox Pie', price: 7.99, image: '/lemon.webp', category: 'dessert' },
      { id:103, name: 'Mug Brownie', price: 7.99, image: '/mug.webp', category: 'dessert' },
      { id:104, name: 'Drak Chocolate Chip', price: 7.99, image: '/cookie.webp', category: 'dessert' },
      { id:105, name: 'Pink Lemonade Nice Cream', price: 7.99, image: '/Pink-Lemonade.webp', category: 'dessert' },
      { id:106, name: 'Strawberry Cobbler', price: 7.99, image: '/strawberry.webp', category: 'dessert' },
      { id:107, name: 'Cornmeal-Yogurt-Lemon Cake', price: 7.99, image: '/cake.webp', category: 'dessert' },
  
      // Add more Dessert items as needed
    ],
    
  };

  const { addToCart } = useCart();

  const addToCartHandler = (itemId, foodName, price) => {
    addToCart(itemId, foodName, price); // Pass itemId, foodName, and price separately
    setShowPopup(true);
    setPopupMessage(`Added ${foodName} to the cart.`);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };

  // Define filteredFoodItems outside of the render method
  const filteredFoodItems = () => {
    return foodData[selectedCategory];
  };

  const renderFoodItems = () => {
    const filteredItems = filteredFoodItems();

    return filteredItems.map((item, index) => (
      <div key={index} className="food-box" onClick={() => addToCartHandler(item.id, item.name, item.price)}>
        <img src={item.image} alt={item.name} />
        <div className="food-details">
          <p>{item.name}</p>
          <p>₹{item.price.toFixed(2)}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="food-cart-container">
      <h2></h2>
      <div className="food-categories">
        {Object.keys(foodData).map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="food-grid">{renderFoodItems()}</div>

      {/* Popup Message */}
      {showPopup && <PopupMessage message={popupMessage} onClose={closePopup} />}
    </div>
  );
};

export default FoodCart;

