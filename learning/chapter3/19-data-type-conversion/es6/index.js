const numStr = "33.3";
const num = Number(numStr); // 이 행은 숫자 값을 만듭니다. Number 객체의 인스턴스가 아닙니다.
console.log(num);

const a = parseInt("16 volts", 10);	// "Volts"는 무시됩니다. 10진수 16입니다.
const b = parseInt("3a", 16);		// 16진수 3a를 10진수로 바꿉니다. 결과는 58입니다.
const c = parseFloat("15.5 kph");	// "kph"는 무시됩니다. parseFloat는 항상 기수가 10이라고 가정합니다.
console.log(a);
console.log(b);
console.log(c);

const d = new Date();	// 현재 날짜
const ts = d.valueOf();	// UTC 1970년 1월 1일 자정으로 부터 몇 밀리초가 지났는지 나타내는 숫자
console.log(ts);

const e = true;
const n = e ? 1 : 0;
console.log(n);

const m = 33.5;
console.log(m);			// 33.5 - 숫자

const s = m.toString();
console.log(s);			// "33.5" - 문자열

const arr = [1, true, "hello"];
console.log(arr.toString());	// "1,true,hello"

const o = 0;
console.log(o);			// 거짓 같은 값

const b1 = !!o;
console.log(b1);		// false

const b2 = Boolean(o);
console.log(b2);		// false
