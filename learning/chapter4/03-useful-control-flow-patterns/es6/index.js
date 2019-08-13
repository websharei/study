
// 4.3.1 continue 문을 사용하여 조건 중첩 줄이기, 4.3 유용한 제어문 패턴, 4장 제어문
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

//4.3.2 break나 retrun 문을 써서 불필요한 연산 줄이기, 4.3 유용한 제어문 패턴, 4장 제어문
let fistPrime = null;
for(let n of bigArrayOfNumbers) {
	if(isPrime(n) && firstPrime === null) firstPrime = n;
}

let fistPrime = null;
for(let n of bigArrayOfNumbers) {
	if(isPrime(n)) {
		firstPrime = n;
		break;
	}
}

//4.3.3 루프를 완료한 뒤 인덱스 값 사용하기, 4.3 유용한 제어문 패턴, 4장 제어문
let i = 0;
for(; i < bigArrayOfNumbers.length; i++) {
	if(isPrime(bigArrayOfNumber[i])) break;
}
if(i === bigArrayOfNumber.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);
