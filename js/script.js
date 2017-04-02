$('.client').fadeOut();
$('.client').eq(0).fadeIn();
$(function() {
	// Show the hidden set2 class and chnage the text of the button
	$(".show-more a").on("click",function() {
		$(".set-2").toggleClass("hide");
		if( $(this).text() == "show More" ? $(this).text("show Less") : $(this).text("show More") );
	});
	// Slide the testimonials Section
	var i = 0;
	$(".fa-angle-left").hide();
	function angle() {
		$('.client').fadeOut(500);
		if (i === 0 ? $(".fa-angle-left").hide() : $(".fa-angle-left").show());
		if (i === $(".client").length - 1 ? $(".fa-angle-right").hide() : $(".fa-angle-right").show());
		$(".client").eq(i).delay(500).fadeIn();
		console.log(i)
	}
	$("#testi i.fa-angle-right").on("click",function() {		
		i++;
		angle();			
	});

	$("#testi i.fa-angle-left").on("click",function() {
		i--;
		angle();
	});

});