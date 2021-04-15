import { enviarDados } from "./components/model/envioDeDados.js";
import { validacaoDeCampos } from "./components/model/validacaoDeCampos.js"
import { dadosIniciais } from "./components/model/httpRequest.js"
import { carregarTabela } from "./components/view/criarTabela.js";

function enviarDadosIniciais(dados){
    localStorage.setItem("listaDeCadastros", JSON.stringify([...dados]));
}

dadosIniciais(enviarDadosIniciais);

let { dados, validos } = validacaoDeCampos();

window.document.querySelector("[data-form-cadastro]").addEventListener("submit", (event) =>{

    event.preventDefault();
    
    const paginaTabela = window.document.querySelector("[data-link-visualizacao]");
    paginaTabela.click();
    
    if(validos.indexOf(false) === -1){
        enviarDados(dados);
    }

    validos = [];
})

carregarTabela()