(function(){
	'use strict';

	var fibonacci = function(n)  {
    if(n <= 2)
        return 1;
   
   	
   		 console.log(n)
	      return fibonacci(n - 1) + fibonacci(n - 2);
	};

	if(process.argv.length !== 3){
		console.error('Please provide a number to calculate fibonacci sequence for. Usage: node fibonacci.js _number_');
		return;
	}

	console.log(fibonacci(process.argv[2]));	
})();