jQuery(document).ready(function($) {

		$.ajax({
			url: 'articles.xml',
			$type: 'GET',
			dataType: 'xml',

			success: function(data){

				var choose_block = $(".choose-us");
				data = $(data).find("category").eq(1).find("article").eq(2);

				choose_block.find("h2").append(data.children("title").text());
				choose_block.find("p").append(data.children("summary").text());
				choose_block.find("a").append(data.children("linkcopy").text()).attr("href", data.children("url").text());
			},

			error: function(xhr, statusText, error){
				console.log(statusText + ", " + error);
			}

		});


		$.ajax({
			url: 'slider-images.json',
			type: 'GET',
			dataType: 'json'
		})
		.done(function(data) {
			$.each(data, function(index, element){
				$(".slider").append("<img class='grayscale' src='" + element + "' />");
			});

			$(".slider").slick({
				dots: false,
				speed: 500,
				infinite: true,
				prevArrow: "<img src='icons/prev-slide.png' class='prev-icon' />",
				nextArrow: "<img src='icons/next-slide.png' class='next-icon' />",
				slidesToShow: 8,
				slidesToScroll: 8
			});
		});

});