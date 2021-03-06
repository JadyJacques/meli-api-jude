const express = require("express")
const app = express()

app.all("*", function(req, res, next){
    console.log("passamos pelo app, irruuuuuuu!!!!")
    next()
})
//rotas
const index = require("./routes/index")
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')

app.use(function(req, res, next) { //resolvendo problema de CORS
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use('/', index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app