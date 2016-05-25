$(document).ready(function() {

	$(document).on("click", "#primary-nav li", function(event) {
		event.preventDefault();

		var targetElement = $(this).find("a").attr("href");

		if ($(this).hasClass("active")) {
			$("#slide-down").slideUp();
			$(this).removeClass("active");
		} else {
			$(targetElement)
				.show()
				.siblings()
				.hide();

			$(this)
				.addClass("active")
				.siblings()
				.removeClass("active");

			$("#slide-down").slideDown();
		}
	});

});
