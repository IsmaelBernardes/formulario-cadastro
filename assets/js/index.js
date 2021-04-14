import { validarNome, validarEmail, validarCpf, validarTelefone } from "./components/validacoesDeCampos.js"
import { enviarDados } from "./components/envioDeDados.js";

const formulario = window.document.querySelector("[data-form-cadastro]");
const inputNome = window.document.querySelector("[data-input-nome]");
const inputEmail = window.document.querySelector("[data-input-email]");
const inputCpf = window.document.querySelector("[data-input-cpf]");
const inputTelefone = window.document.querySelector("[data-input-telefone]");
const buttonCadastrar = window.document.querySelector("[data-button-cadastrar]");

const inputs = [inputNome, inputEmail, inputCpf, inputTelefone];

const funcValidacoes = {
    nome: validarNome,
    email: validarEmail,
    cpf: validarCpf,
    telefone: validarTelefone
}

const dados = {}

inputs.forEach(campos =>{

    campos.addEventListener("change", event =>{
    
        let valido = false;
        event.preventDefault();
        valido = funcValidacoes[campos.name](event.target);

        if(valido){
            dados[campos.name] = event.target.value;
        }
    })
})

formulario.addEventListener("submit", (event) =>{

    event.preventDefault();
    enviarDados(dados);
})