function quizStart() {
    document.getElementById('quiz-length').innerHTML = questions.length;
    document.getElementById('quiz-position').innerHTML = currentQuizPosition;
}

function showQuestion() {
    helpTempQuestions();
    let congrats = new Audio('audio/congratulations.mp3');
    let question = questions[currentQuestion];

    if (quizLenght()) {
        helpTempCurrentQuestion(question);
            
        currentQuestion+= 1;
    } else {
        showFinishScreen();
        congrats.play();
        currentQuestion = 0;
        currentQuizPosition = 0;
    }
    helpTempColors();
}

function helpTempQuestions() {
    document.getElementById('quiz-start-button').classList.add('d-none');
    document.getElementById('card-deck').classList.add('d-show');
    document.getElementById('answer-done').classList.remove('d-show');
    document.getElementById('quiz-finish').classList.remove('d-show');
    document.getElementById('next-question').disabled = true;
}

function quizLenght() {
    return currentQuestion < questions.length;
}

function helpTempCurrentQuestion(question) {
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer_1'];
    document.getElementById('answer-2').innerHTML = question['answer_2'];
    document.getElementById('answer-3').innerHTML = question['answer_3'];
    document.getElementById('answer-4').innerHTML = question['answer_4'];
}

function showFinishScreen() {
    document.getElementById('card-deck').classList.remove('d-show');
    document.getElementById('quiz-finish').classList.add('d-show');
    document.getElementById('right-answers').innerHTML = `${yourRightAnswers}`;
    document.getElementById('progress-bar').style = `width: 0;`;
}

function helpTempColors() {
    document.getElementById('card_color_1').classList.remove('bg-green', 'bg-red');
    document.getElementById('card_color_2').classList.remove('bg-green', 'bg-red');
    document.getElementById('card_color_3').classList.remove('bg-green', 'bg-red');
    document.getElementById('card_color_4').classList.remove('bg-green', 'bg-red');
}

function quizPosition() {
    document.getElementById('quiz-position').innerHTML = currentQuizPosition+= 1;
}

function answer(answer) {
    let questPosition = currentQuestion - 1;
    let rightAnswer = questions[questPosition];
    let rightID = 'card_color_'+rightAnswer['right_answer'];
    let notRightID = 'card_color_'+answer;
    let audioRightAnswer = new Audio('audio/right-answer.mp3');
    let audioWrongAnswer = new Audio('audio/wrong-answer.mp3');
    
    if (testingAnswer(answer, rightAnswer)) {
        rightAnswerPushIt(rightID);
        audioRightAnswer.play();
        yourRightAnswers+= 1;
    } else {
        notRightAnswerPushIt(rightID, notRightID);
        audioWrongAnswer.play();
    }
    helpTempProgressBar();
}

function testingAnswer(answer, rightAnswer) {
    return answer == rightAnswer['right_answer'];
}

function rightAnswerPushIt(rightID) {
    document.getElementById(rightID).classList.add('bg-green');
    document.getElementById('answer-done').classList.add('d-show');
}

function notRightAnswerPushIt(rightID, notRightID) {
    document.getElementById(rightID).classList.add('bg-green');
    document.getElementById(notRightID).classList.add('bg-red');
    document.getElementById('answer-done').classList.add('d-show');
}

function helpTempProgressBar() {    
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
    document.getElementById('next-question').disabled = false;
}