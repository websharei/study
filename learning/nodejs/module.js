// 객체 할당
module.exports = {name: '내 모듈'};

// 절대값을 구하는 메서드 추가
module.exports.abs = function(number) {
	return 0<number ? number: -number;
};

// 원의 넓이를 구하는 메서드 추가
module.exports.circleArea = function(radius) {
	return radius * radius * Math.PI;
}
