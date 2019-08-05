let totalBet;
let funds;

if(new Date().getDay() === 3) { //new Date().getDay()는 현재 요일에 해당하는 숫자를 반환합니다. 0은 일요일입니다.
	totalBet = 1;
	console.log("totalBet: " + totalBet);
} else if(funds === 7) {
	totalBet = funds;
	console.log("totalBet: " + totalBet);
} else {
	console.log("No supersition here!");
}

for(let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp)
	console.log(j);

//for(;;) console.log("I will repeat forever!");

let s ='3'; //숫자가 들어있는 문자열
for(; s.length<10; s = ' ' + s); //문자열의 길이를 조건으로 썼습니다.
//여기에서 사용한 for 루프 마지막에 세미콜론이 없으면 에러가 일어납니다.

for(let x=0.2; x<3.0; x +=0.2) //제어 변수가 정수가 아니어도 괜찮습니다.
	console.log(x);

const player = {
	isBroke: 1,
}
for(; !player.isBroke;) //조건에 객체 프로퍼티를 썼습니다.
	console.log("Still playing!");

totalBet = 11;

switch(totalBet) {
	case 7:
		totalBet = funds;
		console.log("swithch = " + totalBet);
		break;
	case 11:
		totalBet = 0;
		console.log("swithch = " + totalBet);
		break;
	case 13:
		totalBet = 0;
		console.log("swithch = " + totalBet);
		break;
	case 21:
		totalBet = 21;
		console.log("swithch = " + totalBet);
		break;
}