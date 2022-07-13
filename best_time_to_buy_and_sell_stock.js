const maxProfit = function (prices) {
  let bestBuy = prices[0];
  let bestSell = 0;
  for (let i = 1; i < prices.length; i++) {
    if (bestBuy > prices[i]) {
      bestBuy = prices[i];
    }
    if (bestSell < prices[i] - bestBuy) {
      bestSell = prices[i] - bestBuy;
    }
  }
  if (undefined) {
    return 0;
  }
  return bestSell;
};
