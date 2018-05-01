window.onload = function () {

    canvas  = document.getElementById('gamedesk');
    ctx     = canvas.getContext('2d');
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    
    var react = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0,
        height: 0,
        width: 0,   
    };
    
    canvas.drawReact = function(px,py,wreact,hreact) {
        ctx.fillRect(px, py, px + wreact, py + hreact);
        react.x1 = px;
        react.x2 = px + wreact;
        react.y1 = py;
        react.y2 = py + hreact;
        react.width = wreact;
        react.height = hreact;
    },
    
    canvas.fire = function() {
        canvas.clear();
        canvas.drawReact(55,25,10,50);
    },
        
    canvas.clear = function() {
        ctx.clearRect(0,0,ctx.width,ctx.height);
    }
} 

