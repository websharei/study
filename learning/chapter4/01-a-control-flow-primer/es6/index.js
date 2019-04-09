let funds = 50; // 시작조건

while(funds > 1 && funds < 100) {
	// 돈을 겁니다.

	// 주사위를 굴립니다.

	// 그림을 맞췄으면 돈을 가져옵니다.

	funds = funds + 2; // 2보 전진
	funds = funds - 1; // 1보 후퇴
	console.log("funds: " + funds);
}

{	// 블록 문을 시작합니다.
	console.log("statement 1");
	console.log("statement 2");
}	// 블록 문을 끝냅니다.

console.log("statement 3");

while(funds > 1 && funds < 100)
	funds = funds + 2;
console.log("funds: " + funds);

// m 이상 n 이하의 무작위 점수를 반환합니다.
function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환합니다.
function randFace() {
	return ["crown", "anchor", "heart", "spade", "club", "diamond"]
		[rand(0, 5)];
}

const bets = {
	crown: 0,
	achor: 0,
	heart: 0,
	spade: 0,
	club: 0,
	diamond: 0
};
let totalBet = rand(1, funds);
if(totalBet === 7) {
	totalBet = funds;
	bets.heart = totalBet;
} else {
	// 그 판에 걸 돈을 분배합니다.
}
fund = funds - totalBet;
console.log("fund: "+ fund);

let remaining = totalBet;
do {
	let bet = rand(1, remaining);
	let face = randFace();
	bets[face] = bets[face] + bet;
	remaining = remaining - bet;
	
	console.log("remaining: " + remaining);
} while(remaining > 0);

const hand = [];
for(let roll = 0; roll < 3; roll++) {
	hand.push(randFace());
}
console.log("hand: " + hand);
