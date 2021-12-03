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
  if("breakfast" === item.type && !restaurant.menus.breakfast.includes(item)){
      restaurant.menus.breakfast.push(item);
    } else if("lunch" === item.type && !restaurant.menus.lunch.includes(item)){
      restaurant.menus.lunch.push(item);
    } else if("dinner" === item.type && !restaurant.menus.dinner.includes(item)){
      restaurant.menus.dinner.push(item);
    }
    return restaurant;
}

function removeMenuItem(restaurant, item, type){
    for(var i = 0; i < restaurant.menus[type].length; i++){
      if(restaurant.menus[type][i].name === item){
        restaurant.menus[type].splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
      }
    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
