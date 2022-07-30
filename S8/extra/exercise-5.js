const baseUrl = 'https://opentdb.com/api.php?amount='
const input$$ = document.getElementById('inputQuest$$')
const btnQuest$$ = document.getElementById('btnQuest$$')
const btnCheck$$ = document.getElementById('btnCheck$$')
const questContainer$$ = document.getElementById('questContainer$$')

let answered = []

function initialize() {
    reset()

    fetch(baseUrl + input$$.value) 
    .then(res => res.json())
    .then(res => {
        createQuestions(res.results)
    })
}

function reset() {
    questContainer$$.innerHTML = ''
    answered = []
}

function createQuestions(questions) {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i]

        const h2$$ = document.createElement('h2')
        h2$$.textContent = question.question
        questContainer$$.appendChild(h2$$)

        const answers = shuffle([question.correct_answer, ...question.incorrect_answers])
        createAnswers(answers, question.correct_answer, i)
    }
}

function shuffle(a) {
    for (let i = a.length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

function createAnswers(answers, correctAnswer, questionIndex) {
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i]

        const answerP$$ = document.createElement('p')
        answerP$$.setAttribute("data-answer", questionIndex)
        answerP$$.classList.add("answer")

        answerP$$.textContent = answer 
        answerP$$.addEventListener('click', (e) => {
            markAnswer(e.target, questionIndex)
            checkAnswer(answer, correctAnswer, questionIndex)
        })

        questContainer$$.appendChild(answerP$$)
    }
}

function markAnswer(target, questionIndex) {
    const allAnswers = document.body.querySelectorAll("[data-answer='" + questionIndex + "'")
    for (let answer of allAnswers) {
        answer.classList.remove('marked')
    }
    target.classList.add('marked')
}

function checkAnswer(answer, correctAnswer, questionIndex) {
    answered[questionIndex] = answer === correctAnswer
    console.log(answered)
}

function checkGame() {
    let correct = 0
    let incorrect = 0

    for (let i = 0; i < answered.length; i++) {
        const answer = answered[i] 
        if (answer) {
            correct++
        }
        else {
            incorrect++
        }
    }

    const resultP$$ = document.createElement('p')
    resultP$$.innerHTML = `Tiene ${correct} respuestas correctas y ${incorrect} respuestas incorrectas`

    questContainer$$.appendChild(resultP$$)
}

btnCheck$$.addEventListener('click', checkGame)
btnQuest$$.addEventListener('click', initialize)