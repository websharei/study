$(document).ready(function(){
    'use strict';
    paper.install(window); //전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); //paper.js를 캔버스에 연결

    //TODO
    var tool = new Tool();
    
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text= new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
});
