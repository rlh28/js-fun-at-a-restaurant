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
  // checkForFood(item){
  //  Approach 1 that I tried that worked but is too complex/unnecessary
  //   for(var i = 0; i < this.restaurant.menus[item.type].length; i++){
  //     if(this.restaurant.menus[item.type][i].name === item.name){
  //       return `Yes, we're serving ${item.name} today!`
  //     }
  //     }
  //       return `Sorry, we aren't serving ${item.name} today.`;
  // }
  checkForFood(item){
  // Code Luke and I worked out but need more clairification on
  //   var restItem = false;
  //   restItem = this.restaurant.menus[item.type].filter((i) => {
  //     if(item.name === i.name){
  //       return true;
  //     }
  //   })
  //   if(restItem.length > 0){
  //     return `Yes, we're serving ${item.name} today!`;
  //   } else {
  //     return `Sorry, we aren't serving ${item.name} today.`;
  //   }
  // }
    if(this.restaurant.menus[item.type].includes(item)){
      return `Yes, we're serving ${item.name} today!`;
    } else {
        return `Sorry, we aren't serving ${item.name} today.`;
      }
    }
}


module.exports = Chef;
