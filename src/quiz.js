function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        let questionNumberInc = questionNumber + 1;
        for (letters in currentQuestion.answers) {
            answers.push(
                `<label class="bg-gray-200 p-3 rounded-sm hover:shadow-md"><input type="radio" name="question${questionNumberInc}" class="mr-4" value="${letters}">
              ${letters}: ${currentQuestion.answers[letters]}
          </label>`
            )
        }

        output.push(
            `<h2 class="text-2xl font-semibold my-4">${questionNumberInc}. ${currentQuestion.question}</h2>
            <div class="flex flex-col mt-5 space-y-4">${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {

}

const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitBtn = document.querySelector('#submit');
const questions = [{
    question: 'I am first option From what map is this?',
    answers: {
        a: "Haven",
        b: "Breeze",
        c: "Fracture",
        d: "Bind"
    },
    correctAnswer: "b"
}, {
    question: 'I am second option From what map is this?',
    answers: {
        a: "Second Haven",
        b: "Second Breeze",
        c: "Second Fracture",
        d: "Second Bind"
    },
    correctAnswer: "a"
}, {
    question: 'I am third option From what map is this?',
    answers: {
        a: "Third Haven",
        b: "Third Breeze",
        c: "Third Fracture",
        d: "Third Bind"
    },
    correctAnswer: "c"
}]

// shuffleArray(questions);
buildQuiz();

submitBtn.addEventListener('click', showResults);