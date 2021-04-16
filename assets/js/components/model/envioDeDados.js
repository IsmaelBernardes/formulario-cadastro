import { carregarTabela } from "../view/carregarTabela.js";

export function handlerCadastros(dados){

    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros")) || [];

    const listaAtualizada = [...listaDeCadastros, dados];
 
    localStorage.setItem("listaDeCadastros", JSON.stringify(listaAtualizada));

    carregarTabela();
}