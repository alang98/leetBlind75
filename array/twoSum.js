const twoSum = (arr, target) => {
  let hashKey = {}

  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i]
    if (hashKey[arr[i]] >= 0) {
      return [hashKey[arr[i]], i]
    }
    hashKey[compliment] = i;
  }
}

console.log(twoSum([2,7,11,15], 9))

// iterate over the input array
  //compliment = target - array[i]
  // if hashmap[nums[i]] >= 0
    //return [hashmap[nums[i]], i]
  //else hashmap[compliment] = i