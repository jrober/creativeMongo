$(document).ready(function(){
  $("#postComment").click(function(){
	var url = "comment";
        var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
        jobj = JSON.stringify(myobj);
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data,textStatus) {
			
		}
	})
  });
$("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })


$("#deleteComments").click(function() {
    $.getJSON('delete', function(data) {
      console.log(data);
    })
  })




});
