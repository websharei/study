// 숫자로 구성된 배열
const a1 = [1, 2, 3, 4];

// 여러 가지 타입으로 구성된 배열
const a2 = [1, "two", 3, null];

// 여러 줄로 정의한 배열
const a3 = [
	"What the Hammer? What the chanin?",
	"In what furnace was thy brain?",
	"What the anvil? What dread grasp",
	"Dare its deadly terrors clasp?",
];

// 객체가 들어있는 배열
const a4 = [
	{ name: "Ruby", hardness: 9 },
	{ name: "Diamond", hardness: 10 },
	{ name: "Topaz", hardness: 8 },
];

// 배열이 들어있는 배열
const a5 = [
	[1, 3, 5],
	[2, 4, 6],
];

const arr = ['a', 'b', 'c'];
console.log(arr.length); //3


// 첫번째 요소를 가져 옵니다.
console.log(arr[0]); // 'a'

// arr의 마지막의 요소의 인덱스는 arr.length-1입니다.
console.log(arr[arr.length - 1]); // 'c'

const arr2 = [1, 2, 'c', 4, 5];

// arr2는 이제 [1, 2, 3, 4, 5]입니다.
arr2[2] = 3
console.log(arr2[2]);
