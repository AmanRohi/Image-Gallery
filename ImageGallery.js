// Image Slider;

const optionContainer = document.querySelector('.optionContainer');

let current = 0;
const options = ['Marvel', 'DC', "Flowers", 'Birds'];
let isBusy = false;


const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

// Adding EventListener;

leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);


function moveLeft() {
    if (isBusy) return;
    isBusy = true;
    const option = document.getElementById('option');
    option.style.transition = "all 0.4s linear";
    option.style.transform = "translateX(100%) scale(0.8)";
    setTimeout(() => {
        current--;
        if (current < 0) current = options.length - 1;
        option.remove();
        option.style.transform = "translateX(0)";
        let newOption = document.createElement('div');
        newOption.innerText = options[current];
        newOption.id = 'option';
        optionContainer.append(newOption);
        isBusy = false;

    }, 450);
}
function moveRight() {
    if (isBusy) return;
    isBusy = true;
    const option = document.getElementById('option');
    option.style.transition = "all 0.4s linear";
    option.style.transform = "translateX(-100%) scale(0.8)";
    setTimeout(() => {
        current++;
        if (current >= options.length) current = 0;
        option.remove();
        option.style.transform = "translateX(0)";
        let newOption = document.createElement('div');
        newOption.innerText = options[current];
        newOption.id = 'option';
        optionContainer.append(newOption);
        isBusy = false;

    }, 450);

}


// Image Gallery

let genreGot = "Marvel";
const imageGallery = document.querySelector('.image-gallery');
const closeBtn = document.querySelector('.close-btn');
const imageOpenOverlay = document.querySelector('.img-open-overlay');
const optionOverlay = document.querySelector('.optionOverlay');
const imgShower = document.querySelector('.show-img');
const genre = document.getElementById('option-tag');
const genreType = document.getElementById('option');
const vhArray = Array.from({ length: 50 }, () =>
    [getRandomNumber(4), getRandomNumber(4)].concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
    [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
    [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]
    , [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]
        , [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]
        , [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]));

let html = vhArray.map(HTMLGenerator).join('');
imageGallery.innerHTML = html;
closeBtn.addEventListener('click',closeImage);
genre.addEventListener('click',showOption);

document.addEventListener('click',getType);

function getType(e){
    if(e.target.id !== "option") return;
    let optionGot = e.target.innerText;
    genreGot = optionGot;
    optionOverlay.classList.remove('open');
    imageGallery.innerHTML='';
    html = vhArray.map(HTMLGenerator).join('');
    imageGallery.innerHTML = html;   
    const viewBtn = document.querySelectorAll('.image-btn');
    viewBtn.forEach(button=>{
        button.addEventListener('click',showImage);
    });
}

function showOption(){
    optionOverlay.classList.add('open');
}
function closeImage(){
    imageOpenOverlay.classList.remove('open');
}
function showImage(e){
    console.log(e.target.parentElement.parentElement);
    let link = e.target.parentElement.parentElement.querySelector('img').getAttribute('src');
    imgShower.setAttribute('src',link);
    imageOpenOverlay.classList.add('open');
}


function HTMLGenerator([h, v]) {
    return `
        <div class="item h${h} v${v}">
            <img src  = "Assets/${genreGot}/${getRandomNumber(8)}.jpg">
            <div class="image-overlay" >
                <button class="image-btn"> view</button>
            </div>
        </div>
    `;
}
function getRandomNumber(limit) {
    return Math.floor((Math.random() * limit) + 1);
}
