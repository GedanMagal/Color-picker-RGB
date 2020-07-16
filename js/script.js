window.addEventListener('load', start);

let r, g, b = 255;
let rgb = null;



function start() {

    getValueSlider();
}

function getValueSlider() {
    r = document.getElementById('sliderR');
    g = document.getElementById('sliderG');
    b = document.getElementById('sliderB');
    r.value = 0;
    g.value = 0;
    b.value = 0;

    handleEventSlider();
}


function handleEventSlider() {
    r.addEventListener('change', (event) => {
        document.getElementById('txtR').value = event.target.value;
        changeRGB();
    });
    g.addEventListener('change', (event) => {
        document.getElementById('txtG').value = event.target.value;
        changeRGB();
    });
    b.addEventListener('change', (event) => {
        document.getElementById('txtB').value = event.target.value;
        changeRGB();
    });
}


function changeRGB() {
    let box = document.querySelector('#boxRGB');
    let rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
    box.style.background  = rgb;
    console.log(box);
}





