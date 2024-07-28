export function getProduct(products, productId) {
  return products.find(item => item.id === productId);
}
