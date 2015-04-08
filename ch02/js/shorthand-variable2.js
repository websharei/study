//세 개의 변수를 한 줄에 선언한 후 각각 값을 대입할 수 있다.
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

//id 특성 값이 cost인 요소에 전체 금액을 출력한다.
var el = document.getElementById("cost");
el.textContent = "$"+total;