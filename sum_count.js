function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let sumNeg = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0){
        sumNeg += input[i];
    }
  }
  let countPos = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0){
        countPos += 1;
    }
  }
  return [countPos, sumNeg]
}