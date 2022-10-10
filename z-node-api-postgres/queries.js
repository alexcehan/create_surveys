const {request, response} = require("express");
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
})


const getSurveys = (request, response) => {
    pool.query('SELECT * FROM surveys', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getSurveyById = (request, response) => {
    const id = request.params.id.toString();

    pool.query(`SELECT * FROM surveys WHERE id=${id}`, (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const postSurvey = (request, response) => {
    const{id, question, answers} = request.body

    console.log(id)
    console.log(question)
    console.log(answers)

    pool.query(`INSERT INTO surveys (id, question, answers) VALUES ('${id}','${question}','${answers}') RETURNING *`, (error, results) => {
        if(error) {
            throw error
        }

        response.status(200).send(`User added with ID: ${results.rows[0].id}`)
    })
}


module.exports = {
    getSurveys,
    postSurvey,
    getSurveyById,
}