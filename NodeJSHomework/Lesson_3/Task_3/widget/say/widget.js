var myWidget = (function() {
  var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
//  console.log(`${ } ::${ } :${ }`);
  function Widget() {
    this.url = 'http://localhost:3030/data.json';
    this.ui = {
      updateBtn: null,
      citySelect: null,
      dataSpan: null
    };
    
    this.init();  
  }
  
  Widget.prototype.init = function() {
    print(this);
    this._initUI();
    this._bindHandlers();
    this._updateData();  
  }
  
  Widget.prototype._initUI = function() {
    this.ui.updateBtn = $('#widget__update');
    console.log('Widget.prototype._initUI:: this.ui.updateBtn : ' + this.ui.updateBtn);
    this.ui.citySelect = $('#widget__city');
    this.ui.dataSpan = $('#widget__text');
  }
  
 Widget.prototype._bindHandlers = function() {
//   console.log('Widget.prototype._bindHandlers:: this.ui.updateBtn : ' + this.ui.updateBtn);
   this.ui.updateBtn.onclick = Widget.prototype._updateData.bind(this);
 }
  
  Widget.prototype._updateData = function(e) {
//    alert("Rrr!");
    console.log('Widget.prototype._updateData');
    e && e.preventDefault();
 
    var xhr = new XHR(),
    dataSpan = this.ui.dataSpan,
    resp;
 
    xhr.open('POST', this.url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
 
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;
      if (this.status != 200) {
        console.log('Request error');
        return;
      }
      resp = JSON.parse(this.responseText);
      console.dir(resp);
      console.dir(dataSpan);
      dataSpan.empty();
      dataSpan.append(resp);
    }
  }
  
  return Widget;
})();



window.onload = function() {
  alert('Widget.js : window.onload');
  let mywidget = new myWidget();
  setInterval(function(){
    mywidget._updateData();    
  }, 10000);
}

function print(someWidget, someDivID) {
  let $wrapper;
  $wrapper = $((document.getElementById(someDivID)) ||(document.body));
    if (!document.getElementById('#widget')) {
      $wrapper.prepend('<div class="widget" id="widget"></div>');
      let $div = $('#widget');
      $div.append('<div class="" id="widget__title">TITLE</div>');
      $div.append('<div class="" id="widget__text">TEXT</div>');
      $div.append('<div class="" id="widget__city">SOMETHING</div>');
      $div.css({
        'position': 'absolute',
        'width': '200px',
        'height': '100px',
        'background': '#eee',
        'border': '2px solid #99e',
        'color': '#99e',
        'border-radius': '25px',
        'text-align': 'center',
        'z-index': 1000,
      });
    }
  }

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