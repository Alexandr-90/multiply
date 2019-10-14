module.exports = function multiply(first, second) {
  
  const bigFirst =  BigInt(first);
  const bigSecond = BigInt(second);
  result = bigFirst * bigSecond;
  console.log(`${result}`)
  return `${result}`;
}
