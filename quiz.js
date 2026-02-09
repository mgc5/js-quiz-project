// quiz vragen
const questions = [
    "Wat is de hoofdstad van Nederland?",
    "Hoeveel dagen heeft een week?",
    "Welke kleur krijg je door blauw en geel te mengen?"
]

// antwoord opties
const answer_options = [
    ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven"],
    ["5", "6", "7", "8"],
    ["Groen", "Paars", "Oranje", "Rood"]
]

// juiste antwoorden
const correct_answers = [
    "Amsterdam",
    "7",
    "Groen"
]

// variabelen
let current_question = -1
let score = 0

// test
console.log("Vragen:", questions)
console.log("Antwoordopties:", answer_options)
console.log("Juiste antwoorden:", correct_answers)
console.log("Huidige vraag:", current_question)
console.log("Score:", score)

function show_question() {
    if (current_question < questions.length-1) {
    current_question ++
    }

    // Oude feedback wissen
    document.getElementById("feedback").textContent = ""

    // Vraag tonen
    document.getElementById("question").textContent = questions[current_question]

    // Antwoord opties tonen
    document.getElementById("button1").textContent = answer_options[current_question][0]
    document.getElementById("button2").textContent = answer_options[current_question][1]
    document.getElementById("button3").textContent = answer_options[current_question][2]
    document.getElementById("button4").textContent = answer_options[current_question][3]
}

function check_answer(chosen_answer) {
    console.log(current_question)
    console.log(chosen_answer)
    console.log(correct_answers[current_question])
    if (chosen_answer == correct_answers[current_question]) {
        score ++
        document.getElementById("score").textContent = ("score:", score)
        document.getElementById("feedback").textContent = "Goed"
    } else {
        document.getElementById("feedback").textContent = "Fout"
    }
}

document.getElementById("button1").addEventListener("click", function () {
    check_answer(this.textContent)
})

document.getElementById("button2").addEventListener("click", function () {
    check_answer(this.textContent)
})

document.getElementById("button3").addEventListener("click", function () {
    check_answer(this.textContent)
})

document.getElementById("button4").addEventListener("click", function () {
    check_answer(this.textContent)
})

show_question()