import { setError, setSucess } from "../view/tratamentoDeErros.js"

function validarNome(campo){
    
    if(campo.value.length < 3){

        setError(campo, "Nome deve conter no mínimo 3 dígitos!");
        return false;
    }else{

        setSucess(campo);
        return true;
    }
}

function validarEmail(campo){

    if(campo.value.indexOf("@") === -1){

        setError(campo, "e-mail deve conter o caractere '@' e um domínio! ex:'@email.com'");
        return false;
    }else{

        setSucess(campo);
        return true;
    }
}

function validarCpf(campo){

    if(campo.value.length < 11){

        setError(campo, "CPF deve conter 11 dígitos");
        return false;
    }else{

        setSucess(campo);
        return true;
    }
}

function validarTelefone(campo){

    if(campo.value.length < 11){

        setError(campo, "Telefone deve estar no formato (DD) 00000-0000");
        return false;
    }else{

        setSucess(campo);
        return true;
    }
}

export { validarNome, validarEmail, validarCpf, validarTelefone };