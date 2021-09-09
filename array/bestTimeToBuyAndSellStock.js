const maxProfit = (arr) => {
  let buy = 0
  let sell = 1
  let potentialProfit = 0;

  if (arr.length <= 1) {
    return 0
  }

  while (sell < arr.length) {
    if (arr[sell] < arr[buy]) {
      arr[buy] = arr[sell]
    }
    if (arr[sell] > arr[buy]) {
      potentialProfit = Math.max(arr[sell] - arr[buy], potentialProfit);
    }
    sell++
  }
  return potentialProfit;
}

console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([7,1,5,3,6,4]))