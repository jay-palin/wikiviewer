
$(document).ready(function(){
	//on search button click
	$("#search-me").click(function(){
		var searchQuery = $("#searchBox").val();
		var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchQuery+"&format=json&callback=?";
		$.ajax({
		    url: wikiurl,
		    async: true,
		    dataType: 'json',
		    type: 'GET',
		    success: function(data) {
		    	if(searchQuery.length!=0){
		    		$("#search-empty").removeClass("active");
		    		$("#search-results").addClass("active");

		    		$("#result-list").html(""); // clear content

		    		var numResult = data[1].length;	// number of results
		    		var resultData = data[1]; // result data for checking purposes

		    		for(var i = 0; i<numResult;i++){ // for every result get each content
		    			$("#result-list").append('<li class="resultli"><a href="'+data[3][i]+'" target="_blank"><h1 class="result-header">'+data[1][i]+'</h1></a><p>'+data[2][i]+'</p></li>');
            }
          }
        },
		    error: function(errorMessage){
		    	alert("Unable to connect");
		    }
		});
	});
});
