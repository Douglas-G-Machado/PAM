module.exports = function(app){
    app.get("/formulario_inclusao_livro", function(req, res){
        res.render("admin/form_add_livros")
    })
}