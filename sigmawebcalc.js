
var VISOR_DA_CALCULADORA = null,
    LINHA_DE_SINTAXE = null;

// A funcao 'init' e a primeira funcao que vamos rodar apos o download da pagina HTML
function init() {
	// Seta algumas variaveis globais
	VISOR_DA_CALCULADORA = $("#entrada"); // input obj
	LINHA_DE_SINTAXE = $("#sintaxe"); // input obj
	
	// Limpar o campo Sintaxe
	VISOR_DA_CALCULADORA.on("focus", function() { setSintaxe(""); });
	$("#botoes_calc").on("mouseenter", function() { setSintaxe(""); });
	
	$("#botoes_calc button").each(function(i) {
		var o = $(this);
		
		console.log(i + " - Setando evento 'click' para o botao (" + o.attr("id") + ")");
		o.click(function(event) { 
			processBotaoClique($(this));
		});
	});
}

function processBotaoClique(o) {
	if( o.attr("id") == "btResultado" ) {
		setDadosVisor( eval(getDadosVisor()) );
	} else {
		addDadosVisor( o.html() );
	}
}

function setDadosVisor(s) { VISOR_DA_CALCULADORA.val( s );}
function getDadosVisor() { return VISOR_DA_CALCULADORA.val(); }
function addDadosVisor(s) {	VISOR_DA_CALCULADORA.val( VISOR_DA_CALCULADORA.val() + s ); }

function setSintaxe(s) { LINHA_DE_SINTAXE.val(s); }

// - - - 

// Apos a carga de toda pagina HTML um evento (ready) e' enviado, e aqui 
// estamos dizendo qual funcao rodar quando este evento ocorrer.
$(document).ready( init );
