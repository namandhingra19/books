const navbar=document.querySelector('.navbar');
navbar.classList.add('navbar-darkk');
const itemstitle=document.querySelectorAll('.item-title');
const itemscategory=document.querySelectorAll('.item-category')
for(let item of itemstitle)
if(item.textContent.length>30){
    item.innerText=item.textContent.substring(0,28).concat('...');
}
const items=document.querySelectorAll('.category-item');
for(let item of items){
    item.style.backgroundImage="linear-gradient(to bottom,"+getRandomColor()+" 0%, white 100%)";
}
for(let item of itemscategory){
    item.style.backgroundColor=getRandomColor2();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function getRandomColor2() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}