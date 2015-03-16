//implement the following Bingo object. 
//The Bingo object should randomize a number between 1 and 10 
//on creation and provide a single method guess(number).
// That method should return true if the argument was the secret number. Test your class.



function Bingo(){};


(Bingo.prototype.guess = function(n){
		var number = Math.floor((Math.random() * 10) + 1);
		console.log(number);
		console.log(n);
		if(number===n)
			return console.log(true);
		else
			return console.log(false);
}(5));



console.log("");

//Versione 2.0

var Bingo = {

	number : Math.floor((Math.random() * 10) + 1),
	guess : function (n){
		console.log(n);
		if(this.number===n)
			return console.log(true);
		else
			return console.log(false);
		}			
};

console.log(Bingo.number);
Bingo.guess(5);
