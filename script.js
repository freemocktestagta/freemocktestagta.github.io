const questions = [
    {
        question: "What is the primary nutrient required for plant growth?",
        options: ["Nitrogen", "Iron", "Zinc", "Copper"],
        correct: 0
    },
    {
        question: "Which crop is known as the ‘Golden Fiber’?",
        options: ["Cotton", "Jute", "Silk", "Wool"],
        correct: 1
    },
    {
        question: "Which soil type is best for growing wheat?",
        options: ["Clay", "Sandy", "Loamy", "Rocky"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = (currentQuestion + 1) + ". " + questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(index) {
    selectedAnswers[currentQuestion] = index;
    document.querySelectorAll(".option-btn").forEach((btn, i) => {
        btn.style.backgroundColor = i === index ? "#008000" : "#004080";
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

function submitTest() {
    let correctCount = 0;
    let resultHTML = "";

    for (let i = 0; i < questions.length; i++) {
        let isCorrect = selectedAnswers[i] === questions[i].correct;
        resultHTML += `<p>Q${i + 1}: ${questions[i].question} <br> 
            <strong>Your Answer:</strong> ${questions[i].options[selectedAnswers[i]] || "Not Answered"} 
            ${isCorrect ? "✅" : "❌"} <br> 
            <strong>Correct Answer:</strong> ${questions[i].options[questions[i].correct]}</p><hr>`;

        if (isCorrect) {
            correctCount++;
        }
    }

    document.getElementById("score").textContent = correctCount;
    document.getElementById("test").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("answer-review").innerHTML = resultHTML;
}

// Load first question on page load
window.onload = loadQuestion;
