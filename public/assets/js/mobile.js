const navSlide = () => {

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navlinks');

	burger.addEventListener('click' , () => {
		nav.classList.toggle('present');
		burger.classList.toggle('toggle');
	});

}
    
navSlide();