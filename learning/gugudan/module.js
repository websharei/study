module.exports;

module.exports.print = function(dan) {
	for(var i=1; i<9; i++){
		console.log("%d x %d = %d", dan, i, dan*i);
	}
};
