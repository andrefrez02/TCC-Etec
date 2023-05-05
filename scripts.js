function logon(guia = 2)
{
	if(guia = 2)
	{
		document.getElementById('container_criarConta').style.display = "none";
		document.getElementById('containerLogon').style.display = "grid";
		document.getElementById('section').style = "background-color:rgba(163, 181, 204, .9); animation-name: logonAnim; animation-duration: 1s;";
		document.getElementById('backgroundAside').style.color = "var(--color_primary_darker)";
		document.getElementById('p_buttonLogon').style.backgroundColor = "var(--color_primary_double)";
		document.getElementById('p_buttonLogon').style.height = "105%";
		document.getElementById('p_buttonLogon').style.transform = "translate(0px, -5%)";
		document.getElementById('p_criarConta').style.height = "100%";
		document.getElementById('p_criarConta').style.transform = "translate(0px, 0px)"
		document.getElementById('quadradoAjuda_login').style = "animation-name: logonAjuda; animation-duration: 1s; display: block;";
		document.getElementById('quadradoAjuda_cadastro').style.display = "none";
		if (visualViewport.height < 658 && visualViewport.width < 750) {
			document.getElementById('backgroundAside').style.overflowY = "scroll";
		} else if (visualViewport.height < 726 && visualViewport.width > 750) {
			document.getElementById('backgroundAside').style.overflowY = "scroll";
		}
		else {
			document.getElementById('backgroundAside').style.overflowY = "hidden"
		}
		window.scrollTo(0, 0)
		guia = 1;
	}
}
function criarConta(guia = 1)
{
	if(guia = 1)
	{
		document.getElementById('container_criarConta').style.display = "grid";
		document.getElementById('containerLogon').style.display = "none";
		document.getElementById('section').style = "background-color:rgba(0, 55, 76, .9); animation-name: cadastroAnim; animation-duration: 1s;";
		document.getElementById('backgroundAside').style.color = "var(--color_secondary_double)";
		document.getElementById('p_criarConta').style.backgroundColor = "var(--color_primary_darker)";
		document.getElementById('p_criarConta').style.height = "105%";
		document.getElementById('p_criarConta').style.transform = "translate(0px, -5%)";
		document.getElementById('p_buttonLogon').style.height = "100%";
		document.getElementById('p_buttonLogon').style.transform = "translate(0px, 0px)";
		document.getElementById('quadradoAjuda_login').style.display = "none";
		document.getElementById('quadradoAjuda_cadastro').style = "animation-name: cadastroAjuda; animation-duration: 1s; display: block;";
		if (visualViewport.height < 760) {
			document.getElementById('backgroundAside').style.overflowY = "scroll";
		} else { 
			document.getElementById('backgroundAside').style.overflowY = "hidden"
		}
		window.scrollTo(0, 0)
		guia = 2;
	}
}
function alertar()
{
	alert("Esse conteúdo ainda não foi produzido :(");
}

function openMenu(aberto = 2)
{
	var winsize = window.visualViewport.width;
	if ((winsize > 750)&&(aberto = 2)) {
		document.getElementById('bl_esq').style = "display: grid; animation-name: menuFechado; animation-duration: 1s; transform: translate(0, 0);";
		document.getElementById('bl_esq_menu').style = "display: grid; animation-name: menuAberto; animation-duration: 1.5s; transform: translate(-105%, 0);";
		document.getElementById('bl_dir').style = "display: grid; animation-name: menuFechado2; animation-duration: 1s; transform: translate(0, 0);";
		aberto = 1;
	} else if ((winsize < 750)&&(aberto = 2)) {
		window.scrollTo(0, 0)
		document.getElementById('html').style.overflowY = "hidden";
		document.getElementById('bl_esq').style.display = "grid";
		document.getElementById('bl_esq_menu').style = "display: none; z-index: 10; grid-area: e;";
		if (document.getElementById('checkPage').innerHTML === "perfil"){
			document.getElementById('dropbtn').style.display = "none";
		}
		aberto = 1;
	}
	document.getElementById('bl_esq_menu').setAttribute('onclick', 'closeMenu(aberto = 1)');
}

function closeMenu(aberto = 1)
{
	var winsize = window.visualViewport.width;
	if ((winsize > 750)&&(aberto = 1)) {
		document.getElementById('bl_esq').style = "display: grid; animation-name: menuAberto; animation-duration: 1s; transform: translate(-105%, 0);";
		document.getElementById('bl_esq_menu').style = "display: grid; animation-name: menuFechado; animation-duration: 1.5s; transform: translate(0, 0);";
		document.getElementById('bl_dir').style = "display: grid; animation-name: menuAberto2; animation-duration: 1s; transform: translate(105%, 0);";
		aberto = 2;
	} else if ((winsize < 750)&&(aberto = 1)) {
		window.scrollTo(0, 0)
		document.getElementById('html').style.overflowY = "scroll";
		document.getElementById('bl_esq').style.display = "none";
		document.getElementById('bl_esq_menu').style = "display: initial;";
		if (document.getElementById('checkPage').innerHTML === "perfil"){
			document.getElementById('dropbtn').style.display = "grid";
		}
		aberto = 2;
	}
	document.getElementById('bl_esq_menu').setAttribute('onclick', 'openMenu(aberto = 2)');
}
visualViewport.addEventListener("resize", winResize);

function winResize(){
	if (visualViewport.width > 750 && document.getElementById('checkPage').innerHTML !== "index") {
		if (document.getElementById('checkPage').innerHTML === "perfil") {
			document.getElementById('body').onresize = document.getElementById('dropbtn').style.display = "grid";
		}
		document.getElementById('body').onresize = document.getElementById('bl_esq_menu').style = "display: none; z-index: 10; grid-area: e;";
		document.getElementById('body').onresize = document.getElementById('bl_esq').style = "display: grid; animation-name: menuFechado; animation-duration: 0s; transform: translate(0, 0);";
		document.getElementById('body').onresize = document.getElementById('bl_dir').style = "display: grid;";
		document.getElementById('body').onresize = document.getElementById('bl_esq_menu').setAttribute('onclick', 'closeMenu(aberto = 1)');
		document.getElementById('html').style.overflowY = "scroll";
		document.getElementById('body').style.overflowY = "hidden";
	} else if (visualViewport.width < 750 && document.getElementById('checkPage').innerHTML !== "index") {
		if (document.getElementById('checkPage').innerHTML === "perfil"){
			document.getElementById('body').onresize = document.getElementById('dropbtn').style.display = "grid";
		}
		document.getElementById('body').onresize = document.getElementById('bl_esq_menu').style = "display: initial; animation-duration: 0s;";
		document.getElementById('body').onresize = document.getElementById('bl_dir').style = "display: none; animation-duration: 0s;";
		document.getElementById('body').onresize = document.getElementById('bl_esq').style = "display: none; animation-duration: 0s;";
		document.getElementById('body').onresize = document.getElementById('bl_esq_menu').setAttribute('onclick', 'openMenu(aberto = 2)');
		document.getElementById('body').style.overflowY = "hidden";
		document.getElementById('html').style.overflowY = "scroll";
	}
	if (visualViewport.width >= 834 && document.getElementById('checkPage').innerHTML === "perfil") {
		document.getElementById('nasc').innerHTML = '<label id="lbl_data_nasc">Data de nascimento</label>';
	} else if (visualViewport.width < 834 && document.getElementById('checkPage').innerHTML === "perfil"){
		document.getElementById('nasc').innerHTML = '<label id="lbl_data_nasc">Data de nasc.</label>';
	}
	if (document.getElementById('checkPage').innerHTML === "index") {
		if (visualViewport.height < 658 && visualViewport.width < 750) {
			document.getElementById('backgroundAside').style.overflowY = "scroll";
		} else if (visualViewport.height < 726 && visualViewport.width > 750) {
			document.getElementById('backgroundAside').style.overflowY = "scroll";
		}
		else {
			document.getElementById('backgroundAside').style.overflowY = "hidden"
		}
	}
}

var redirectToIndex = 0;
function goToLogin() {
	window.location.href = "index.html";
	if (redirectToIndex === 2) {
		window.onbeforeunload = document.cookie = "redirectToCadastro";
	}
	redirectToIndex = 0;
}

window.addEventListener("load", pageChanged);

function pageChanged() {
	if (document.cookie === "redirectToCadastro") {
		criarConta();
	}
	document.cookie = "0";
}

window.addEventListener("load", tamanhoLinhas);
window.addEventListener("resize", tamanhoLinhas);
function tamanhoLinhas() {
	if (document.getElementById('checkPage').innerHTML === "perfil"){
		for (var acrescimo = 1; acrescimo <= 3; acrescimo++) {
			var tamTexto = document.getElementById('h' + acrescimo).innerHTML;
			document.getElementById('l' + acrescimo).style.width = (tamTexto.length) + "rem";
		}
		if (window.visualViewport.width > 750 && window.visualViewport.width < 816) {
			document.getElementById('l2').style.width = "12rem";
		}
	}
	winResize();
}

// JAVA SCRIPTS IMPORTADOS //

function abrefecha(elemento/*<--agora recebe o id do elemento a mostrar/esconder*/) {
	let ex = document.getElementById(elemento); //buscar elemento ao html com base no id

	if (ex.style.display == "none") {
		var tamanhoDropbtn = document.getElementById('dropbtn_tamanho').offsetWidth;
		ex.style = "display: grid; width: calc(" + tamanhoDropbtn + "px - 12px);";
	} else {
		ex.style.display = "none"; //agora no else volta a aplicar none
	}
}

// SCRIPTS PARA DEBUG //

/*
ESSA FUNÇÃO É APENAS PARA DEBUG

window.addEventListener("mousedown", teste);
function teste() {
	openMenu(aberto = 2);
	console.log(window.visualViewport.height)
}
*/

// "SHIFT R" PARA ABRIR O MENU DE DESENVOLVEDOR //

var onOff = 0;
var rotCor = 100;
var timer;
var novoX = 0;
var novoY = 0;

window.addEventListener('', debug)
document.addEventListener('keydown', onKeyPress)
document.dispatchEvent(new KeyboardEvent('keydown', {
	key: 'R'
}))

function onKeyPress(e) {
	if (e.key === 'R') {
		debug();
	}
}

function debug() {
	if (onOff < 1) {
		document.getElementById('debug').style = "display: block;";
		document.getElementById('debug').innerHTML = "<p><a data-attr='title'>DEBUG</a></p>"+
		"<p><a href='feed.html'>FEED</a></p>"+
		"<p><a href='pagina_perfil.html'>PERFIL</a></p>"+
		"<p><a onclick='goToLogin(redirectToIndex = 1)'>LOGIN</a></p>"+
		"<p><a onclick='goToLogin(redirectToIndex = 2)'>CADASTRO</a></p>";
		timer = setInterval(changeColor, 100);
		onOff = 1;
		rotCor = 1;
	} else {
		document.getElementById('debug').style = "display: none;";
		document.getElementById('debug').innerHTML = "";
		stopTimer();
		onOff = 0;
		rotCor = 0;
	}
}
var i = 0;
function changeColor() {
	if (rotCor > 0) {
		i = i + 10;
		document.getElementById('debug').style = "left: " + novoX + "px; top: " + novoY + "px; filter: hue-rotate(" + i + "deg);";
		if (i > 360) { 
			i = 0;
		}
	} else {
		i = 0;
	}
}

function stopTimer() {
	clearInterval(timer);
}

window.addEventListener('load', function draggDebug() {
	var contextmenu = document.getElementById('debug');
	var initX, initY, mousePressX, mousePressY;

	contextmenu.addEventListener('mousedown', function(event) {

		initX = this.offsetLeft;
		initY = this.offsetTop;
		mousePressX = event.clientX;
		mousePressY = event.clientY;

		this.addEventListener('mousemove', repositionElement, false);

		window.addEventListener('mouseup', function() {
		contextmenu.removeEventListener('mousemove', repositionElement, false);
		}, false);

	}, false);

	function repositionElement(event) {
		this.style.left = initX + event.clientX - mousePressX + 'px';
		this.style.top = initY + event.clientY - mousePressY + 'px';
		stopTimer();
		novoX =	event.clientX - 70;
		novoY = event.clientY - 100;
	}
});

var toquesqnt = 0;
var indiceTemp = 0;
var timer2;

this.addEventListener('touchend', function trezeclicks(){
	console.log(toquesqnt + "teste");
	toquesqnt++
	timer2Start();
	timer2 = setInterval(Restart, 100);
	if (toquesqnt === 4) {
		debug();
	}
})	
function Restart(){
	indiceTemp++
	if (indiceTemp >= 10) {
		clearInterval(timer2);
		toquesqnt = 0;
		indiceTemp = 0;
	}
}
function timer2Start(){
	if (indiceTemp === 0){
		Restart();
	} else {
		clearInterval(timer2);
		Restart();
	}
}