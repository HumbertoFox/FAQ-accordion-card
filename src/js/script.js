const selectLis = document.querySelectorAll(".ul-questions li h2");

selectLis.forEach(function (liQuestion) {
    liQuestion.addEventListener("click", () => {
        
        const liQuestionsActive = document.querySelector(".active");

        liQuestionsActive.classList.remove("active");
        liQuestionsActive.nextElementSibling.classList.remove("visibled");

        liQuestion.classList.add("active");
        liQuestion.nextElementSibling.classList.add("visibled");

    });
});