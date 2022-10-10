


document.addEventListener("DOMContentLoaded", async function() {
    const element = await document.getElementById('questionSurvey');
    const query = window.location.search;
    const survey = await getSurvey('alexandru');




    const urlParamsm = new URLSearchParams(query);
    const name = urlParamsm.get('id');
    element.innerHTML= survey.question;
});




