
export function salvarDadosHttp(cadastros){

    const listaDeCadastros = JSON.parse(localStorage.getItem("listaDeCadastros")) || [];
    let dadosIniciaisFormatados = [];
    
    cadastros.forEach(dados => dadosIniciaisFormatados.push(formatarDadosIniciais(dados)));

    if(listaDeCadastros.length === 0){
        
        localStorage.setItem("listaDeCadastros", JSON.stringify([...dadosIniciaisFormatados, ...listaDeCadastros]));
    };
}

function formatarDadosIniciais({name, cpf, phone, email}){

    const dadosFormatados = {
        nome: name,
        email: email,
        cpf: cpf,
        telefone: phone
    }

    return dadosFormatados;
}