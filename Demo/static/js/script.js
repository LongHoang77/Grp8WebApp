// JavaScript for handling dynamic survey creation

function addQuestion() {
    const questionContainer = document.getElementById('question-container');
    const newQuestion = document.createElement('div');
    newQuestion.className = 'question-item';
    newQuestion.innerHTML = '<input type="text" name="question" placeholder="Enter your question here">';
    questionContainer.appendChild(newQuestion);
}

// JavaScript for handling form submission and question display

// Add event listener for the survey form submission
document.addEventListener("DOMContentLoaded", () => {
    const surveyForm = document.getElementById('survey-form');

    if (surveyForm) {
        surveyForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent page reload
            alert('Survey submitted successfully!');
            // Add more logic here to handle form data
            const formData = new FormData(surveyForm);
            const surveyResponse = {};
            formData.forEach((value, key) => {
                surveyResponse[key] = value;
            });
            console.log('Survey Response:', surveyResponse);
        });
    }
});
