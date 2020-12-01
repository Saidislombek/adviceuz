$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});

 
/*$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс		
		$('body,html').animate({scrollTop: top}, 5000, 'linear');
	});
});*/

// Плавгый Скролл

$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    	//отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //В скрипте можно указать скорость прокрутки до якоря var t = 1000;, 
        //меняем 1000 на нужное нам значение, 1000 равно 1 секунде.
        var t = 3000;
        //забираем идентификатор бока с атрибута href
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});