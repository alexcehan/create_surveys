
let someArray = []
let numberOfOptions = 2;
const addOptionBtn = document.getElementById("addOptionBtn");
const createSurveyBtn = document.getElementById("createSurvey");


const deleteOption =  (idOfOption) => {
    let element = document.getElementById("option" + idOfOption);
    element.parentNode.removeChild(element);

}

const addOption = () => {
    numberOfOptions++;
    let element = document.getElementById("surveyOptions");
    let option = document.createElement("div");
    option.className = "row";
    option.id = "option"+numberOfOptions;




    let innerCol = document.createElement("div");
    innerCol.className = "col-sm-8";




    let inputOption = document.createElement("input");
    inputOption.type = "text";
    inputOption.className = "form-control my-1";
    inputOption.name = "surveyOption";
    inputOption.placeholder = "Write Your Answer";

    innerCol.appendChild(inputOption);

    let dltButtonCol = document.createElement("div");
    dltButtonCol.className="col-sm-2 my-auto";

    let dltButton = document.createElement("button");
    dltButton.type = "button";
    dltButton.className ="btn";

    dltButton.setAttribute('onclick', `deleteOption(${numberOfOptions})`);
    dltButton.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>";

    dltButtonCol.appendChild(dltButton);

    option.appendChild(innerCol);
    option.appendChild(dltButtonCol);

    element.appendChild(option); //last one to append?
}





const processOptions = async () => {
    let question = await document.getElementById("surveyQuestion").value;
    let arr = await document.getElementsByName("surveyOption");
    const arrReturn = [];

    arr.forEach(word => arrReturn.push(word.value));
    console.log(arrReturn);

    let hstore = "";

    for(let value of arrReturn) {
        hstore += `\"${value}\" => \"0\",`
    }

    hstore = hstore.slice(0, -1);
    hstore+='';

    let returnString = `'${question}',${hstore}`;
    console.log(returnString);

    console.log(hstore);

    const newSurveyId = generateRandomString();

    const postedSurvey = {
        id: await newSurveyId,
        question: question,
        answers: hstore,
    }

    console.log(postedSurvey)
    console.log(postedSurvey.id)


    await postSurvey(postedSurvey);







}





addOptionBtn.onclick = addOption
createSurveyBtn.onclick=processOptions



