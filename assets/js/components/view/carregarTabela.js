import { renderTabelaDados } from "./criarTabela.js"
import { dadosIniciais } from "../model/httpRequest.js"
import { salvarDadosHttp } from "../model/salvandoDadosHttp.js"

export function carregarTabela(){
    dadosIniciais(salvarDadosHttp);
    
    const buttonRetornar = window.document.querySelector("[data-button-retornar]");
    const paginaIndex = window.document.querySelector("[data-link-index]");
    const tbody = window.document.querySelector("[data-table-tbody]");

    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros")) || [];

    tbody.innerHTML = "";
    listaDeCadastros.forEach((cadastro, id) => renderTabelaDados(cadastro, id));

    buttonRetornar.addEventListener("click", () => paginaIndex.click());
}