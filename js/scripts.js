
// section carousel


let slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
};

let prev = document.getElementById("prev-btn");

prev.addEventListener('click', () => {plusSlides(-1)});

let next = document.getElementById('next-btn');

next.addEventListener('click', () => { plusSlides(1)});


function showSlides(n) {
	
	let slides = document.getElementsByClassName("carousel__info-block");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);


// section features

$('.notes > div').on('click', function(){
	$(this).toggleClass('active').next('.notes-slide').slideToggle(600);
	$(this).children('.notes-title').toggleClass('change-notes-color');
	$(this).parent('.notes').toggleClass('change-notes-border');

})



// section Hire 

$('.hire__slide-position').on('click', function(){
	$(this).toggleClass('active').next('.hire__slide-position-hidden').slideToggle(600);
	$(this).children('.hire__slide-position-arrow').toggleClass('jobs-arrow-rotate');
	$(this).parent('.hire__slide').toggleClass('change-color');
})


// Scroll button 


$(window).on('scroll', function(){
	if($(this).scrollTop() > 500){
		$('#up').fadeIn()
	}
	else{
		$('#up').fadeOut()
	}
})

$('#up').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500)
})