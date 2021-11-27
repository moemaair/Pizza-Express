//VANILLA JS
var increaseBtn = document.querySelector('.fa-plus-circle');
var decreaseBtn = document.querySelector('.fa-minus-circle');
var hamburgerIcon = document.querySelector('#hamburgerIcon')
hamburgerIcon.addEventListener('click', ()=>{
  let menuItem = document.querySelector('#menu-item');
  menuItem.style.display="block";
});
  //delievery cost
  var deliveryCostInKes = 100
// crust
var crustCostInKes = {
Crispy:100,
Stuffed:150,
GlutenFree:200
}
var costOfEveryToppingInKes = 1000;

// size
var sizeCostInKes = {
small:600,
medium:900,
large:1000
}
function Pizza(crust,topping,size){
this.crust = crust;
this.topping = topping;
this.size = size;
}
var pizzaTotal = new Pizza(crustCostInKes.Crispy , sizeCostInKes.large , costOfEveryToppingInKes, deliveryCostInKes);
var total = crustCostInKes.Crispy + sizeCostInKes.large + costOfEveryToppingInKes + deliveryCostInKes;
var totalToString = JSON.stringify(total);
console.log(totalToString)

increaseBtn.addEventListener('click', ()=>{
  var payAmount = document.querySelector('.payAmount')
  var multiple = totalToString * 2;
  payAmount.innerHTML = `KES ${multiple}`;

})
decreaseBtn.addEventListener('click', ()=>{
  var payAmount = document.querySelector('.payAmount')
  var divided = totalToString / 2;
  payAmount.innerHTML = `KES ${divided}`;

})


