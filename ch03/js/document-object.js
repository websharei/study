var msg = "<p><b>페이지 제목: </b>" + document.title + "<br>";
// 웹 페이지에 출려할 메세지를 저장하는 msg라는 이름의 변수를 선언한다.
// 문서의 제목을 찾아 msg 변수에 저장한다.
msg += "<b>페이지 주소: </b>" + document.URL + "<br>";
// 문서의 URL을 찾아 msg 변수에 저장한다.
msg += "<b>최종 수정일: </b> " + document.lastModified + "</p>";
// 문서의 가장 최근 마지막으로 수정된 날짜를 찾아 msg 변수에 저장한다.
var el = document.getElementById("footer");
// id 속성값이 footer인 요소를 저장하는 el이라는 변수를 선언한다.
el.innerHTML = msg;
// msg 변수에 저장된 값을 id 속성값이 footer인 요소에 출력한다.