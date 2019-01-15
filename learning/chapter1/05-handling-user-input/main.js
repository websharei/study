$(document).ready(function(){
    'use strict';
    paper.install(window); //전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); //paper.js를 캔버스에 연결

    //TODO
    var tool = new Tool();

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    }
});
