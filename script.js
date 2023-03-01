//your code here
function TotalFormatter (items) {
 var totalPrice = 0;
 items.forEach(function (item) {
  totalPrice = parseFloat(totalPrice) + parseFloat(item.Amount.replace('$','').replace(',',''));
 });

 return '$' + parseFloat(totalPrice).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
 });
};