import React from 'react';
import PopupMessage from './PopupMessage';
import './FoodCart.css'; // Import your stylesheet

class FoodCart extends React.Component {
  state = {
    showPopup: false,
    popupMessage: '',
    selectedCategory: 'all', // Default category is set to 'all'
  };

  // Define foodData at the class level
  foodData = {
    all: [
      { name: 'Butter Chicken', price: 12.99, image: '/butter_chicken.webp', category: 'indian' },
      { name: 'Margherita Pizza', price: 10.99, image: '/margherita_pizza.jpg', category: 'italian' },
      { name: 'Grilled Salmon', price: 15.99, image: '/grilled_salmon.jpg', category: 'asian' },
      { name: 'Chocolate Lava Cake', price: 7.99, image: '/chocolate_lava_cake.jpg', category: 'dessert' },
      { name: 'Shawarma', price: 7.99, image: '/shawarma.jpg', category: 'dessert' },
      { name: 'Spagehetti', price: 7.99, image: '/Spaghetti.jpeg', category: 'dessert' },
      { name: 'Chicken wings', price: 7.99, image: '/chicken-wings.jpeg', category: 'dessert' },
      { name: 'Beef cake', price: 7.99, image: '/beef.webp', category: 'dessert' },
      { name: 'Chocolate Cake', price: 7.99, image: '/choco.webp', category: 'dessert' },
      { name: 'Fried Noodles', price: 7.99, image: '/noodle.jpeg', category: 'dessert' },

      // Add more items as needed
    ],
    indian: [
      { name: 'Butter Chicken', price: 12.99, image: '/butter_chicken.webp', category: 'indian' },
      { name: 'Chicken Biriyani', price: 12.99, image: '/biriyani.jpeg', category: 'indian' },
      { name: 'Chicken Tandoori', price: 12.99, image: '/chicken-tandoori.jpeg', category: 'indian' },
      { name: 'Naan', price: 12.99, image: '/naan.jpeg', category: 'indian' },
      { name: 'Curry', price: 12.99, image: '/curry.jpeg', category: 'indian' },
      { name: 'Chicken chops', price: 12.99, image: '/chops.jpeg', category: 'indian' },
      { name: 'Indian Thali', price: 12.99, image: '/thali.jpg', category: 'indian' },
      { name: 'Roti', price: 12.99, image: '/roti.jpeg', category: 'indian' },
      { name: 'Paratha', price: 12.99, image: '/paratha.jpeg', category: 'indian' },
      { name: 'Samosa', price: 12.99, image: '/samosa.jpeg', category: 'indian' },
      { name: 'Paani-Poori', price: 12.99, image: '/pani-poori.webp', category: 'indian' },
      { name: 'Kulcha', price: 12.99, image: '/kulcha.jpeg', category: 'indian' },
      { name: 'Dosa', price: 12.99, image: '/dosa.jpeg', category: 'indian' },
      { name: 'Vada pav', price: 12.99, image: '/vada-pav.webp', category: 'indian' },
      { name: 'Kathi-roll', price: 12.99, image: '/kathi-rool.webp', category: 'indian' },
      { name: 'Pakoda', price: 12.99, image: '/pakoda.webp', category: 'indian' },
      { name: 'Chicken-65', price: 12.99, image: '/chicken-65.webp', category: 'indian' },
      { name: 'Idly & Vada', price: 12.99, image: '/idly.jpeg', category: 'indian' },
      { name: 'Channa-Masala', price: 12.99, image: '/channa-masala.jpg', category: 'indian' },
      { name: 'Aaloo-Gobi', price: 12.99, image: '/aalo-gobi.jpeg', category: 'indian' },
      { name: 'Kofta', price: 12.99, image: '/kofta.jpeg', category: 'indian' },
      { name: 'Paneer Butter Masala', price: 12.99, image: '/paneer-butter-masala.webp', category: 'indian' },
      { name: 'Bhel poori', price: 12.99, image: '/bhel.jpeg', category: 'indian' },
      { name: 'Thayir Vadai', price: 12.99, image: '/Thayir-Vadai.jpg', category: 'indian' },
      { name: 'Saag Paneer', price: 12.99, image: '/Saag-Paneer.jpg', category: 'indian' },


      // Add more Indian food items as needed
    ],
    italian: [
      { name: 'Margherita Pizza', price: 10.99, image: '/margherita_pizza.jpg', category: 'italian' },
      { name: 'Polenta', price: 10.99, image: '/polenta.webp', category: 'italian' },
      { name: 'Ribollita', price: 10.99, image: '/ribollita.webp', category: 'italian' },
      { name: 'Ristto alla Milanese', price: 10.99, image: '/risotto-alla-milanese.webp', category: 'italian' },
      { name: 'Cotoletta alla Milanese', price: 10.99, image: '/cotoletta-alla-milanese.webp', category: 'italian' },
      { name: 'Osso Buco alla Milanese', price: 10.99, image: '/osso-buco-alla-milanese.webp', category: 'italian' },
      { name: 'Risotto di Seppie alla Veneziana', price: 10.99, image: '/risotto-di-seppie-alla-veneziana.webp', category: 'italian' },
      { name: 'Bottarga', price: 10.99, image: '/bottarga.webp', category: 'italian' },
      { name: 'Baccalà', price: 10.99, image: '/baccal.webp', category: 'italian' },
      { name: 'Vitello Tonnato', price: 10.99, image: '/vitello-tonnato.webp', category: 'italian' },
      { name: 'Canederli', price: 10.99, image: '/canederli.webp', category: 'italian' },
      { name: 'Fritto Misto', price: 10.99, image: '/fritto-misto.webp', category: 'italian' },
      { name: 'Ragù alla Bolognese', price: 10.99, image: '/rag-alla-bolognese.webp', category: 'italian' },
      { name: 'Bistecca Fiorentina', price: 10.99, image: '/bistecca-fiorentina.webp', category: 'italian' },
      { name: 'Arancini', price: 10.99, image: '/arancini.webp', category: 'italian' },
      { name: 'Melanzane alla Parmigiana', price: 10.99, image: '/melanzane-alla-parmigiana.webp', category: 'italian' },
      { name: 'Saltimbocca alla Romana', price: 10.99, image: '/saltimbocca-alla-romana.webp', category: 'italian' },
      { name: 'Cacio e Pepe', price: 10.99, image: '/cacio-e-pepe.webp', category: 'italian' },
      { name: 'Gnocchi', price: 10.99, image: '/gnocchi.webp', category: 'italian' },
      { name: 'Spaghetti alle Vongole', price: 10.99, image: '/spaghetti-alle-vongole.webp', category: 'italian' },
      { name: 'Lasagna', price: 10.99, image: '/Lasagna.jpeg', category: 'italian' },
      { name: 'Minestrone', price: 10.99, image: '/minestrone.webp', category: 'italian' },
      { name: 'Focaccia', price: 10.99, image: '/focaccia.webp', category: 'italian' },
      { name: 'Pasta puttanesca', price: 10.99, image: '/pasta-puttanesca.webp', category: 'italian' },
      { name: 'Bagna cauda', price: 10.99, image: '/bagna-cauda.webp', category: 'italian' },

      // Add more Italian food items as needed
    ],
    asian: [
      { name: 'Grilled Salmon', price: 15.99, image: '/grilled_salmon.jpg', category: 'asian' },
      { name: 'Sushi', price: 15.99, image: '/sushi.webp', category: 'asian' },
      { name: 'Kimchi', price: 15.99, image: '/kimchi.jpg', category: 'asian' },
      { name: 'Dim Sum', price: 15.99, image: '/dim-sum-china.jpeg', category: 'asian' },
      { name: 'Satay', price: 15.99, image: '/satay-indonesia.jpeg', category: 'asian' },
      { name: 'Ramen', price: 15.99, image: '/ramen-japan.webp', category: 'asian' },
      { name: 'Pho', price: 15.99, image: '/pho-vietnam.webp', category: 'asian' },
      { name: 'Pad Krapow', price: 15.99, image: '/Pad-Krapow.jpeg', category: 'asian' },
      { name: 'Bulgogi', price: 15.99, image: '/Bulgogi.jpeg', category: 'asian' },
      { name: 'Adobo', price: 15.99, image: '/Adobo-chicken.jpeg', category: 'asian' },
      { name: 'Falafel', price: 15.99, image: '/Falafel.jpeg', category: 'asian' },
      { name: 'Peking Duck', price: 15.99, image: '/peking-duck.jpeg', category: 'asian' },
      { name: 'Tempura', price: 15.99, image: '/prawn-tempura.jpeg', category: 'asian' },
      { name: 'Manti', price: 15.99, image: '/manti.webp', category: 'asian' },
      { name: 'Jiaozi', price: 15.99, image: '/Jiaozi.jpeg', category: 'asian' },
      { name: 'Gaeng Keow Wan ', price: 15.99, image: '/green.jpeg', category: 'asian' },
      { name: 'Bánh mì', price: 15.99, image: '/Bánh-mì.jpeg', category: 'asian' },
      { name: 'Yakiniku', price: 15.99, image: '/Yakiniku.webp', category: 'asian' },
      { name: 'Kung Pao Chicken', price: 15.99, image: '/Kung-Pao-Chicken.jpg', category: 'asian' },
      { name: 'Sambal', price: 15.99, image: '/sambal.jpeg', category: 'asian' },
      { name: 'Gõi Cuôn', price: 15.99, image: '/go.jpeg', category: 'asian' },
      { name: 'Samgyeopsal', price: 15.99, image: '/Samgyeopsal.webp', category: 'asian' },
      { name: 'Char Siu', price: 15.99, image: '/car.jpeg', category: 'asian' },
      { name: 'Wonton Noodles', price: 15.99, image: '/Wonton Noodles.webp', category: 'asian' },
      { name: 'Bibimbap', price: 15.99, image: '/Bibimbap.jpeg', category: 'asian' },

      // Add more Asian food items as needed
    ],
    dessert: [
      { name: 'Chocolate Lava Cake', price: 7.99, image: '/chocolate_lava_cake.jpg', category: 'dessert' },
      { name: 'Graham Caracker', price: 7.99, image: '/crackers.webp', category: 'dessert' },
      { name: 'Waffles', price: 7.99, image: '/waffle.webp', category: 'dessert' },
      { name: 'Cookie cream', price: 7.99, image: '/cookie-cream.webp', category: 'dessert' },
      { name: 'Ice-Creams', price: 7.99, image: '/cream.webp', category: 'dessert' },
      { name: 'Strawberry marshallow', price: 7.99, image: '/marshmellow.jpg', category: 'dessert' },
      { name: 'Cool mint', price: 7.99, image: '/cool.jpg', category: 'dessert' },
      { name: 'Vanilla special', price: 7.99, image: '/vannila.jpg', category: 'dessert' },
      { name: 'Watermelon Fruit Pizza', price: 7.99, image: '/water.webp', category: 'dessert' },
      { name: 'Red Wine Chololate Lava Cake', price: 7.99, image: '/red-wine-chocolate-lava-cakes.webp', category: 'dessert' },
      { name: 'Fried Apple Pie Roll', price: 7.99, image: '/apple-pie-rolls.webp', category: 'dessert' },
      { name: 'Chocolate Peanut Butter', price: 7.99, image: '/Chocolate-Peanut-Butter.webp', category: 'dessert' },
      { name: 'Strawberry Short Cake', price: 7.99, image: '/Strawberry-shortcake-Cake.webp', category: 'dessert' },
      { name: 'Mini Blueberry-Lemon Cheesecake', price: 7.99, image: '/mini.webp', category: 'dessert' },
      { name: 'Chocomole Pudding', price: 7.99, image: '/chocomole.webp', category: 'dessert' },
      { name: 'Apple Coffee Cake', price: 7.99, image: '/apple.webp', category: 'dessert' },
      { name: 'Strawberry-Oat Streusel Bar', price: 7.99, image: '/oat.webp', category: 'dessert' },
      { name: 'Pineapple Nice Cream', price: 7.99, image: '/pineapple.webp', category: 'dessert' },
      { name: 'Peanut Butter Chocolate Cookie', price: 7.99, image: '/no-bake.webp', category: 'dessert' },
      { name: 'Lemon Icebox Pie', price: 7.99, image: '/lemon.webp', category: 'dessert' },
      { name: 'Mug Brownie', price: 7.99, image: '/mug.webp', category: 'dessert' },
      { name: 'Drak Chocolate Chip', price: 7.99, image: '/cookie.webp', category: 'dessert' },
      { name: 'Pink Lemonade Nice Cream', price: 7.99, image: '/Pink-Lemonade.webp', category: 'dessert' },
      { name: 'Strawberry Cobbler', price: 7.99, image: '/strawberry.webp', category: 'dessert' },
      { name: 'Cornmeal-Yogurt-Lemon Cake', price: 7.99, image: '/cake.webp', category: 'dessert' },

      // Add more Dessert items as needed
    ],
  };

  addToCart = (foodName, price) => {
    this.setState({ showPopup: true, popupMessage: `Added ${foodName} to the cart.` });

    // Close the popup after 5 seconds
    setTimeout(() => {
      this.setState({ showPopup: false });
    }, 5000);
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  // Define filteredFoodItems outside of the render method
  filteredFoodItems = () => {
    const { selectedCategory } = this.state;
    return this.foodData[selectedCategory];
  };

  renderFoodItems = () => {
    const filteredItems = this.filteredFoodItems();

    return filteredItems.map((item, index) => (
      <div key={index} className="food-box" onClick={() => this.addToCart(item.name, item.price)}>
        <img src={item.image} alt={item.name} />
        <div className="food-details">
          <p>{item.name}</p>
          <p>₹{item.price.toFixed(2)}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="food-cart-container">
        <h2>Food Items</h2>
        <div className="food-categories">
          {Object.keys(this.foodData).map(category => (
            <button key={category} onClick={() => this.setState({ selectedCategory: category })}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="food-grid">{this.renderFoodItems()}</div>

        {/* Popup Message */}
        {this.state.showPopup && (
          <PopupMessage message={this.state.popupMessage} onClose={this.closePopup} />
        )}
      </div>
    );
  }
}

export default FoodCart;
