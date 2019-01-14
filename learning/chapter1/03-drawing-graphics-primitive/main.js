$(document).ready(function(){
    'use strict';
    paper.install(window); //전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); //paper.js를 캔버스에 연결

    //TODO
    var c = Shape.Circle(200, 200, 50); //원 객체 생성, 매개변수 값 세가지(원 중앙 x 좌표, 원 중앙 y 좌표, 원의 반지름)
    c.fillColor = 'green'; //원을 채울 색깔

    paper.view.draw(); //실제로 화면에 그림을 그리는 명령
});
