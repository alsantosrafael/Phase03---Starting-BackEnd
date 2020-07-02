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
    //Transferindo dados da minha página inicial do frontend para o backend
    const data = {
        avatar_url:"https://bityli.com/X0UhH",
        title: "Rocketseat",
        subtitle: "A menor distância entre você e seus objetivos!",
        moto: "Somos especializados em cursos de programação e nosso método está fundamentado nos pilares: <strong>Foco</strong>, <strong>Prática</strong> e <strong>Grupo</strong>",
        techs: "<ul> As principais tecnologias abordadas: <li> Javascript, </li> <li> CSS, </li> <li> HTML, </li> <li> React, </li> <li> React Native. </li> </ul>",
        links: [
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
            { name: "Facebook", url: "https://www.facebook.com/rocketseat/"},
            { name: "Github", url: "https://github.com/Rocketseat"}
            
        ]
    
    }

    return res.render("index", { data : data }) //enviando index e variavel que criei com objeto

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