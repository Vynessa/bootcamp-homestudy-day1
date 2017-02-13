'use strict'

module.exports = {
	dataTypes:function(args) {
		if ( typeof args === 'string') {
	    return args.length;
	  }

	  if ((args === null) || (args === undefined)) {
	    return "no value";
	  }

	  if (typeof args === 'boolean') {
	    return args;
	  }

	  if (typeof args === 'number') {
	    if (args < 100 )
	    {
	      return "less than 100";
	    }
	    
	    else if ( args > 100 ) {
	      return "more than 100";
	    }
	    
	    else {
	      return "equal to 100";
	    }
	  }

	  if (args instanceof Array) {
	    if (args[2] === undefined) {
	      return undefined;
	     }
	    else {
	      return args[2];        
	    }    
	  }

	  if (typeof args === 'function') {
	    return "called callback";
	  }
	}, 
	
	getPrimes: function(n){

	var isPrime = function(n) {
	  for(var i = 2; i < n; i++)
	  {
	    if(n % i === 0)
	    {
	      return false ;
	    }  
	  }
	  return true;
	}

	  var arrOfPrimeNums = [];
	  if(typeof (n) !== 'number' || (n) < 2) {
	    return 'Invalid input';
	  }
	  
	  for(var j = 2; j <= n; j++) {
	    if(isPrime(j)) {
	      arrOfPrimeNums.push(j);
	    }
	  }
	  return arrOfPrimeNums;   
	}

}