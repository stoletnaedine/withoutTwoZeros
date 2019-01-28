const factorial = (num) => {
  let acc = 1;
  while (num > 0) {
    acc *= num;
    num--;
  }
  return acc;
}
const withoutTwoZeros = (k0, k1) => {
  const func = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
 if (k0 === 0) {
    return 1;
  }
  if (k0 === 1) {
    return k1 + 1;
  }
  if ((k0 - k1) >= 2) {
    return 0;
  }
  return func(k1 + 1, k0);
}
