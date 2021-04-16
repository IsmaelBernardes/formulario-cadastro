
function deletarCadastro(atualizarTabela, id){
    
    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros"));

    listaDeCadastros.splice(id, 1);

    localStorage.setItem("listaDeCadastros", JSON.stringify(listaDeCadastros));

    atualizarTabela();
}

export function BotaoDeletar(atualizarTabela, id){

    const button = window.document.createElement('div');
    button.className = "delete"

    button.addEventListener("click", () => deletarCadastro(atualizarTabela, id));

    return button;
}