const twoNumbersArray = (arr, target) =>{
    for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return []
}
console.log(twoNumbersArray([1, 3, 6, 8, 11, 15], 9))