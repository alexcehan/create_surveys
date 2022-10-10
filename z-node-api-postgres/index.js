require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API Surveys Project' })
})

app.get('/surveys', db.getSurveys)
app.get('/surveys/:id', db.getSurveyById)
app.post('/surveys/:id', db.postSurvey)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})