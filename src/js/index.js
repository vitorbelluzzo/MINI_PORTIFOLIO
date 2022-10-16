/* 1- dar um jeito de pegar os elementos que 
representam no html 

 2- dar um jeito de identificar o clique no 
 elemento da aba

 3- quando o usuario clicar, desmarcar a aba
 selecionada

 4- marcar a aba clicada como selecionada

 5- esconder o conteudo anterior

 6- mostrar o conteudo da aba selecionada

*/

// 1- dar um jeito de pegar os elementos que representam no html
const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
    // 2- dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {
        
        if (aba.classList.contains("selecionada")) {
            return;
        }
        
        selecionar_aba(aba)
        Mostrar_info_da_aba(aba)
    });
});


function selecionar_aba(aba)  {

    const abaSelecionada = document.querySelector(".aba.selecionada");
        
    abaSelecionada.classList.remove("selecionada");

    aba.classList.add("selecionada");
    
}

function Mostrar_info_da_aba(aba) {

    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
        informacaoSelecionada.classList.remove("selecionada");

    const idDoElemento_info_aba = "informacao-" + aba.id;
        
    const informacao_a_ser_mostrada = document.getElementById(idDoElemento_info_aba)
    informacao_a_ser_mostrada.classList.add("selecionada")
}