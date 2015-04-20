var saying = "Home seet home ";
// 문자열을 저장할 saying 변수를 선언한다.

var msg = "<h2>길이</h2><p>"+ saying.length +"</p>";
// 페이지에 출력할 결과를 저장할 msg 변수를 선언한다.
// 문자열의 길이를 알아낸 후 이 결과를 msg 변수에 저장한다.

msg += "<h2>대문자</h2><p>"+ saying.toUpperCase() +"</p>";
// 문자열을 모두 대문자로 변경한 후 msg 변수에 저장한다.

msg += "<h2>소문자</h2><p>"+ saying.toLowerCase() +"</p>";
// 문자열을 모두 소문자로 변경한 후 msg 변수에 저장한다.

msg += "<h2>문자 인덱스: 12</h2><p>"+ saying.charAt(12) +"</p>";
// 12번째 인덱스에 해당하는 문자를 찾은 후 msg 변수에 저장한다.

msg += "<h2>ee의 첫 번째 위치</h2><p>"+ saying.indexOf("ee") +"</p>";
// ee가 처음으로 나타나는 위치의 인덱스 번호를 찾아 msg 변수에 저장한다.

msg += "<h2>e의 마지막 위치</h2><p>"+ saying.lastIndexOf("e") +"</p>";
// e 문자가 마자막으로 사용된 위치의 인덱스 번호를 찾아 smg 변수에 저장한다.

msg += "<h2>인덱스 범위: 8-14</h2><p>"+ saying.substring(8, 14) +"</p>";
// 인덱스 번호 8부터 14 사이의 문자들을 모두 찾아 msg 변수에 저장한다.

msg += "<h2>replace</h2><p>"+ saying.replace("me", "w") +"</p>";
// 문자열 내에서 처음으로 me가 사용된 곳을 찾아 w로 대체한 후, 그 결과를 msg 변수에 저장한다.

var el = document.getElementById("info");
// id 속성 값이 info인 요소를 찾아 el 변수에 저장한다.

el.innerHTML = msg;
// 요소에 메시지를 출력한다.