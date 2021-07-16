let count = false;
let aaa = ['t', 'b']
let par = document.querySelectorAll('.bt');
let but = document.querySelector('.item_bar').addEventListener('click', active)

function active() {
    count ? count = false : count = true;
    if (count) {
        par[0].style.animationName = 'act_top';
        par[1].style.animationName = 'act_bot';
    }
    else {
        par[0].style.animationName = 'unact_top';
        par[1].style.animationName = 'unact_bot';
    }
}