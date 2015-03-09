var n;
function Fibonacci(n){
	if(n>2)
	for(var i=n;i>2;i--)
	Fibonacci[i]=Fibonacci(i-1)+Fibonacci(i-2);
	return Fibonacci[n];
}

Fibonacci[1]=1;
Fibonacci[2]=1;

