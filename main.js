var gridQuestion = document.querySelectorAll('[id^="questionGrid-"]');
var gridAnswers = document.querySelectorAll('[id^="answerGrid-"]');
var gridDummies = document.querySelectorAll('[id^="dummyGrid-"]');

var questionsGrid = [];
var answersGrid = [];
var dummiesGrid = [];

// grabs each elements from the grid's question
gridQuestion.forEach(function(element) {
    questionsGrid.push(element.id);
});

// grabs each elements from the grid's answer
gridAnswers.forEach(function(element) {
    answersGrid.push(element.id);
});

// grabs the dummy variavles from the grid's dummy
gridDummies.forEach(function(element) {
    dummiesGrid.push(element.id);
});

console.log("Questions Grid:", questionsGrid);
console.log("Answers Grid:", answersGrid);
console.log("Dummies Grid:", dummiesGrid);



function execute() {
    var questionInputs = document.querySelectorAll('[id^="question-"]');
    var answerInputs = document.querySelectorAll('[id^="answer-"]');
    var dummyInputs = document.querySelectorAll('[id^="dummy-"]');

    // Settings the arrays
    var questions = [];
    var answers = [];
    var dummies = [];

    // Store values from question inputs
    questionInputs.forEach(function(input) {
        questions.push(input.value);
    });

    // Store values from answer inputs
    answerInputs.forEach(function(input) {
        answers.push(input.value);
    });

    // Store values from dummy inputs
    dummyInputs.forEach(function(input) {
        dummies.push(input.value);
    });

    for (var i = 0; i < questions.length; i++) {
        var questionGridId = "questionGrid-" + (i + 1);
        var answerGridId = "answerGrid-" + (i + 1);
        var dummyGridId = "dummyGrid-" + (i + 1);

        document.getElementById(questionGridId).textContent = questions[i] || '';
        document.getElementById(answerGridId).textContent = answers[i] || '';
        document.getElementById(dummyGridId).textContent = dummies[i] || '';
    }

    // alert("Check the grid template above to see your changes!");
    var alertBox = document.getElementById("alertBox");
    alertBox.classList.remove("hide")
    alertBox.classList.add("show")
    alertBox.classList.add("showAlert")
    setTimeout(function() {
        alertBox.classList.add("hide")
        alertBox.classList.remove("show")
    },3250);

    console.log("Questions:", questions);
    console.log("Answers:", answers);
    console.log("Dummies:", dummies);
}

function hideAlert() {
    var alertBox = document.getElementById("alertBox");
    alertBox.classList.add("hide")
    alertBox.classList.remove("show")
}

const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(-x, y);
    card.style.setProperty("--rotation", angle + "rad");
});