import { setError, setSucess } from "../view/tratamentoDeErros.js"
import { validarNome, validarEmail, validarCpf, validarTelefone } from "./regrasDeValidacaoDeCampos.js"

export function validacaoDeCampos(){

    const inputNome = window.document.querySelector("[data-input-nome]");
    const inputEmail = window.document.querySelector("[data-input-email]");
    const inputCpf = window.document.querySelector("[data-input-cpf]");
    const inputTelefone = window.document.querySelector("[data-input-telefone]");
    const buttonCadastrar = window.document.querySelector("[data-button-cadastrar]");

    const inputs = [inputNome, inputEmail, inputCpf, inputTelefone];
    const cadastro = {}

    inputs.forEach(campos =>{

        campos.addEventListener("change", event =>{

            event.preventDefault();
            const dado = validar(event.target);

            cadastro[campos.name] = dado;

        })
    })

    return cadastro;
}

function validar(campo){

    const funcValidacoes = {
        nome: validarNome,
        email: validarEmail,
        cpf: validarCpf,
        telefone: validarTelefone
    }

    const {regra, mensagemErro} = funcValidacoes[campo.name](campo);

    if(regra === false){

        setError(campo, mensagemErro);
        return null;
    }else{

        setSucess(campo);
        return campo.value;
    }
}