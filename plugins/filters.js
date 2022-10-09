import Vue from 'vue'

Vue.filter('toRuble', function(value) {
  if (!value) {
    return "0.00 ₽";
  }
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    currencyDisplay: "symbol",
  });
  return formatter.format(value);
});
