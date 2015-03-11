var vettore = new Array();

function generatore(n) {
	for(var i=0;i<n;i++)
	vettore[i]=Math.floor((Math.random() * n) + 1);
	return vettore;
}

var filterResult = vettore.filter(function(item, index, array){
	return (item % 2) == 1;
});

var compare = function (value1, value2) {
 return value1 - value2;
};

var orderResult = filterResult.sort(compare);

