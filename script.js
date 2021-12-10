//To practice DOM manipulation, we want to create a web page for seeding a crypto wallet.
//Crypto wallets typically have a phrase of 12 words which allow the owners of the wallet private access to its content.
// Create a web page with 12 HTML elements of the same class and use JavaScript to populate them.
// In your JavaScript create an array of 24 words and then use a query selector to return all the 12 elements as a NodeList.
//Finally, use a FOR loop to iterate through the NodeList and insert into the HTML a random word from the array of words
//Bonus: For your random word selection, ensure that no word is repeated

var words = document.getElementsByClassName('wallet');

if (words.length >= 11){

var walletItems = docuent.querySelectorAll('li.wallet');
if (hotItems.length > 0) {
  for (var i = 0 i<walletItems.length: i++){
    walletItems [i].className = 'wallet';
  }
}



//for (var i = 0; i <walletItems.length; i++){
//  walletItems[i].className = "wallet"
//}

  //var el = document.querySelector('li.crypto');
//  el.className = 'wallet';

//var els = document.querySelectorAll('li.wallet');
//els[1] className = 'crypto';
