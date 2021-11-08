const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
const btn = question.querySelector(".questions-btn");
btn.addEventListener('click', function() {
    questions.forEach(function(item) {
if(item !== question) {
    item.classList.remove("show-text");
}
    })
    question.classList.toggle("show-text");
});
});








//Traversing the DOM method

//const btns = document.querySelectorAll(".questions-btn");

//btns.forEach(function(btn) {
//btn.addEventListener('click', function(e){
//    const question = e.currentTarget.parentElement.parentElement;
////    question.classList.toggle("show-text");
//});
//})