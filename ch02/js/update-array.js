// 배열을 생성한다.
var colors = ["white","black","custom"];

// 배열의 세 번째 아이템을 수정한다.
colors[2] = "beige";

// id 특성 값이 colors인 요소를 찾는다.
var el = document.getElementById("colors");

// 배열의 세 번째 아이템의 값을 출력한다.
el.textContent = colors[2];