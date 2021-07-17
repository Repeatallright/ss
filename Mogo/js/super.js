let superBlock = document.querySelector('.super_block');
let superHide = document.querySelector('.super_hide');
let superImg = document.querySelector('.super_img');
let imgView = document.querySelectorAll('.img_view');
let superBut = document.querySelector('.super_but');

for (let con = 0; con < imgView.length; con++) {
    imgView[con].addEventListener('click', imgShow)

}
superImg.addEventListener('dblclick', superSize);

superBut.addEventListener('click', () => {
    superBlock.style.display = 'none';
    superBlock.classList.remove('super_size')
})

function superSize() {
    superBlock.className.includes('super_size') ? superBlock.classList.remove('super_size') : superBlock.classList.add('super_size');
}



function imgShow(event) {
    let item = this.src;
    this.classList.add('img_view_super')
    item.slice(item.indexOf("L") + 2);
    superImg.src = item
    superBlock.style.display = 'flex';
}



