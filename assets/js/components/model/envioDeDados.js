import { carregarTabela } from "../view/carregarTabela.js";

export function handlerCadastros(cadastro){

    const cadastroAtualizado = formatarDados(cadastro);

    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros")) || [];

    const listaAtualizada = [...listaDeCadastros, cadastroAtualizado];
 
    localStorage.setItem("listaDeCadastros", JSON.stringify(listaAtualizada));

    carregarTabela();
}

function formatarDados(cadastro){

    const cpfFormatado = cadastro.cpf.replace(".", "").replace(".", "").replace("-", "");
    const telfoneFormatado = cadastro.telefone.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");

    return { nome: cadastro.nome, email: cadastro.email, cpf: cpfFormatado, telefone: telfoneFormatado };
}