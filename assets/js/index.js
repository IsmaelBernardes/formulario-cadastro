import { handlerCadastros } from "./components/model/envioDeDados.js";
import { validacaoDeCampos } from "./components/model/validacaoDeCampos.js"

const cadastro = validacaoDeCampos();
window.document.querySelector("[data-form-cadastro]").addEventListener("submit", (event) =>{

    event.preventDefault();
    
    const paginaTabela = window.document.querySelector("[data-link-visualizacao]");
    
    let cadastroValido = [];
    for(let dado in cadastro){
        
        if(cadastro[dado] !== null){

            cadastroValido.push(true);
        }else{

            cadastroValido.push(false);
        }
    }

    if(cadastroValido.indexOf(false) === -1){
        
        paginaTabela.click()
        handlerCadastros(cadastro);
    }
});