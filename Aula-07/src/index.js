const express = require('express');
const app = express();

app.use(express.json());

const livros = require("./livros.json");

app.get('/livros', (request, response) => {

    const { autor } = request.query;

    return response.json( autor )
});

app.post('/livros', (request, response) =>{

    const {titulo, autor, AnoPublicado } = request.body;

    return response.json( { titulo: titulo, autor: autor, ano: AnoPublicado } )
});

app.put('/livros/:id', (request, response) => {

    const parametro = request.params;

    return response.json( parametro )
});

app.delete('/livros/:id', (request, response) => {
    return response.json( { mensagem: "Exclusão Realizada!"} )
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))