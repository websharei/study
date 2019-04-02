const s = "hello";
console.log(s.toUpperCase());	// "HELLO"

s.rating = 3;			// 에러가 없습니다. 성공일까요?
console.log(s.rating);	// undefined
