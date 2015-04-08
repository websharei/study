var inStock;
var shipping;

inStock = true;
shipping = false;

/* 결과에 따라 변수 값을 변경하는 다른 작업들을 이 부분에 작성한다. */

inStock = false;
shipping = true;

var elStock = document.getElementById("stock");
elStock.className = inStock;

var elShip = document.getElementById("shipping");
elShip.className = shipping;