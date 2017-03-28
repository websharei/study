10주차 과제
이번주 숙제는 다른건 없구요.
수업시간에 했던 것을 혼자 힘으로 만들어보는거에요.
 
첨부한 step0 상태(js가 없는 상태)에서 
수업시간에 만든 부분까지 직접 코딩해보는 것입니다.
아래 흐름을 정리했으니 참고하셔서 코딩해보십시오.
손이 익숙해져야 하므로 3회 정도 반복해도 좋을 것 같습니다.
 
-------------------------------------------------------------------------------------
//step1. 첫번째 div의 id에 movieclip 이라는 이름을 준다.
1. selector를 이용하여 0번째 index의 div를 선택한다.
2. 1에서 선택한 div에 attr를 이용하여 id를 movieclip이라 한다.
 
//step2. 모든 div에 0~100사이의 값을 준다.
1. selector를 이용하여 id가 movieclip이 아닌 div를 선택한다.
2. each를 이용하여 각 div에 접근한다. 
3. each 함수 내에서 random 수를 만들고 movieclip div에 주입한다.
 
//step3. 클릭한 지점으로 movieclip div을 움직인다.
1. each 함수 내에서 각 div에 click event를 건다. click event를 걸은 후 테스트 한다. (console로 클릭한 div가 나오는 지 테스트)
2. click함수 내에 클릭한 div의 좌표를 뽑아본다. 좌표를 알아내는 함수는  선택된div.position() 이다.
3. movieclip의 left, top속성을 position.left, position.top으로 설정하되 animate 함수를 이용한다.
 
//step4  클릭한 지점의 div의 숫자를 조사 한 후 거기에 맞는 색상을 칠한다.
1. click 함수 내에서  선택된div.text()를 이용하여 값을 뽑는다.
2. 값은 Number Type으로 바꾼 후 if문을 돌려 색깔을 color변수에 닫는다.
3. 선택된 div의 backgroundColor값이 2에서 color 변수값이 되게 animate한다.
 
//step5  div를 클릭하면 이전 div의 모양을 바꾼다. 짝수 일 경우 동그라미로 바꾼다.
1. prevMovieClip 변수를 만든다.
2. 선택된 div가 짝수라면 prevMovieClip 변수에 선택된 div를 저장한다. 홀수라면 null을 저장한다.
3. 그 다음 클릭에서 prevMovieClip 값이 있는지, null인지 판단 한 후 있다면 prevMovieClip이 참조하는 div의 borderRadius를 50%로 animate한다.
