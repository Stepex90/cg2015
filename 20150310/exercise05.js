var vettore = [];

function generatore() {
	for(var i=0;i<3;i++){
		vettore[i]=Math.floor((Math.random() * 100) + 1);
	}
console.log("Vettore: " + vettore);
	var largest=0;
	for(var i=0;i<3;i++){
		if(largest<vettore[i])
			largest=vettore[i];
	}
	return largest;
};

console.log("Largest: " + generatore());