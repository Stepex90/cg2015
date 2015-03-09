
var x = new Array();
var n;
function identity(n){
	for(var i=0;i<n;i++)
	{		
		for(var j=0;j<n;j++){
			if(i==j)
				x[j]=1;
			else
				x[j]=0;
		}
	console.log(x);
	}
	return x;
}
