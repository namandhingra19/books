const navbar=document.querySelector('.navbar');
navbar.classList.add('navbar-darkk');
const main=document.querySelector('main');
const Allcategories=document.querySelectorAll('.category-span');
for(let category of Allcategories){
    category.style.backgroundColor=getRandomColor2();   
}
function getRandomColor2() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}