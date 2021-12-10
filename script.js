//To practice DOM manipulation, we want to create a web page for seeding a crypto wallet.
//Crypto wallets typically have a phrase of 12 words which allow the owners of the wallet private access to its content.
// Create a web page with 12 HTML elements of the same class and use JavaScript to populate them.
// In your JavaScript create an array of 24 words and then use a query selector to return all the 12 elements as a NodeList.
//Finally, use a FOR loop to iterate through the NodeList and insert into the HTML a random word from the array of words
//Bonus: For your random word selection, ensure that no word is repeated
var walletArray = ['regular','microphone','deprive','econobox','affair','representative','licence','conservation','reporter','move','grace','tube','meal','corpse','seem','possible','tragedy','satisfaction','prey','available','institution','prisoner','mistreat','divide'];
//array of words
var random;

var elements = document.getElementsByClassName('wallet');
//node list of html elements


//elements.length used as a counter to loop through array as long as the elements in the array.
for(var i = 0; i < elements.length; i++){
  random = Math.floor(Math.random() * 24) //assigns a random number each time the for loop runs
  elements[i].textContent = walletArray[random] //assigns the text content of the respective element to a random index in the words array
}

//for (var i = 0; i <walletItems.length; i++){
//  walletItems[i].className = "wallet"
//}

  //var el = document.querySelector('li.crypto');
//  el.className = 'wallet';

//var els = document.querySelectorAll('li.wallet');
//els[1] className = 'crypto';
