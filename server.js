const express = require('express') // Criamos variável para chamar express
const nunjucks = require('nunjucks')

const server = express()// criamos uma variavel para executar o express

server.use(express.static('public')) 
//Pegando dados do meu banco de dados
const cards = require("./data")

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render("index")

})

server.get("/about", function(req, res){ //Criando rotas para a pagina about
    return res.render("about")
})


server.get("/content", function(req, res){ //Criando rotas para a pagina content
    return res.render("content", {items: cards} )
})

server.use(function(req, res) { //Chamando nossa página de erro
    res.status(404).render("not-found");
  });

server.listen(5000, function (){
    console.log("Server is running")

})