
const generateRandomString = async () => {

    while(true) {
        let stringReturn = '';

        for (let i = 0; i < 15; i++) {
            let index = Math.floor((Math.random()) * 62);
            if(index < 10) {
                stringReturn += index;
            } else if(index < 36) {
                stringReturn+= String.fromCharCode(index+55);
            } else {
                stringReturn+= String.fromCharCode(index+61);
            }
        }

        if(await getSurvey(stringReturn)) {
            continue
        } else {
            return stringReturn;
        }
    }

}

const getSurvey = async (id) => {
    const urlToFetch = `http://localhost:3000/surveys/'${id}'`;

    const response = await fetch(urlToFetch);

    if(response.ok) {
        const jsonResponse = await response.json();
        const surveyReturned = jsonResponse[0];

        return surveyReturned;
    }


}

const postSurvey = async (postedSurvey) => {

    //postedSurvey = await postedSurvey.json

    console.log('This is all object: ' + postedSurvey)
    console.log('This is ID: ' + postedSurvey.id)
    console.log(JSON.stringify(postedSurvey))
    const urlToFetch ='http://localhost:3000/surveys/' + postedSurvey.id;


    const response = await fetch(urlToFetch, {
        method: 'POST',
        body: JSON.stringify(postedSurvey),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    if(response.ok) {
        console.log(response);
        window.location.href='Survey.html?id=' + postedSurvey.id;
    }

}

