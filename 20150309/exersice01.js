console.log("Esercizio 1a");

function greets () {
 console.log('Hello!');
 greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}
console.log('chiamata greets() :');
greets();
console.log('chiamata greets()() :');
greets()();
console.log('chiamata greets()()() :');
greets()()();


console.log("\nEsercizio 1b");
function greets () {
 console.log('Hello!');
 var greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}
console.log('chiamata greets() :');
greets();
console.log('chiamata greets()() :');
greets()();
console.log('chiamata greets()()() :');
greets()()();
