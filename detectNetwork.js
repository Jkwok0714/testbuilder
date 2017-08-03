// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var checkLength = function(cardNum, acceptableLengths) {
	//cardNum should be a string. acceptableLengths should be an array of numbers
	for (var i = 0; i < acceptableLengths.length; i++) {
		//console.log("checking length " + cardNum.length + " against " + acceptableLengths[i]);
		if (cardNum.length === acceptableLengths[i]) return true;
	}
	return false;
};

var checkPrefix = function(cardNum, prefixes) {
	//cardNum should be a string, prefixes should be numbers, or array of numbers for ranges
	
	for (var i = 0; i < prefixes.length; i++) {
		if (!Array.isArray(prefixes[i])) {
			//Single prefix found. See if it matches
			var stringified = JSON.stringify(prefixes[i]);
			if (stringified === cardNum.slice(0, stringified.length)) return true;
		} else {
			//Array range found. Loop through for a match.
			var lengthToCheck = (JSON.stringify(prefixes[i][0])).length;
			var match = Number(cardNum.slice(0, lengthToCheck));
			for (var j = prefixes[i][0]; j <= prefixes[i][1]; j++) {
				if (match === j) return true;
			}
		}
	}
	
	return false;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  if (checkLength(cardNumber, [16, 18, 19]) && checkPrefix(cardNumber, [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759])) {
	  return "Switch";
  }
  if (checkLength(cardNumber, [14]) && checkPrefix(cardNumber, [38, 39])) {
	  return "Diner\'s Club";
  }
  if (checkLength(cardNumber, [15]) && checkPrefix(cardNumber, [34, 37])) {
	  return "American Express";
  }
  if (checkLength(cardNumber, [16]) && checkPrefix(cardNumber, [[51, 55]])) {
	  return "MasterCard";
  }
  if (checkLength(cardNumber, [13, 16, 19]) && checkPrefix(cardNumber, [4])) {
	  return "Visa";
  }
  if (checkLength(cardNumber, [16, 19]) && checkPrefix(cardNumber, [6011, 65, [644, 649]])) {
	  return "Discover";
  }
  if (checkLength(cardNumber, [12, 13, 14, 15, 16, 17, 18, 19]) && checkPrefix(cardNumber, [5018, 5020, 5038, 6304])) {
	  return "Maestro";
  }
  if (checkLength(cardNumber, [16, 17, 18, 19]) && checkPrefix(cardNumber, [[622126, 622925],[624, 626],[6282, 6288]])) {
	  return "China UnionPay";
  }
  
  return "Other";

};


