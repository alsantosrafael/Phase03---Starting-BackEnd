//Estou começando a transformar meus arquivos dos cards em dinâmicos gravando seus dados em um banco de dados
//Vamos começar exportando os arrays de dados que constituem cada card de curso

module.exports = [
    {
        id: "starter",
        class: "purple",
        level: "01",
        img_url: "https://skylab.rocketseat.com.br/static/media/Starter.64c237cc.svg",
        cardinfo:'<strong class="head1">Torne-se um programador desejado</strong><br>no mercado com esses cursos <br> gratuitos',
        modules:"05 Módulos",
        price:"Free"
        
    },

    {
        id: "launchbase",
        class: "orange",
        level: "02",
        img_url: "https://skylab.rocketseat.com.br/static/media/LaunchBase.08285320.svg",
        cardinfo:'<strong class="head2">Domine a programação do zero</strong> e<br>tenha acesso às melhores <br>oportunidades do mercado',
        modules:"18 Módulos",
        price:"Premium"
        
    },

    {
        id: "gostack",
        class: "green",
        level: "03",
        img_url: "https://skylab.rocketseat.com.br/static/media/GoStack.83a178a0.svg",
        cardinfo:'<strong class="head3">Treinamento imersivo</strong> nas<br>tecnologias mais modernas de<br>desenvolvimento web e mobile',
        modules:"18 Módulos",
        price:"Premium"
    }

]