const now = new Date();
console.log(now); // 2019-04-02T13:30:44.979Z

const halloween = new Date(2016, 9, 31); // 월은 0에서 시작합니다. 즉 9는 10월입니다.
console.log(halloween);

const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
console.log(halloweenParty);

console.log(halloweenParty.getFullYear());		// 2016
console.log(halloweenParty.getMonth());			// 9
console.log(halloweenParty.getDate());			// 31
console.log(halloweenParty.getDay());			// 1
console.log(halloweenParty.getHours());			// 19
console.log(halloweenParty.getMinutes());		// 0
console.log(halloweenParty.getSeconds());		// 0
console.log(halloweenParty.getMilliseconds());	// 0
