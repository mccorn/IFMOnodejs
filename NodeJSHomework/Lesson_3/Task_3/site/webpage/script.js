let loadData = function() {
  $.ajax({
    type: 'POST',
    url: '/say',
    success: function(response) {
      alert('We buy widget!');
    }
  });	
}