function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let pointerOne = 0;
  let pointerTwo = 0;
  let smallestDiff = Infinity;
  let smallestTwo;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let sum;

    if (arrayOne[pointerOne] === arrayTwo[pointerTwo]) {
      return [arrayOne[pointerOne], arrayTwo[pointerTwo]];
    }

    else if (arrayOne[pointerOne] > arrayTwo[pointerTwo]) {
      sum = arrayOne[pointerOne] - arrayTwo[pointerTwo];
      if (sum < smallestDiff) {
        smallestDiff = sum;
        smallestTwo = [arrayOne[pointerOne], arrayTwo[pointerTwo]]
      }
      pointerTwo++;
    }
    else if (arrayOne[pointerOne] < arrayTwo[pointerTwo]) {
      sum = arrayTwo[pointerTwo] - arrayOne[pointerOne];
      if (sum < smallestDiff) {
        smallestDiff = sum;
        smallestTwo = [arrayOne[pointerOne], arrayTwo[pointerTwo]]
      }
      pointerOne++;
    }
  }
  return smallestTwo;
}

smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])

