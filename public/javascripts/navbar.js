jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});

//searchbox

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
const bodyw=document.querySelector(".main-body");
searchBtn.onclick =()=>{
	searchBox.classList.add("active");
	searchBtn.classList.add("active");
	searchInput.classList.add("active");
	cancelBtn.classList.add("active");
}
cancelBtn.onclick =()=>{
	searchBox.classList.remove("active");
	searchBtn.classList.remove("active");
	searchInput.classList.remove("active");
	cancelBtn.classList.remove("active");
	searchData.classList.toggle("active");
	searchInput.value = "";
  }
searchBox.addEventListener('keyup',(event)=>{
	if(event.keyCode===13){
		location.href=`/search/${searchInput.value}`;
	}
})