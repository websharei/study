/*
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

$(document).ready(function(){

// 1) table, thead, tbody를 만든다.
  function step1()
  {
    var body, table, thead, tbody, tfoot;

    body = $("body");
    table = $("<table/>");
    thead = $("<thead/>");
    tbody = $("<tbody/>");
    tfoot = $("<tfoot/>");
    tr = $("<tr/>");

    body.append(table);
    table.append(thead);
    table.append(tbody);
    table.append(tfoot);
  }

// 2) thead의 tr td를 만든다.
  function step2()
  {
    var thead, tr, td;
    var len = tHeadArr.length

    thead = $("thead");
    tr = $("<tr/>");
    thead.append(tr);

    for(var i = 0 ; i < len ; i++)
    {
      td = $("<td/>");
      td.text(tHeadArr[i]);
      tr.append(td);
    }
  }

// 3) tbody의 tr td를 만든다.
  function step3()
  {
    var tbody, tr, td;
    var children;
    var tmpArr;
    var len1, len2, len3;

    tbody = $("tbody");
    len1 = nameArr.length;

    for(var i = 0 ; i < len1 ; i++)
    {
      tmpArr = [ i+1, nameArr[i], korArr[i], engArr[i], mathArr[i], ""];
      len2 = tmpArr.length;
      len3 = len2 - 1;

      tr = $("<tr/>");
      for(var j = 0 ; j < len2 ; j++)
      {
        td = $("<td/>");
        td.text(tmpArr[j]);

        // id를 부여한다.
        if(j == len3)
        {
          td.attr("id", "std" + ( i + 1 ));
        }

        tr.append(td);
      }
      tbody.append(tr);
    }
  }

// step4) tbody의 tr td를 만든다.
  function step4()
  {
    var tfoot, tr, td;
    var len = tHeadArr.length - 1;

    tfoot = $("tfoot");
    tr = $("<tr/>");
    for(var i = 0 ; i < len ; i++)
    {
      if(i==0)
      {
        td = $("<td colspan = '2'/>");
        td.text("평균");
      }
      else
      {
        td = $("<td/>");

        // id를 부여한다.
        td.attr("id", "avg" + i);
        
        td.text("");
      }
      tr.append(td);
    }
    tfoot.append(tr);
  }
  step1()
  step2();
  step3();
  step4();
});
