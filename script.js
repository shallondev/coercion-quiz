
document.addEventListener("DOMContentLoaded", () => {

    let counter = 0;
    const quizElements = document.querySelectorAll('#quiz-options > div');

    quizElements.forEach((element, index) => {
        element.addEventListener('click', () => {
            element.classList.add('animate-ping');
            
            setTimeout(() => {
                startQuiz(element, quizElements, counter);
                counter++;
            }, 500);
        });
    });
});

function startQuiz(element, quizElements, counter) {

    element.classList.remove('animate-ping');

    if (element.id === 'quiz-coercion') {
        quizElements.forEach((element, index) => {
            element.querySelector(`h1 > #choice-${index}`).classList.remove("hidden");
            //element.querySelector('h1').textContent = 'Test';
            element.classList.remove('hidden');
        });
    }
}