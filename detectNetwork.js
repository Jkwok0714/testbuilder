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
	//console.log("Entered check Prefix");
	for (var i = 0; i < prefixes.length; i++) {
		//console.log("Checking prefix " + prefixes[i]);
		if (!Array.isArray(prefixes[i])) {
			//Single prefix found. See if it matches
			var stringified = JSON.stringify(prefixes[i]);
			//console.log("checking " + stringified + " against " + cardNum.slice(0, stringified.length));
			if (stringified === cardNum.slice(0, stringified.length)) return true;
		} else {
			//Array range found. Loop through for a match.
			//console.log("Prefix range found");
			var lengthToCheck = (JSON.stringify(prefixes[i][0])).length;
			var match = Number(cardNum.slice(0, lengthToCheck));
			for (var j = prefixes[i][0]; j <= prefixes[i][1]; j++) {
				//console.log("checking " + j + " against " + match);
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
  //var stringified = JSON.stringify(cardNumber);
  
  //console.log(cardNumber);
  //var networkName = 'Other';
  if (checkLength(cardNumber, [16, 18, 19]) && checkPrefix(cardNumber, [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759])) {
	  return "Switch";
  }
  if ((cardNumber.length === 14) && (cardNumber[0] === '3') && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
	  return "Diner\'s Club";
  }
  if ((cardNumber.length === 15) && (cardNumber[0] === '3') && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
	  return "American Express";
  }
  if ((cardNumber.length === 16) && (cardNumber[0] === '5') && (cardNumber[1] === '1' || cardNumber[1] === '2' 
	|| cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5')) {
	  return "MasterCard";
  }
  if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber[0] === '4')) {
	  return "Visa";
  }
  if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.slice(0,4) === '6011' || cardNumber.slice(0,2) == '65'
	|| cardNumber.slice(0,3) === '644' || cardNumber.slice(0,3) === '645' || cardNumber.slice(0,3) === '646' || cardNumber.slice(0,3) === '647'
	|| cardNumber.slice(0,3) === '648' || cardNumber.slice(0,3) === '649')) {
	  return "Discover";
  }
  if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber.slice(0,4) === '5018' || cardNumber.slice(0,4) === '5020'
	|| cardNumber.slice(0,4) === '5038' || cardNumber.slice(0,4) === '6304')) {
	  return "Maestro";
  }
  
  /*if ((cardNumber.length >= 16 && cardNumber.length <= 19) && (function() {
	  var tempNum = cardNumber.slice(0,6);
	  if (tempNum >= 622126 && tempNum <= 622925) return true;
	  tempNum = cardNumber.slice(0, 3);
	  if (tempNum >= 624 && tempNum <= 626) return true;
	  tempNum = cardNumber.slice(0,4);
	  if (tempNum >= 6282 && tempNum <= 6288) return true;
	  
	  return false;
  })()){
	  return "China UnionPay";
  }
  */
  
  //console.log("Checking China UnionPay");
  if (checkLength(cardNumber, [16, 17, 18, 19]) && checkPrefix(cardNumber, [[622126, 622925],[624, 626],[6282, 6288]])) {
	  return "China UnionPay";
  }
  
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
  //and a length of 16, 18, or 19.
  
  
  //console.log(networkName);
  return "Other";

};


