$(function () {

	
	
	
	
	
	
	
	
//show profile card on hover	
	$("#hideshow").mouseover(function () {
		showCards(".profile-card");
	});

	function showCards() {
		$(".footer").hide(1000);
		$(".profile-card").show();
	}
	$(".fa-close").mouseover(function () {
		hideCards(".profile-card");
	});

	function hideCards() {
		$(".footer").show(1000);
		$(".profile-card").hide();
	}
});