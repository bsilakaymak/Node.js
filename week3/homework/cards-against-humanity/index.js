'use strict';

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world peace", "help people learn programming"]

function randomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}
function cardsVsHuman(){
    const source = "<p> <span class='fill-in'>{{subj}}</span> is great to <span class='fill-in'>{{punch}}</span></p>"
    let template = Handlebars.compile(source);
    const data = {"subj": randomElement(subjects), "punch": randomElement(punchlines) };
    const result = template(data);
    const cardDisplay = document.getElementById('card');
    cardDisplay.innerHTML = result;
}

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', cardsVsHuman);
