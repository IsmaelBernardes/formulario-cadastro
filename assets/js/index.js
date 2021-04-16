import { validacaoDeCampos } from "./components/model/validacaoDeCampos.js"
import { handlerCadastros } from "./components/model/envioDeDados.js"

let { dados, validos } = validacaoDeCampos();

window.document.querySelector("[data-form-cadastro]").addEventListener("submit", (event) =>{

    event.preventDefault();
    
    const paginaTabela = window.document.querySelector("[data-link-visualizacao]");
    
    if(validos.indexOf(false) === -1){
        paginaTabela.click();
        handlerCadastros(dados);
    }

    validos = [];
});