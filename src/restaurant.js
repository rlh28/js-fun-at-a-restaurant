function createRestaurant(name){
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}

function addMenuItem(restaurant, item){
  // for(item in restaurant){
  //   if(restaurant.menus.breakfast.includes(item.type)){
  //     restaurant.menus.breakfast.push(item);
  //   } else if(restaurant.menus.lunch.includes(item.type)){
  //     restaurant.menus.lunch.push(item);
  //   } else {
  //     restaurant.menus.dinner.push(item.type);
  //   }
  // }
  //
  if("breakfast" === item.type && !restaurant.menus.breakfast.includes(item)){
      restaurant.menus.breakfast.push(item);
  } else if("lunch" === item.type && !restaurant.menus.lunch.includes(item)){
      restaurant.menus.lunch.push(item);
  } else if("dinner" === item.type && !restaurant.menus.dinner.includes(item)){
      restaurant.menus.dinner.push(item);
  }
  // restaurant.menus.lunch.push(item);
  return restaurant;
}

function removeMenuItem(restaurant, item, type){

    // if("breakfast" === type && ){
    //     if(!restaurant.menus.breakfast.includes(item)){
    //       return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    //     }
    //     restaurant.menus.breakfast.splice(item, 1);
    //     return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
    // } else if("lunch" === type){
    //     if(!restaurant.menus.lunch.includes(item)){
    //       return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    //     }
    //     restaurant.menus.lunch.splice(item, 1);
    //     return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
    // } else if("dinner" === type){
    //     if(!restaurant.menus.dinner.includes(item)){
    //       return `Sorry, we don't sell ${item}, try adding a new recipe!`;
    //     }
    //     restaurant.menus.dinner.splice(item, 1);
    //     return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
    // }
    for(var i = 0; i < restaurant.menus[type].length; i++){
      if(restaurant.menus[type][i].name === item){
        restaurant.menus[type].splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
      }
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`;
  }

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
