
	
var wins = 0;
var losses = 0;
var totalScore = 0;

//Random Number
var randomNumber = Math.floor((Math.random()* 120 - 19) + 19);

//Random Crystal
var crystal1 = Math.floor((Math.random()* 12) + 1);
var crystal2 = Math.floor((Math.random()* 12) + 1);
var crystal3 = Math.floor((Math.random()* 12) + 1);
var crystal4 = Math.floor((Math.random()* 12) + 1);

//wins and loss counter to append html
var configureTotal = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#totalScore').empty();
	$('#totalScore').append(totalScore);
	
}

//game reset
var reset = function(){
	totalScore = 0;
    randomNumber = Math.floor((Math.random()* 120 - 19) + 19);

	$('#randomNumber').empty();
	$('#randomNumber').append(randomNumber);

	crystal1 = Math.floor((Math.random()* 12) + 1);
    crystal2 = Math.floor((Math.random()* 12) + 1);
    crystal3 = Math.floor((Math.random()* 12) + 1);
    crystal4 = Math.floor((Math.random()* 12) + 1);
    configureTotal();
}

//main game function
var config = function (){
	if (totalScore == randomNumber) {
		wins = wins + 1;
		reset();
}
	else if(totalScore > randomNumber){
		losses = losses + 1;
		reset();
}
	else{
		configureTotal();
}}

//page start and button functions
	$('#totalScore').append(totalScore);
	$('#randomNumber').append(randomNumber);

	$(document).ready(function(){
	$('#crystal1').click(function(){
		totalScore = totalScore + crystal1;
		config();
	})
	$('#crystal2').click(function(){
		totalScore  = totalScore  + crystal3;
		config();
	})
	$('#crystal3').click(function(){
		totalScore  = totalScore  + crystal3;
		config();
	})
	$('#crystal4').click(function(){
		totalScore  = totalScore  + crystal4;
		config();
	})
});

