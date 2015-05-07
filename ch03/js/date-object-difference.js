// 새로운 Date 객체를 저장할 변수를 선언한다.
var today = new Date();

// 현재 연도를 저장할 변수를 선언한다.
var year = today.getFullYear();

// 회사의 설립일을 설정한다.
var est = new Date("Apr 16, 1996 15:45:55");


// 회사의 설립일과 현재 시간 사이의 차이를 계산한다.
var difference = today.getTime() - est.getTime();




// 밀리 초를 숫자로 나누어 햇수를 계산한다.(315569000000는 한해에 해당하는 밀리초)
difference = (difference / 315569000000);

// id 특성 값이 message인 요소를 저장할 el 변수를 선언한다.
var elMsg = document.getElementById("message");

// 메시지를 출력한다.
elMsg.textContent = Math.floor(difference) + "년 전통의 온라인 여행사!";