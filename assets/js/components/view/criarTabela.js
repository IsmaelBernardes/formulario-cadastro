import { carregarTabela } from "../view/carregarTabela.js"
import { BotaoDeletar } from "../view/deletarCadastro.js"

export function renderTabelaDados(cadastro, id){

    const tbody = window.document.querySelector("[data-table-tbody]");
    const tr = window.document.createElement("tr");

    for(let dados in cadastro){
        const tdBody = window.document.createElement("td");

        tdBody.innerHTML = cadastro[dados]
        tr.appendChild(tdBody);
    }

    tr.appendChild(BotaoDeletar(carregarTabela, id));
    tbody.appendChild(tr);

}