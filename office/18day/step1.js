
/*
반복연습

중간고사 성적표

번호	이름	국어	영어	수학	평균
1		Tom		80		50		10		-
2		David	90		51		20		-
3		Grace	100		52		30		-
4		Michael	50		53		40		-
5		Jeorge	60		54		50		-
6		James	40		55		60		-
7		Steve	90		56		70		-
8		Sam		80		57		80		-
9		John	80		58		90		-
10		Sally	30		59		100		-
-		평균	-		-		-		-
*/

var tHeadArr = ["번호", "이름", "국어", "영어", "수학", "평균"];
var nameArr = ["Tom", "David", "Grace", "Michael", "Jeorge", "James", "Steve", "Sam", "John", "Sally"];
var korArr = [80, 90, 100, 50, 60 ,40 ,90 ,80 ,80 ,30];
var engArr = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var mathArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function step1() {

	var $body, $table, $thead, $tbody, $tfoot;

	$body = $("body");
	$table = $("<table />");
	$thead = $("<thead />");
	$tbody = $("<tbody />");
	$tfoot = $("<tfoot />");

	$body.append($table);
	$table.append($thead);
	$table.append($tbody);
	$table.append($tfoot);
}
step1();

function step2(){

	var $thead, $tr, $td;

	$thead = $("thead");
	$tr = $("<tr />");
	$thead.append($tr);

	for(var i = 0; i < tHeadArr.length; i++){
		$th = $("<th />");
		$th.text(tHeadArr[i]);
		$tr.append($th);
	}
}
step2();

function step3() {

	var $tbody, $td, tempArr;

	$tbody = $("tbody");

	for(var i = 0; i < nameArr.length; i++) {
		$tr = $("<tr />");

		$tbody.append($tr);

		tempArr = [ i+1, nameArr[i], korArr[i], engArr[i], mathArr[i], ""];

		for(var j = 0; j < tempArr.length; j++ ) {
			$td = $("<td />");
			$td.text(tempArr[j]);
			// console.log($td.text(tempArr[j]));

			if(j == tempArr.length - 1){
				$td.attr("id","std" + (i + 1));
				// console.log(j);
			}

			$tr.append($td);
		}

		$tbody.append($tr);
	}

}
step3();

function step4() {
	$tfoot = $("tfoot");
	$tr = $("<tr />");

	for(var i = 0; i < tHeadArr.length -1 ; i++){
		$td = $("<td />");
		if(i == 0) {
			$td.attr("colspan","2");
			$td.text("평균");
		} else {
			$td.attr("id","avg" + i);
		}
		$tr.append($td);
	}
	$tfoot.append($tr);
}
step4();
