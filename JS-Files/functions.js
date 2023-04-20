function quizStart() {
    document.getElementById('quiz-length').innerHTML = questions.length;
    document.getElementById('quiz-position').innerHTML = currentQuizPosition;
}

function showQuestion() {
    document.getElementById('quiz-start-button').classList.add('d-none');
    document.getElementById('card-deck').classList.add('d-show');
    
    let question = questions[currentQuestion];

    if (currentQuestion <= 4) {
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer_1'];
        document.getElementById('answer-2').innerHTML = question['answer_2'];
        document.getElementById('answer-3').innerHTML = question['answer_3'];
        document.getElementById('answer-4').innerHTML = question['answer_4'];
            
        currentQuestion+= 1;
    } else {
        document.getElementById('card-deck').classList.remove('d-show');
    }
    
}

function quizPosition() {
    document.getElementById('quiz-position').innerHTML = currentQuizPosition+= 1;
}

function answer(answer) {
    let questPosition = currentQuestion - 1;
    let rightAnswer = questions[questPosition];
    let rightID = 'card_color_'+rightAnswer['right_answer'];
    let notRightID = 'card_color_'+answer;

    if (answer == rightAnswer['right_answer']) {
        document.getElementById(rightID).classList.add('bg-green');
        console.log('Richtig!!');
    } else {
        document.getElementById(rightID).classList.add('bg-green');
        document.getElementById(notRightID).classList.add('bg-red');
        console.log('Falsch');
    }
}