$(document).ready(function(){
    'use strict';
    paper.install(window); //전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); //paper.js를 캔버스에 연결

    //TODO
    var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green'; //원을 채울 색깔
        }
    }
    paper.view.draw(); //실제로 화면에 그림을 그리는 명령
});
