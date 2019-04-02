const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;
obj["not an identifier"];		 // 3
obj["color"];					// "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];						//8

console.log(obj);
console.log(obj[SIZE]);
console.log(obj.SIZE);

const sam1 = {
	name: 'Sam',
	age: 4,
};

const sam2 = { name: 'Sam', age: 4 }; // 한 줄로 선언했습니다.

const sam3 = {
	name: 'Sam',
	classification: {
		kingdome: 'Anamalia',
		phylum: 'Chordata',
		class: 'Mamalia',
		order: 'Carnivoria',
		family: 'Felide',
		subfamily: 'Felinae',
		genus: 'Felis',
		species: 'Catus',
	},
};
console.log(sam1);
console.log(sam2);
console.log(sam3.classification.family);		// "Felidae"
console.log(sam3["classification"].family);		// "Felidae"
console.log(sam3.classification["family"]);		// "Felidae"
console.log(sam3["classification"]["family"]);	// "Felidae"

sam3.speak = function() { return "Meow!"; };
console.log(sam3.speak());		// "Meow!"

delete sam3.classification;		// classification 트리 전체가 삭제됐습니다.
delete sam3.speak;				// speak 함수가 삭제됐습니다.
