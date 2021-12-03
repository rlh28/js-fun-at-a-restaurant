function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(menuItemName, price, type){
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type
  }

  return menuItem;
}

function addIngredients(food, ingredients){
   if(!ingredients.includes(food)){
     ingredients.push(food);
   }
  return ingredients;
}

function formatPrice(initialPrice){
  return `$${initialPrice}`;
}

function decreasePrice(decreasedPrice){
  return decreasedPrice - (decreasedPrice*0.10);
}

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
