
export function carregarTabela(){

    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros")) || [];
    const tbody = window.document.querySelector("[data-table-tbody]");
    const buttonRetornar = window.document.querySelector("[data-button-retornar]");
    const paginaIndex = window.document.querySelector("[data-link-index]");

    listaDeCadastros.forEach(cadastros => {
        const tr = window.document.createElement("tr");

        for(let dados in cadastros){
            const td = window.document.createElement("td");

            td.innerHTML = cadastros[dados]
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    });

    buttonRetornar.addEventListener("click", () => paginaIndex.click())
}