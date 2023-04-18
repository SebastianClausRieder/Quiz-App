function quizStart() {
    document.getElementById('quiz-length').innerHTML = questions.length;
}

function showQuestion() {
    document.getElementById('quiz-start-button').classList.add('d-none');
    document.getElementById('card-deck').classList.add('d-show');
    
    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer_1'];
    document.getElementById('answer-2').innerHTML = question['answer_2'];
    document.getElementById('answer-3').innerHTML = question['answer_3'];
    document.getElementById('answer-4').innerHTML = question['answer_4'];
}