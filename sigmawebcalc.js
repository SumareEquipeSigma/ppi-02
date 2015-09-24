/*
   SIGMAWEBCALC v0.1 (Open Source Project)

   O codigo abaixo e' responsavel por dar funcionalidade a Calculadora.
   Tentamos comentar o maximo possivel para que ele sirva de referencia para
   qualquer pessoa que queira aprender ou expandir este projeto.
   
   por 
      Henrique P. M. Vazquez
      Marcos V. de Souza Apolinario
      Paulo R. P. Macedo
      Ricardo Delamar Roque
      Vitor da S. Leite
      
   Produzido para Faculdade Sumare (Trabalho PPI 2o. Semestre)
   Orientacao Prof: Luciana Akemi Iakabayashi (Tecnologias de Sistemas para Web)
*/

/* 
   Criamos algumas variaveis globais para tornar mais claro e rapido o codigo 
   seguinte. Alguns valores iniciais foram zerados (null), pois os valores definitivos
   serao colocados quando a funcao 'init' for executada. 
*/
var VISOR_DA_CALCULADORA = null,
    LINHA_DE_SINTAXE = null,
    BOTAO_RESULTADO = null,
    BOTAO_LIMPAR_VISOR = null,
    
    KEY_ENTER = 13, // Codigo ASCII da tecla ENTER
    KEY_ESC = 27,
    
    ID_LINHA_DE_SINTAXE = "#sintaxe",
    ID_VISOR_DA_CALCULADORA = "#entrada",
    ID_BOTAO_RESULTADO = "#btResultado",
    ID_BOTAO_LIMPAR_VISOR = "#btLimpar",
    ID_BOTAO_LIMPAR_ULTIMO = "#btLimparUltimo";

/* 
   A funcao 'init' e a primeira funcao que vamos rodar apos o download da pagina HTML
   Ver evento 'ready' no final deste arquivo. 
*/
function init() {
    // Seta algumas variaveis globais
    VISOR_DA_CALCULADORA = $(ID_VISOR_DA_CALCULADORA); // obj do tipo input
    LINHA_DE_SINTAXE = $(ID_LINHA_DE_SINTAXE); // obj do tipo input
    BOTAO_RESULTADO = $(ID_BOTAO_RESULTADO);
    BOTAO_LIMPAR_VISOR = $(ID_BOTAO_LIMPAR_VISOR);
    
    // Limpa o campo Sintaxe (Experimental)
    VISOR_DA_CALCULADORA.on("focus", function() { setSintaxe(""); });
    $("#botoes_calc").on("mouseenter", function() { setSintaxe(""); });
    
    /* 
       Aqui setamos o evento 'click' de *todos* os botoes da calculadora. Todos eles 
       apontarao para uma funcao chamada 'processBotaoClique', ou seja, toda vez que 
       um botao for clicado    aquela funcao sera chamada para tratar o evento de clique. 
    */
    $("#botoes_calc button").each(function(i) {
        // Este bloco sera executado para cada botao existente dentro da DIV 'botoes_calc'
        var o = $(this); // 'o' contem agora o botao em si
        /*
           A funcao 'console' no javascript e' muito util para debugar o programa.
           Aqui estamos apenas dando um exemplo de uso. Para ver esta saida no Chrome, 
           use CTRL+SHIFT+I
        */
        console.log(i + " - Setando evento 'click' para o botao (" + o.attr("id") + ")");
        // Definiremos agora a funcao que sera executada no evento 'click'
        o.click(function(event) { 
            processBotaoClique($(this));
        });
    });
    
    /*
       Vamos capturar o evento de pressionamento de algumas teclas no campo de entrada
       e produzir cliques nos botoes apropriados. Isso vai agilizar as operacoes.
    */
    VISOR_DA_CALCULADORA.keyup(function(e) {
        if( e.which == KEY_ENTER ) {
            // A tecla ENTER produzira' o Resultado do calculo
            BOTAO_RESULTADO.click();
        } else if ( e.which == KEY_ESC ) {
            // A tecla ESC limpara' o Visor
            BOTAO_LIMPAR_VISOR.click();
        }
    });
}

// Esta funcao trata *TODOS* os eventos de clique nos botoes da calculadora
function processBotaoClique(o) {
    var sID = "#" + o.attr("id"); // precisamos adicionar o "#", pois 'attr' so retorna o nome
    
    if( sID == ID_BOTAO_RESULTADO ) {
        /* 
          Protegeremos essa parte do codigo com TRY...CATCH, pois o usuario pode
          digitar qualquer coisa, e queremos avisa-lo de possiveis erros.
        */
        try {
            setDadosVisor( eval(getDadosVisor()) ); // 'eval' produz o resultado do calculo
        }
        catch(err) {
            setDadosVisor( "ERROR" );
        }
    } else if( sID == ID_BOTAO_LIMPAR_VISOR ) {
        // Limpa completamente o Visor
        setDadosVisor( "" );
    } else if( sID == ID_BOTAO_LIMPAR_ULTIMO ) {
        // Eliminar do Visor o ultimo caracter digitado
        var saux = getDadosVisor();
        
        setDadosVisor( saux.substr(0, saux.length-1) );
    }
    else {
        // Se nao for nenhuma das anteriores, entao simplesmente *adicione* o conteudo deste 
        // botao ao Visor da calculadora
        addDadosVisor( o.html() );
    }
}

// - - - Funcoes do Visor
function setDadosVisor(s) { VISOR_DA_CALCULADORA.val( s );} // Coloca dados
function getDadosVisor() { return VISOR_DA_CALCULADORA.val(); } // Recupera os dados
function addDadosVisor(s) { VISOR_DA_CALCULADORA.val( VISOR_DA_CALCULADORA.val() + s ); } // Adiciona dados

function setSintaxe(s) { LINHA_DE_SINTAXE.val(s); }

// - - - 

/* 
   Apos a carga da pagina HTML (na realidade do DOM) um evento (ready) e' 
   enviado, e aqui estamos dizendo qual funcao rodar quando este evento ocorrer.
*/
$(document).ready( init );
