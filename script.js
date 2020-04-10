const button = document.querySelector('.investment__btn');
button.addEventListener('click', () => {
  // 1. Select and read from the UI
    const priceBought = document.querySelector('.price__input--bought').value;
    const priceNow = document.querySelector('.price__input--now').value;
    const investment = document.querySelector('.investment__btc').value;   

  // 2. Calculate the Profits
    
    const moneySpent = investment * priceBought;
    const btcToday = priceNow * investment;
    const btcProfit = btcToday - moneySpent;
    const percentage = Math.round(btcProfit / btcToday * 100);
    
    console.log('Money spent ' + moneySpent);
    console.log('Current Value ' + btcToday);
    console.log('Profit or Loss ' + btcProfit);
    console.log('percent ' + percentage);
    
  // 3. Write to the UI
  const result = document.querySelector('.result');
  if (btcProfit > 0 ) {
    result.textContent = `You bought ${investment}btc at ${moneySpent}$ when the price was ${priceBought}$/btc. The current price is ${priceNow}$/btc. You profit ${btcProfit}$. Youve made ${percentage}% Profit`;

  } else if (btcProfit < 0) {
    result.textContent = `You bought ${investment}btc at ${moneySpent}$ when the price was ${priceBought}$/btc. The current price is ${priceNow}$/btc. You Lost ${btcProfit}$. Youve made ${percentage}% Loss`;

  } else {
    result.textContent = `You bought ${investment}btc at ${moneySpent}$ when the price was ${priceBought}$/btc. The current price is still ${priceNow}$/btc. You niether loss nor gain`;

  }

})

// Things to do tomorrow!
// 1. Add colors to the output;
// 2. check for validations;
