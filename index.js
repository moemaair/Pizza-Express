var hamburgerIcon = document.querySelector('#hamburgerIcon');

hamburgerIcon.addEventListener('click', ()=>{
  let menuItem = document.querySelector('#menu-item');
  menuItem.style.display="block";
});
//promp for delivery or pickup
$('.deliveryLocationPrompt').change(function(){
  let deliveryClicked = $(this).children('option:selected').data('1')
  let location = prompt("what is the Location of your Delivery?") 
  alert("your order will be delivered to your location")
})
//constructor
function Pizza (crust, topping, size){
  this.crustPizza = crust;
  this.toppingPizza = topping;
  this.sizePizza = size;
}



$().ready(function(){
  
  $('#checked').submit( function(e){
    e.preventDefault();
    // data of selected options
    var sizeSelected = $('#PizzaSizeSelect').find(":selected").text();
    var crustSelected = $('#PizzaCrustSelect').find(":selected").text();
    var toppingSelected = $('#PizzaToppingSelect').find(":selected").text();
    var deliverySelected = $('#deliverySelect').find(":selected").text();

   
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
     "Gluten-free":280,
     "Delivery":100,
     "Pick-up":0
   }
   var totalCost = (obj[sizeSelected] + obj[crustSelected] + obj[toppingSelected]) + obj[deliverySelected] ;

  
  $('#summ').html('View Summary')
  $('.payAmount').html(`KES ${totalCost}`)
  $('.pizzaToppingofChoice').html(`Pizza Topping Selected cost:KES  ${obj[toppingSelected]}`);
  $('.pizzaSizeofChoice').html(`Pizza Size Selected cost:KES  ${obj[sizeSelected]}`);
  $('.pizzaCrustofChoice').html(`Pizza Crust Selected cost: KES ${obj[crustSelected]}`);
  $('.pizzaDeliveryOrPickupChoice').html(`delivery is :KES  ${obj[deliverySelected]}`);
  })
 


  

 
})






