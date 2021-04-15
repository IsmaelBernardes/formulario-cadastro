import { validarNome, validarEmail, validarCpf, validarTelefone } from "./regrasDeValidacaoDeCampos.js"

export function validacaoDeCampos(){

    const inputNome = window.document.querySelector("[data-input-nome]");
    const inputEmail = window.document.querySelector("[data-input-email]");
    const inputCpf = window.document.querySelector("[data-input-cpf]");
    const inputTelefone = window.document.querySelector("[data-input-telefone]");
    const buttonCadastrar = window.document.querySelector("[data-button-cadastrar]");

    const inputs = [inputNome, inputEmail, inputCpf, inputTelefone];

    const funcValidacoes = {
        name: validarNome,
        email: validarEmail,
        cpf: validarCpf,
        phone: validarTelefone
    }

    const dados = {}
    let validos = [];

    inputs.forEach(campos =>{

        campos.addEventListener("change", event =>{

            event.preventDefault();
            const valido = funcValidacoes[campos.name](event.target);

            if(valido){

                dados[campos.name] = event.target.value;
            }        

            validos.push(valido);
        })
    })

    return { dados, validos };
}