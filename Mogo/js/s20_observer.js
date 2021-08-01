let blockImg = document.querySelector('.block4-item');
let imgIpad = document.querySelector('.block4-img-ipad');
let imgIphone = document.querySelector('.block4-img-iphone');

let block2_main = document.querySelector('.block2-items');
let block2_h2 = document.querySelectorAll('.block2-h2');
let block2_text = document.querySelectorAll('.text2');

let selectors_block = document.querySelector('.block5-selectors');
let selector_block = document.querySelectorAll('.block5-selector-text');

let introBlock = document.querySelector('.intro');
let headerBlock = document.querySelector('.header-inner');


let observerImg = new IntersectionObserver((entryes, observerImg) => {
    entryes.forEach(entry => {
        if (window.screen.width > 800) {
            if (entry.isIntersecting) {
                imgIpad.classList.add('activeIpad');
                imgIphone.classList.add('activeIphone');
            }
        } else {
            if (entry.isIntersecting) {
                imgIpad.classList.add('activeIpad');
                imgIphone.classList.add('activeIphone');
            }
        }
    })

}, { threshold: .3 })
observerImg.observe(blockImg)


let observerText = new IntersectionObserver((entryess, observerText) => {
    entryess.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i <= block2_h2.length - 1; i++) {
                block2_h2[i].classList.add('block2-h2_active');
                block2_text[i].classList.add('text2_active')
            }
            console.log('aaa');
        } else {
            for (let i = 0; i <= block2_h2.length - 1; i++) {
                block2_h2[i].classList.remove('block2-h2_active');
                block2_text[i].classList.remove('text2_active')

            }
        }
    })
}, { threshold: .3 })
observerText.observe(block2_main);


let headerObserver = new IntersectionObserver((entryesHeader, headerObserver) => {
    entryesHeader.forEach(entry => {
        entry.isIntersecting ? headerBlock.classList.remove('header_fixed') :
            headerBlock.classList.add('header_fixed');
    })
}, { threshold: .01 })
headerObserver.observe(introBlock)



let hrefs = document.querySelectorAll('.hrefs');
let navObserver = new IntersectionObserver((entryes, navObserver) => {
    entryes.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id) {

                hrefs.forEach(elem => {
                    elem.classList.add('href_unActive')
                    elem.classList.remove('href_active')
                })
                document.querySelector(`.${entry.target.id}-href`).classList.add('href_active')
            }
            console.log(`.${entry.target}-href`);
        }
    })
}, { threshold: .1 })
document.querySelectorAll('section').forEach(elem_observe => {
    navObserver.observe(elem_observe)
})