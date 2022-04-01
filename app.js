const ratingPage = document.querySelector('.rating-page');
const thanksPage = document.querySelector('.thanks-page');
const submitButton = document.querySelector('.submit-btn');
const ratingButton =  document.querySelector('.rating-btn');

submitButton.addEventListener('click', onSubmit);

function onSubmit() {
    ratingPage.classList.add('hide');
    thanksPage.classList.remove('hide');
}