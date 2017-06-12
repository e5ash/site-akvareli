var w = $(window),
	body = $('body'),
	popup = $('#popup'),
	popupContainer = ('#popup .container'),
	popupClose = $('#popup .close'),
	popupForm = $('#popup .form'),
	popupText = $('#popup-text'),
	popupTextContainer = $('#popup-text .container'),
	popupTextContainerH3 = $('#popup-text .container h3'),
	popupTextContainerDesc = $('#popup-text .container .desc'),
	popupTextContainerText = $('#popup-text .container .text'),
	popupTextClose = $('#popup-text .close'),
	popupTextForm = $('#popup-text .form'),
	speed = 400,
	nav = $('#nav ul'),
	sticks = $('button#sticks');


sticks.click(function() {
	$(this).toggleClass('close');
	nav.slideToggle(400)
});

w.resize(function() {
	if (w.width()>800) {
		nav.removeAttr('style');
		sticks.removeClass('close');
	}
});

$('input[name=tel]').mask("+7 (999) 999-99-99");


function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.callback').click(function() {
	abs(popup);
});


$('.podrobnee').click(function() {
	$(this).removeAttr('href');
	var hidden = $(this).siblings('.hidden'),
		hiddenH3 = hidden.find('h3').html(),
		hiddenDesc = hidden.find('.desc').html(),
		hiddenText =  hidden.find('.text').html();
	popupTextContainerH3.html(hiddenH3);
	popupTextContainerDesc.html(hiddenDesc);
	popupTextContainerText.html(hiddenText);
	abs(popupText);
});


popupClose.click(function() {
	popup.fadeOut(speed);
});
popupTextClose.click(function() {
	popupText.fadeOut(speed);
});
popupForm.find('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});

function checked(object, friend) {
	var	yes = "Да",
		no = "Нет";
	object.on('change', function() {
		if (object.prop('checked')) {
			friend.html(yes);
		}else{
			friend.html(no);
		}
	});
	
}
checked($('#checkbox-chern'), $('#checkbox-chern-friend'));
checked($('#checkbox-design'), $('#checkbox-design-friend'));


function dd_list() {
	var dd_list = $('.dd-list');
		dd_listListSpan = dd_list.find('span');
		dd_listList = dd_list.find('.list');
		dd_listDD = dd_list.find('.dd');
		dd_listDDI = dd_listDD.find('i');
	dd_listDD.click(function() {
		dd_listDDI.toggleClass('rotate');
		dd_listList.toggle();
	});
	$('.dd-list .list label').click(function() {
		dd_listListSpan.html($(this).clone());
		dd_listDDI.toggleClass('rotate');
		dd_listList.toggle();
	});
	// if ($('.dd-list input').prop("checked")) {
	// 	var spanHere = $(this).parent('.dd-list').find('.here span'),
	// 		friend = $(this).siblings('label').html();
	// 	spanHere.css('display', 'value');;

	// }
}

dd_list();


function btn_minus() {
	$('.btn.minus').click(function() {
		var next = $(this).next('input'),
			nextVal = next.val(),
			newNextVal = Number(nextVal) - 1;
		if(nextVal > 1){
			next.val(newNextVal);
		}
		

	});
}
function btn_plus() {
	$('.btn.plus').click(function() {
		var prev = $(this).prev('input'),
			prevVal = prev.val(),
			newPrevVal = Number(prevVal) + 1;
		prev.val(newPrevVal);
		if(prev > 1){
			prev.val(newPrevVal);
		}
	});
}

btn_minus();
btn_plus();

$('#price-repair .slider').slick({
	arrows: false,
	dots: true,
	appendDots: $('#price-repair .nav')
});

$('#price-design .slider').slick({
	arrows: false, 
	dots: true,
	appendDots: $('#price-design .nav')
});

$('#projects .slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-arrow-prev"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon icon-arrow-next"></i></button>'
})
$('#chore .slider').slick({
	prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-arrow-prev-v2"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="icon icon-arrow-next-v2"></i></button>'
})
$('#price-repair li.value-1-1').click(function() {
	$('.item').removeClass('slick-active');
});

