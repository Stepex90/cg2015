var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

function select(data,key,values){
	for(var i=0;i<data.length;i++){
		for(var j=0;j<values.length;j++){
		if (data[i].key===values)
		 console.log(data.name);
		}
	}
};

select(data, key, values); // [ { id:'04', name:'goofy' }, { id:'06', name:'scrooge' } ]