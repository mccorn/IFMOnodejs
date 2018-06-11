var myWidget = (function() {
  var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
//  console.log(`${ } ::${ } :${ }`);
  function Widget() {
    this.url = 'http://localhost:3030/say/widget.js';
    this.ui = {
      updateBtn: null,
      citySelect: null,
      temperatureSpan: null
    };
    
    this.init();  
  }
  
  Widget.prototype.init = function() {
    this._print();
    this._initUI();
    this._bindHandlers();
    this._updateData();  
  }
  
  Widget.prototype._initUI = function() {
    console.log('Widget.prototype._initUI:: this.ui.updateBtn : ' + this.ui.updateBtn);
    this.ui.updateBtn = $('#widget__update');
    console.log('Widget.prototype._initUI:: this.ui.updateBtn : ' + this.ui.updateBtn);
    
    this.ui.citySelect = document.getElementById('widget__city');
    this.ui.dataSpan = document.getElementById('widget__text');
  }
  
 Widget.prototype._bindHandlers = function() {
//   console.log('Widget.prototype._bindHandlers:: this.ui.updateBtn : ' + this.ui.updateBtn);
   this.ui.updateBtn.onclick = Widget.prototype._updateData.bind(this);
 }
  
  Widget.prototype._updateData = function(e) {
    alert("Rrr!");
//    console.log('Widget.prototype._updateData');
//    e && e.preventDefault();
// 
//    var xhr = new XHR(),
////    city = this.ui.citySelect.value,
//    dataSpan = this.ui.dataSpan,
//    data = 'city=' + city,
//    resp;
// 
//    xhr.open('POST', this.url, true);
//    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//    xhr.send(data);
// 
//    xhr.onreadystatechange = function() {
//      if (this.readyState != 4) return;
//      if (this.status != 200) {
//        console.log('Request error');
//        return;
//      }
//      resp = JSON.parse(this.responseText);
//      temperatureSpan.innerHTML = resp.temperature;
//    }
  }
  
  Widget.prototype._print = function() {
//    console.log('Widget.prototype._print');
    let div = $('body').append('<div>');
  console.dir($('body'));
//    console.dir(div);
    let btn = document.createElement('span');
    btn.setAttribute('id', 'widget__update');
    let span = document.createElement('span');
    span.setAttribute('id', 'widget__text');
    let city = document.createElement('span');
    city.setAttribute('id', 'widget__city');
//    div = $(div);
//    console.dir(btn);
    console.dir(document);
//   document.body.append('H!');
    $(div).append(span);
    $(div).append(city);
    $(div).append(btn);
    $(div).after($('#wrapper'));
  }
  return Widget;
})();

new myWidget();

//    const responseData = {
//      type: 'GET',
//      url: 'localhost:3030/widget.js',
//      success: function(response) {
//        alert('GET: localhost:3030' + response.data); 
//      }
//    }
//    
//    window.onload = function() {
//      console.log('ready');
//      $.ajax(responseData);
//    }