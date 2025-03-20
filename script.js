const questions = [
    { q: "What is the main component of plant cell walls?", options: ["Cellulose", "Starch", "Protein", "Lipids"], answer: "Cellulose" },
    { q: "Which nutrient is most important for root development?", options: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"], answer: "Phosphorus" },
    { q: "Which is the most widely grown cereal crop in the world?", options: ["Rice", "Wheat", "Corn", "Barley"], answer: "Corn" },
    { q: "What is the process by which plants make their food?", options: ["Respiration", "Photosynthesis", "Germination", "Fermentation"], answer: "Photosynthesis" },
    { q: "Which type of soil is best for growing crops?", options: ["Clay", "Sandy", "Loamy", "Rocky"], answer: "Loamy" },
    { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { q: "Which element is essential for chlorophyll production?", options: ["Nitrogen", "Magnesium", "Iron", "Calcium"], answer: "Magnesium" },
    { q: "What is the scientific name of wheat?", options: ["Oryza sativa", "Zea mays", "Triticum aestivum", "Solanum tuberosum"], answer: "Triticum aestivum" },
    { q: "Which pest affects cotton crops the most?", options: ["Bollworm", "Aphids", "Grasshoppers", "Armyworms"], answer: "Bollworm" },
    { q: "What is the main function of root nodules in leguminous plants?", options: ["Water absorption", "Nitrogen fixation", "Photosynthesis", "Pollination"], answer: "Nitrogen fixation" }
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question-text").innerHTML = questions[currentQuestion].q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
        optionsDiv.innerHTML += `<input type='radio' name='q${currentQuestion}' value='${option}'> ${option}<br>`;
    });
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function skipQuestion() {
    nextQuestion();
}

function submitTest() {
    let score = 0;
    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name='q${index}']:checked`);
        if (selected && selected.value === question.answer) {
            score++;
        }
    });
    document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}`;
}

loadQuestion();
