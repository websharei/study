let a = 1;				// 원본
let b = a;				// 사본, b는 1입니다. a가 아닙니다.
a =2;					// 원본의 값을 바꿈
console.log(b);			// 1. 사본의 값은 바뀌지 않음
console.log(a === 2);	// true

function change (a) {
	a = 5;
}

a = 3;
change(a);
console.log(a);			// 3

let o1 = {a: 1};
let p1 = o1;				// 이제 p1는 o1가 '가리키고 있는 것'을 가리킵니다.
o1.a = 2;
console.log(p1);			// {a: 2}

let o2 = {a: 1};
let p2 = o2;				// 이제 p2는 o2가 '가리키고 있는 것'을 가리킵니다.
console.log(p2 === o2);		// true
o2 = {a: 2};				// 이제 o2는 다른 것을 가리킵니다. {a: 1}을 수정한 것이 아닙니다.
console.log(p2 === o2);		// false
console.log(p2);			// {a: 1}

let q = {a: 1};
console.log(q == {a: 1})	// false

function change_o (o3) {
	o3.a = 999;
}

let o3 = {a: 1};
change_o(o3);
console.log(o3);			// { a: 999 }
