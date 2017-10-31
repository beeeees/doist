$(document).ready(function() {

	// trigger animation on header image
	$('#header-img').addClass('active');

	// custom file input selection, show file name
	$('#file').on('change',function(){
		var value = $(this).val().replace(/^.*\\/, '');
	 	$(this).parent().find('#file-path').addClass('selected').text(value);
	})

	// navigate to language specific page on select
	$("#language").change(function(){
	    if ($(this).val()!='') {
	      window.location.href=$(this).val();
	    }
  	});

	// hamburger navigation (keeping it simple for this project)
	// to do, add a check for the active class, add aria-expanded
	$('#hamburger').on('click', function(){
		$(this).toggleClass('active');
		$(this).parent().find('.nav').toggleClass('active');
	})
});
