let loadData = function() {
  $.ajax({
      type: 'POST',
      url: 'data_time.json',
      success: function(response) {
          alert(response);
          console.log(response);
      }
  });	
}