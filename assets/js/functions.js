$(document).ready(function() {

	// custom file input selection, show file name
	$('#file').on('change',function(){
		var value = $(this).val().replace(/^.*\\/, "");
	 	$(this).parent().find('#file-path').addClass("selected").text(value);
	})

});
