(function () {
  
  function Person(){
  };
  
  Person.prototype.buy = function (car){
    console.log("I'm rich");
  };
  

  var person = new Person();
    // fill code here
    
  function Car(){
    this.price=1300;
  };
  
  Car.prototype.drive = function (){
    console.log("Vrum Vrum");
  };  
  
  var  car= new Car();
  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }

}());



(function () {
  
  // fill code here;
  var employees =  

 

  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }

}());
