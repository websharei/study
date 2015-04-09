// 환영 메시지를 저장할 변수를 선언한다.
var greeting = "안녕하세요, ";
var name = "웹지니";
var message = ", 주문 내역을 확인해 주세요:";
// 세 변수 값을 결합하여 환영 메시지를 만든다.
var welcome = greeting + name + message;

// id 특성 값이 greeting인 요소를 찾는다.
var el = document.getElementById("greeting");
// 환영 메시지를 출력한다.
el.textContent = welcome;

// 명찰의 상세 정보를 저장할 변수를 선언한다.
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// id 특성 값이 userSign인 요소를 찾아 내용을 수정한다.
var elSign = document.getElementById("userSign");
elSign.textContent = sign;

// id 특성 값이 tiles인 요소를 찾아 내용을 수정한다.
var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// id 특성 값이 subtotal인 요소를 찾아 내용을 수정한다.
var elSubTotal = document.getElementById("subtotal");
elSubTotal.textContent = "$" + subTotal;

// id 특성 값이 shipping인 요소를 찾아 내용을 수정한다.
var elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + shipping;

// id 특성 값이 grandTotal 인 요소를 찾아 내요을 수정한다.
var elGrandTotal = document.getElementById("grandtotal");
elGrandTotal.textContent = "$" + grandTotal;