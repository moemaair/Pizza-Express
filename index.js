//VANILLA JS
var increaseBtn = document.querySelector('.fa-plus-circle');
var decreaseBtn = document.querySelector('.fa-minus-circle');
var hamburgerIcon = document.querySelector('#hamburgerIcon')

hamburgerIcon.addEventListener('click', ()=>{
  let menuItem = document.querySelector('#menu-item');
  menuItem.style.display="block";
});
//constructor
function Pizza (crust, topping, size){
  this.crustPizza = crust;
  this.toppingPizza = topping;
  this.sizePizza = size;
}


$().ready(function(){
  
  $('#checked').submit( function(e){
    // data of selected options
    var sizeSelected = $('#PizzaSizeSelect').find(":selected").text();
    var crustSelected = $('#PizzaCrustSelect').find(":selected").text();
    var toppingSelected = $('#PizzaToppingSelect').find(":selected").text();
    var payAmounth = $('.payAmount').text();
   var obj = {
      "Large":1000,
      "Small":600,
      "Medium":900,
      "chicken":200,
      "pepperoni":210,
      "pineapple":220,
      "sausage":230,
      "ground beef":240,
      "mushrooms":250,
      "Crispy":260,
      "Stuffed":270,
     "Gluten-free":280
   }
   var totalCost = (obj[sizeSelected] + obj[crustSelected] + obj[toppingSelected]);
    alert(totalCost)
  })
 
})


// mobile view menu




