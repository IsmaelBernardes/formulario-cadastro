import { carregarTabela } from "../view//criarTabela.js"

export function enviarDados(dados){

    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros")) || [];

    const listaAtualizada = [...listaDeCadastros, dados];

    localStorage.setItem("listaDeCadastros", JSON.stringify(listaAtualizada));

    carregarTabela();
}