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
        if (entry.isIntersecting) {
            console.log('aaa');
            imgIpad.classList.add('activeIpad');
            imgIphone.classList.add('activeIphone');
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

