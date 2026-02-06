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
let current_question = 0
let score = 0

// test
console.log("Vragen:", questions)
console.log("Antwoordopties:", answer_options)
console.log("Juiste antwoorden:", correct_answers)
console.log("Huidige vraag:", current_question)
console.log("Score:", score)