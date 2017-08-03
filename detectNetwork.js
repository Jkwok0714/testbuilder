// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //var stringified = JSON.stringify(cardNumber);
  
  //console.log(cardNumber);
  var networkName = 'Other';
  
  if ((cardNumber.length === 14) && (cardNumber[0] === '3') && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
	  networkName = "Diner\'s Club";
  }
  if ((cardNumber.length === 15) && (cardNumber[0] === '3') && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
	  networkName = "American Express";
  }
  if ((cardNumber.length === 16) && (cardNumber[0] === '5') && (cardNumber[1] === '1' || cardNumber[1] === '2' 
	|| cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5')) {
	  networkName = "MasterCard";
  }
  if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber[0] === '4')) {
	  networkName = "Visa";
  }
  if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.slice(0,4) === '6011' || cardNumber.slice(0,2) == '65'
	|| cardNumber.slice(0,3) === '644' || cardNumber.slice(0,3) === '645' || cardNumber.slice(0,3) === '646' || cardNumber.slice(0,3) === '647'
	|| cardNumber.slice(0,3) === '648' || cardNumber.slice(0,3) === '649')) {
	  networkName = "Discover";
  }
  if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber.slice(0,4) === '5018' || cardNumber.slice(0,4) === '5020'
	|| cardNumber.slice(0,4) === '5038' || cardNumber.slice(0,4) === '6304')) {
	  networkName = "Maestro";
  }
  
  //console.log(networkName);
  return networkName;

};


