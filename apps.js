// Função para pesquisar cientistas com base no nome fornecido
function pesquisar(){

// Seleciona a seção onde os resultados da pesquisa serão exibidos
let section = document.getElementById("resultados-pesquisa");

// Obtém o valor digitado no campo de pesquisa
let campoPesquisa = document.getElementById("campo-pesquisa").value


// Verifica se o campo de pesquisa está vazio
if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhum resultado foi encontrado!</p>" // Mensagem se não houver pesquisa
    return // Encerra a função
}

// Converte a entrada para minúsculas para comparação
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = ""; // Variável para armazenar os resultados da pesquisa
let titulo = ""; // Variável para armazenar o título do dado
let descricao = ""; // Variável para armazenar a descrição do dado

//para cada dado dentro da lista de dados 
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()  // Converte o título para minúsculas
    descricao = dado.descricao.toLowerCase()// Converte a descrição para minúsculas

    // Verifica se a descrição e o título contêm o texto pesquisado
    if (descricao.includes(campoPesquisa) && titulo.includes(campoPesquisa) )  {
       
        // Adiciona o resultado à variável de resultados
        resultados += `           
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>  <!-- Link para o título -->
                </h2>
            <img src=${dado.imagem}> <!-- Imagem da cientista -->
            <p class="descricao-meta">${dado.descricao}</p> <!-- Descrição da cientista -->
                    <a href=${dado.informacao} target="_blank">Mais informações</a>  <!-- Link para mais informações -->
            </div>`
    }    
}

// Se não houver resultados, define a mensagem apropriada
if (!resultados) {
    resultados = "<p>Nenhum resultado foi encontrado!</p>"
}

 // Atualiza o conteúdo HTML da seção com os resultados
section.innerHTML = resultados;

}