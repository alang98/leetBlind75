const maxSubArray = (arr) => {
  let currentSum = arr[0]
  let globalSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], arr[i] + currentSum)
    if (currentSum > globalSum) {
      globalSum = currentSum
    }
  }
  return globalSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]))