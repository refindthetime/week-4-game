

var minNumber = 19
var maxNumber = 120
var i = [0]

    $(document).ready(function() {
var random = Math.floor(Math.random()* (maxNumber - minNumber)) + minNumber;
  console.log(random);
      $("#random-number").html(random);
       //^heading tag id
     //button tag id
$("#crystal-button").on('click', function (){
      var random = Math.floor(Math.random()* (12 - 1)) + 1;
  console.log(random);
      $("#user-number").html(random);
      	//heading tag id