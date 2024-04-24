// Combining Array with Spraed Operators:
let priceSet1 = [1200, 1500, 1100];
let priceSet2 = [1000, 1300, 1600];
let CombinedPrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(CombinedPrices);
