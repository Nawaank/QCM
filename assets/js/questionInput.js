let questionsContainer = document.querySelector('.questions');
let addQuestion = document.querySelector('.addQuestionbtn');
let questionCounter = 0;

addQuestion.addEventListener('click', function(e){
    e.preventDefault();
    let questionInput = `
    <div>
        <label for="question-${questionCounter}">Question ${questionCounter}</label>
        <input type="text" id="question-${questionCounter}" name="question-${questionCounter}">
    </div>
    `;
    questionsContainer.innerHTML+= questionInput;

    questionCounter++;
});