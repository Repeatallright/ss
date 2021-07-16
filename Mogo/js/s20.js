/*let sliders = document.querySelectorAll('.slider_elem');
let sliderBlock = document.querySelector('.intro');
let sliderImg = ['header-1', 'header-2', 'header-3', 'header-4'];



let count = 1;
function sliderFun() {
    setInterval(function () {
        count == sliders.length ? count = 0 : count = count;
        sliders.forEach(elem => {

            elem.classList.remove('hovered');
        })
        sliders[count].classList.add('hovered');
        sliderBlock.style.backgroundImage = `url(img/build/${sliderImg[count]}.jpg) `;
        count++;
    }, 10000);
}
sliderFun()
*/

let selectors = document.querySelectorAll('.block5-selector-text');
let selector = document.querySelector('.block5-selectors');
let but2 = document.querySelectorAll('.item-right');



function selector_active(event) {
    let idItem = event.target.id;
    let elemNum = idItem.replace('sel', '');
    if (idItem) {
        selectors.forEach(elem => {
            elem.classList.remove('active');
        })
        but2.forEach(elem2 => {
            elem2.classList.remove('active2');
        })
        selectors[elemNum].classList.add('active');
        but2[elemNum].classList.add('active2');
    }
}
selector.onclick = selector_active;


let headerStile = document.querySelector('.header-inner');;
let barCount = false
let barBut = document.querySelector('.item_bar');
let navBar = document.querySelector('.nav_bar');
let bodyBlock = document.querySelector('body')

barBut.addEventListener("click", () => {
    barCount ? barCount = false : barCount = true;
    barCount ? navBar.style.top = '0' : navBar.style.top = '-100%';
    barCount ? headerStile.classList.add('head_act') : headerStile.classList.remove('head_act');

})

document.querySelectorAll('.hrefs').forEach(href => {
    href.addEventListener('click', scrollTo)
})

function scrollTo(event) {
    event.preventDefault();
    let hrefName = this.getAttribute('href')
    let scrollTarget = document.querySelector(hrefName);
    let elementPosition = scrollTarget.getBoundingClientRect().top;
    window.scrollBy({
        top: elementPosition,
        behavior: "smooth"
    })
}