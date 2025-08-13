import kviz from './kviz.json';

window.onload = () => {
    document.getElementById('title').textContent = kviz.quiz_name;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const timerElement = document.getElementById('timer');
    // Set initial timer value
    const startTimer = () => {
        const timer = setInterval(() => {
            if (parseInt(timerElement.textContent) == 0) {
            clearInterval(timer);
            const validAnswer = document.querySelector('.valid');
            validAnswer.classList.add('answer-valid');
            } else timerElement.textContent = parseInt(timerElement.textContent) - 1;
        }, 1000);
    }
    
    // Initialize timer
    setTimeout(startTimer, 2000);

    // Load questions
    for (const question of kviz.questions) {
        document.getElementById('question').textContent = question.question;
        
        let answersElement = document.getElementById('answers-list');
        let answerOptions = 0;
        
        for (const answer of question.answers) {
            const answerElement = document.createElement('li');
            answerElement.textContent = `${alphabet[answerOptions]}) ${answer.option}`;
            answerElement.className = 'answer';
            if(answer.isValidAnswer) answerElement.classList.add('valid');
            
            answerElement.onclick = () => {
                if (answer.isValidAnswer) {
                    if(answerElement.classList.contains('answer-valid')) answerElement.classList.remove('answer-valid');
                    else answerElement.classList.add('answer-valid');
                } else {
                    if(answerElement.classList.contains('answer-invalid')) answerElement.classList.remove('answer-invalid');
                    else answerElement.classList.add('answer-invalid');
                }
            };
            answersElement.appendChild(answerElement);
            answerOptions++;
        }    

    }

    
}