/*
   SIGMAWEBCALC v0.0 (Open Source Project)
   -----------------
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
   seguinte. Os valores iniciais foram zerados (null), pois os valores definitivos
   serao colocados quando a funcao 'init' for executada. 
*/
var VISOR_DA_CALCULADORA = null,
    LINHA_DE_SINTAXE = null;

/* 
   A funcao 'init' e a primeira funcao que vamos rodar apos o download da pagina HTML
   Ver evento 'ready' no final deste arquivo. 
*/
function init() {
	// Seta algumas variaveis globais
	VISOR_DA_CALCULADORA = $("#entrada"); // obj do tipo input
	LINHA_DE_SINTAXE = $("#sintaxe"); // obj do tipo input
	
	// Limpa o campo Sintaxe (Experimental)
	VISOR_DA_CALCULADORA.on("focus", function() { setSintaxe(""); });
	$("#botoes_calc").on("mouseenter", function() { setSintaxe(""); });
	
	/* 
	   Aqui setamos o evento 'click' de *todos* os botoes da calculadora. Todos eles 
	   apontarao para uma funcao chamada 'processBotaoClique', ou seja, toda vez que 
	   um botao for clicado	aquela funcao sera chamada para tratar o evento de clique. 
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
}

// Esta funcao trata *todos* os eventos de clique nos botoes da calculadora
function processBotaoClique(o) {
	if( o.attr("id") == "btResultado" ) {
		setDadosVisor( eval(getDadosVisor()) ); // 'eval' produz o resultado do calculo
	} else if( o.attr("id") == "btLimpar" ) {
		setDadosVisor( "" );
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
