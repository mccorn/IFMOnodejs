let loadData = function() {
  $.ajax({
    type: 'POST',
    url: '/widget.js',
    success: function(response) {
      alert('Вы создали скрипт-файл widgetFS.js, но еще не используете его! =(');
//      document.append('<script src="../widget.js"></script>');
      location.reload();
    }
  });	
}

let addScript = function() {
  alert('addScript');
  let scr = document.createElement('script'),
      head = document.getElementsByTagName( "head" )[ 0 ];
  scr.src = 'script2.js';
  head.appendChild( scr ); 
}

//window.onload = function() {
//  alert('widget.js pust');
//}

//var myWidget = (function() {
//  function Widget() {
//    
//  }
//  this.prototype._updateData = function() {}
//  return Widget;
//})();
//
//window.onload = function() {
//  alert('widget pust');
//  let mywidget = new myWidget();
//}