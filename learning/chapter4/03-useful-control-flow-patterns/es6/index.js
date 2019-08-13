
// 4.3.1 continue 문을 사용하여 조건 중첩 줄이기
// m 이상 n 이하의 무작위 점수를 반환합니다.
function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

let funds = 50; // 시작조건

while(funds > 1 && funds < 100) {
	let totalBet = rand(1, funds);
	
	if(totalBet === 13) {
		console.log("Unlucky! Skip this round...");
		continue;
	} else {
		// 플레이...
		console.log(totalBet);
	}
}
