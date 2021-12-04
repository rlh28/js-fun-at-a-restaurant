class Chef {
  constructor(name, restaurant, custName) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(custName, timeOfDay){
    if(timeOfDay === true){
      return `Good morning, ${custName}!`;
    } else {
      return `Hello, ${custName}!`;
    }
  }
  checkForFood(item){
      if(restaurant.menus[type][i].name === item){
        return `Sorry, we aren't serving ${item.name} today.`;
      } else {
        return `Yes, we're serving ${item.name} today!`;
      }

  }
}


module.exports = Chef;
