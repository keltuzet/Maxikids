$('.cashes .cash').click(function(event) {
	$('.cashes .cash').removeClass('active');
	$(this).addClass('active');
});

$('.catalog').hover(function() {
	let $icon = $(this).find('.icon'), $img = $(this).find('.icon-img'), img_src = $img.attr('src');
	img_src = img_src.slice(0,img_src.length-4) + '-white.svg';
	$img.attr('src', img_src);
	$(this).addClass('hover');
}, function() {
	let $icon = $(this).find('.icon'), $img = $(this).find('.icon-img'), img_src = $img.attr('src');
	img_src = img_src.slice(0,img_src.length-10) + '.svg';
	$img.attr('src', img_src);
	$(this).removeClass('hover');
});

$('.currency .item').click(function(event) {
	$('.currency .item').removeClass('active');
	$(this).addClass('active');
});

// function add_btn_heart($elem) {
// 	$img = $('.img-btn');
// 	$elem.addClass('btn-active').prepend($img);
// }

// add_btn_heart($('.head-buttons .button-top-sales'));

// $('.head-buttons .btn').click(function(event) {
// 	console.dir($(this).parent().children('.btn-active').removeClass('btn-active'));
// 	add_btn_heart($(this));
// });

$('.brands-block .brand').hover(function() {
	let $img = $(this).children('img'), src = $img.attr('src').slice(0,$img.attr('src').lastIndexOf('.png'))+'-hover.png';
	$(this).children('img').attr('src', src);
}, function() {
	let $img = $(this).children('img'), src = $img.attr('src').slice(0,$img.attr('src').lastIndexOf('-hover.'))+'.png';
	$(this).children('img').attr('src', src);
});

$('.catalog-top-new-sale-section .arrow-right').click(function(event) {
	$('.products .product-box').each(function(index, el) {
		let left = parseInt($(this).css('left')) - 314 + 'px';
		$(this).css('left', left);
	});
});

$('.catalog-top-new-sale-section .arrow-left').click(function(event) {
	$('.products .product-box').each(function(index, el) {
		let left = parseInt($(this).css('left')) + 314 + 'px';
		$(this).css('left', left);
	});
});

$('.reviews-section .multiple-items').slick({
	infinite: true,
	arrows: true,
	prevArrow: '.reviews-section .arrow-left',
  	nextArrow: '.reviews-section .arrow-right',
  	speed: 300,
	slidesToScroll: 1,
	centerMode: true,
  	variableWidth: true
});

$('.blog-section .blog-content').slick({
	infinite: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '.blog-section .arrow-left',
  	nextArrow: '.blog-section .arrow-right',
  	speed: 300,
  	variableWidth: true,
  	
	  responsive: [
	    {
	      breakpoint: 1290,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 975,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 660,
	      settings: {
	        slidesToShow: 1,

	      }
	    }
	  ]
});

$('.slide-section .slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '.slide-section .arrow-left',
  	nextArrow: '.slide-section .arrow-right',
  	speed: 300,
  	autoplay: true

});

$('.catalog-top-new-sale-section .head-buttons').slick({
	variableWidth: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	centerMode: true
});