let funds = 50; // 시작조건

while(funds > 1 && funds < 100) {
	// 돈을 겁니다.

	// 주사위를 굴립니다.

	// 그림을 맞췄으면 돈을 가져옵니다.

	funds = funds + 2; // 2보 전진
	funds = funds - 1; // 1보 후퇴
	console.log(funds);
}


{	// 블록 문을 시작합니다.
	console.log("statement 1");
	console.log("statement 2");
}	// 블록 문을 끝냅니다.

console.log("statement 3");

while(funds > 1 && funds < 100)
	funds = funds + 2;
console.log(funds);
