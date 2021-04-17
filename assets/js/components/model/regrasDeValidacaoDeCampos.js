
function validarNome(campo){
    
    const regra = campo.value.length >= 3;
    const mensagemErro = "Nome deve conter no mínimo 3 dígitos!";
    return {regra, mensagemErro};
}

function validarEmail(campo){

    const regra = campo.value.indexOf("@") != -1;
    const mensagemErro = "e-mail deve conter o caractere '@' e um domínio! ex:'@email.com'!";
    return {regra, mensagemErro};
}

function validarCpf(campo){

    const formatoCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;
    const cpfNumerico = campo.value.replace(".", "").replace(".", "").replace("-", "");

    const regra = formatoCpf.test(campo.value) && cpfNumerico.length === 11;
    const mensagemErro = "CPF deve conter 11 dígitos e estar no formato 000.000.000-00!";
    return {regra, mensagemErro};
}

function validarTelefone(campo){

    const formatoTel = /\(\d{2}\)\s\d{4,5}\-\d{4}/;
    const telNumerico = campo.value.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");

    const regra = formatoTel.test(campo.value) && (telNumerico.length === 11 || telNumerico.length === 10);
    const mensagemErro = "Telefone deve estar no formato (DD) 00000-0000!";
    return {regra, mensagemErro};
}

export { validarNome, validarEmail, validarCpf, validarTelefone };