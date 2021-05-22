var app = require("./config/server")

var rotaHome = require("./app/routes/home")
rotaHome(app)

var rotaFormInclusaoLivro = require('./app/routes/formulario_inclusao_livros')(app)

var rotaLivros = require("./app/routes/livros")(app)

app.listen(3000, function(){
    console.log("Servidor rodando com Express na porta de 3000")
})