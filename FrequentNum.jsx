const mostFrequentElem = (numbers) => {
  if (numbers.length === 0) return null;

  const frequencyMap = numbers.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  });

  let FrequentElem = numbers[0];
  let maxFrequency = 1;

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        FrequentElem = num;
      }
    }
  }

  return FrequentElem;
};

const number = [8, 7676, 8];
console.log(mostFrequentElem(number));
