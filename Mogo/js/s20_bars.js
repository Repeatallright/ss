
let aaa = ['t', 'b']
let barCount = false;
let par = document.querySelectorAll('.bt');
let headerStile = document.querySelector('.header-inner');

let barBut = document.querySelector('.item_bar');
let navBar = document.querySelector('.nav_bar');
let bodyBlock = document.querySelector('body')
let but = document.querySelector('.item_bar').addEventListener('click', active)

function active() {
    barCount ? barCount = false : barCount = true;
    if (barCount) {
        par[0].style.animationName = 'act_top';
        par[1].style.animationName = 'act_bot';

    }
    else {
        par[0].style.animationName = 'unact_top';
        par[1].style.animationName = 'unact_bot';

    }
    barCount ? navBar.style.top = '0' : navBar.style.top = '-150%';
    barCount ? headerStile.classList.add('head_act') : headerStile.classList.remove('head_act');
}


window.addEventListener("resize", () => {
    if (window.screen.width > 800) {
        barCount = false;
        navBar.style.top = '-150%';
        headerStile.classList.remove('head_act');
        par[0].style.animationName = 'unact_top';
        par[1].style.animationName = 'unact_bot';
    }
})