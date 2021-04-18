
function setError(campo, mensagemErro){

    const { elementoMensagem, elementoDeError } = encontrarElementosDeRenderizarErro(campo);

    elementoMensagem.innerHTML = mensagemErro ;
    elementoDeError.className = "form-cadastro__inputs__label error"
}

function setSucess(campo){

    const { elementoMensagem, elementoDeError } = encontrarElementosDeRenderizarErro(campo);
    
    elementoDeError.className = "form-cadastro__inputs__label";
}

function encontrarElementosDeRenderizarErro(elemento){
    
    const elementoPai = elemento.parentElement;
    const elementoMensagem = elementoPai.querySelector("[data-message-error]");
    const elementoDeError = elementoPai.querySelector("[data-inputs-label]")

    return { elementoMensagem, elementoDeError }
}

export { setError, setSucess };