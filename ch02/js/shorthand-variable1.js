//변수를 선언함과 동시에 값을 대입 할 수 있다.
var price = 5;
var quantity= 14;
var total = price * quantity;

//id 특성 값이 cost인 요소에 전체 금액을 출력한다.
var el = document.getElementById("cost");
el.textContent = "$"+total;