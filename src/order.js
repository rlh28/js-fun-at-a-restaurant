function takeOrder(order, deliveryOrders, takeOutOrders, takeOrders){
  if(deliveryOrders.length < 3){
    deliveryOrders.push(order);
  }
  return deliveryOrders;
  return takeOutOrders.push(takeOrders);
}

function refundOrder(orderNum, deliveryOrders){
  for(var i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNum){
      deliveryOrders.splice(i, 1)
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders){
  var orderList = [];
  for(i = 0; i < deliveryOrders.length; i++){
    orderList.push(deliveryOrders[i].item);
  }
  return orderList.join(", ");
}

function searchOrder(deliveryOrders, orderItem){
  var ordersArray = [];
  for(i = 0; i < deliveryOrders.length; i++){
    ordersArray.push(deliveryOrders[i].item)
  }
  if(ordersArray.includes(orderItem)){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
