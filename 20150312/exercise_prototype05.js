//implement the following Bingo object. 
//The Bingo object should randomize a number between 1 and 10 
//on creation and provide a single method guess(number).
// That method should return true if the argument was the secret number. Test your class.

(function Bingo(){

	var number = Math.floor((Math.random() * 10) + 1);
	console.log(number);
	var n = 5;
	console.log(n);
	(Bingo.prototype.guess = function(n){
		if(number==n)
			return console.log(true);
		else
			return console.log(false);
	}());

}());
