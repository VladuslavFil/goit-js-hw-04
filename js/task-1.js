function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  for (const key in products) {
    totalProducts += products[key];
  }
  return totalProducts <= containerSize;
}
