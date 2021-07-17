let buttons = document.querySelectorAll('.sb');
let blockSlider = document.querySelector('.review_block');
let blockSliderAdd = document.querySelector('.review_slider_block');
let sliderCount = 0;

buttons.forEach(elem => {
    elem.addEventListener('click', sliderChange)
})

function sliderChange(event) {
    let idItem = event.target.id;
    let slidersImg = ['person-img1', 'person-img2', 'person-img3'];
    let slidersName = ['Matthew Dix', 'Christopher Campbell', 'Michael Fertig']
    let slidersText = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lекabore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.", "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”"]
    idItem == 'but_left' ? sliderCount-- : sliderCount++;
    sliderCount > slidersImg.length - 1 ? sliderCount = 0 : sliderCount;
    sliderCount == -1 ? sliderCount = 2 : sliderCount;
    if (idItem == 'but_left') {
        blockSliderAdd.style.opacity = '0';
        setTimeout(() => {
            blockSliderAdd.style.opacity = '1'
            blockSliderAdd.innerHTML =
                `<div class="review_block">
        <div class="img_review">
            <img src="img/team/${slidersImg[sliderCount]}.png" alt="">
        </div>
        <div class="text_review">
            <p class="jon-text-review">${slidersText[sliderCount]}</p>
            <p class="jon-ref-review">${slidersName[sliderCount]}</p>
            
        </div>
    </div>`
        }, 800)

    }
    else if (idItem == 'but_right') {
        blockSliderAdd.style.opacity = '0';
        setTimeout(() => {
            blockSliderAdd.style.opacity = '1';
            blockSliderAdd.innerHTML =
                `<div class="review_block">
        <div class="img_review">
            <img src="img/team/${slidersImg[sliderCount]}.png" alt="">
        </div>
        <div class="text_review">
            <p class="jon-text-review">${slidersText[sliderCount]}</p>
            <p class="jon-ref-review">${slidersName[sliderCount]}</p>
        </div>
    </div>`
        }, 800)

    }
}