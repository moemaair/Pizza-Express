//JQUERY JS
$(document).ready(function(){

  // home page
  $('.delivery-select').change(function(){
    let deliveryClicked = $(this).children('option:selected').data('1')
    let location = prompt("what is the Location of your Delivery?") 
    alert("your order will be delivered to your location")
   
   
  });
  // checkout page
  
  })