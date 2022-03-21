export const caculatorSale = (salePercent, price) => {
  return price - (salePercent / 100) * price;
};
export const caculatorVND = (price) => {
  var x = price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
};
