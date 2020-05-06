



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
function startquiz () {


}

function nextquiz () {


}
function selectquiz () {


}



 


const questions = [{
    question: 'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa fa-check'
        }, {
            text: 'Non',
            icon: 'fa fa-times'
        }]
    }
}, {
    question: 'Quelle est votre température corporelle ?',

    input: {
        type: 'number',
        name: 'degrés',
        min: 34,
        max: 42
    }
}, {
    question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',

    input: {
        type: 'radio',
        answer: [{
            text: 'Oui',
            icon: 'fa fa-check'
        }, {
            text: 'Non',
            icon: 'fa fa-times'
        }]
    }
}
]


// const quicontainer = document.querySelector('.quicontainer');
// const btnDemarer = document.querySelector('.btnDemarer');
// const Préambule = document.querySelector('.Préambule');
// const Etape = document.querySelectorAll('.etape h1');
// const Nbrquestion = document.querySelector('.nbrquestion');
// const SuiverBar = document.querySelector('.bar');

// let i = 0;
// btnDemarer.addEventListener('click', function DeparTest() {
// btnDemarer.style.display = 'none';
// Préambule.style.display = 'none';
// quicontainer.style.display = 'block';
// Etape[0].classList.remove('etape-actuelle');
// Etape[1].classList.add('etape-actuelle');
// nextbutton.disabled = true;
// switchQuest(questions[i]);

// });


// const nextbutton = document.querySelector('#nextbutton');
// const lastbtn = document.querySelector('.last-btn');
// const reponceQuestionPara = document.querySelector('.question');
// const reponce = document.querySelector('.reponce');
// const switsh = document.querySelector('.switsh');

// // index de la question
// nextbutton.addEventListener('click', () => {
// // if()
// i++;
// if (i >= (questions.length)-1 ) {
//     i = (questions.length)-1;
//     nextbutton.innerText= "Terminer le test";
// }
// lastbtn.style.display = 'block';
// nextbutton.classList.remove('addmargin');
// nextbutton.disabled = true;
// switchQuest(questions[i]);
// suiverNbr(i);
// });
// function suiverNbr(j) {
// const actlNbr = j + 1;// *car les index sont commencer par 0*
// Nbrquestion.innerText = actlNbr; // * changer le nembre de la question *
// SuiverBar.style.width = `calc(${actlNbr}* calc(100% / 22))`;// changer la langeur du div>.bar 
// }

// function switchQuest(element) {

// reponceQuestionPara.innerText = element.question;
// reponce.innerHTML = '';
// const reponceAnswer = element.input.answer;
// const reponceinput = element.input;
// if (reponceinput.type === 'radio') {

//     reponceAnswer.forEach(answer => {

//         reponce.innerHTML += `
//                 <div>
//                     <input type="radio" name="choice" id="${answer.text}">
//                     <label for="${answer.text}">
//                     <i class="fas ${answer.icon}"></i>
//                     <span>${answer.text}</span> </label>
//                 </div>`;
//     });



// } else {

//     reponce.innerHTML += `<input type="number"  id="${reponceinput.name}" min="${reponceinput.min}" max="${reponceinput.max}" placeholder="${reponceinput.min} - ${reponceinput.max}">
//                                 <span class="input-span">${reponceinput.name}</span>`
// }


// };
// lastbtn.addEventListener('click', () => {
// i--;
// nextbutton.innerText= "suivant";
// if (i <= 0){
//     i = 0;
//     nextbutton.classList.add('addmargin');
//     lastbtn.style.display = 'none';
// } 
// switchQuest(questions[i]);
// suiverNbr(i);
// });

// switsh.addEventListener('change', (event) => {
// const input = event.target;
// if (input.type === 'number') {
//     const testnumber = parseFloat(input.value);
//     if (testnumber >= input.min && testnumber <= input.max) {
//         nextbutton.disabled = false;
//     } else {
//         nextbutton.disabled = true;
//     }
// } else {
//     nextbutton.disabled = false;
// }
// });

