
var prato = new produto();
var bebida = new produto();
var sobremesa = new produto();
var mensagem = "";
var nome;
var endereco;

// elemento clicado e funcoes

window.onclick = function (e) {

    var elemento = e.target;

    if (elemento.className == "opcao") {
        customizeSelection(elemento);
        selectCategory(elemento);
        activateButton();
    } else if (elemento.parentNode.className == "opcao") {
        customizeSelection(elemento.parentNode);
        selectCategory(elemento.parentNode);
        activateButton();
    } else if (elemento.className == "botao" || elemento.parentNode.className == "botao") {
        pressButton();
    } else if (elemento.className == "abortar-pedido") {
        cancelOrder();
    } else if (elemento.className == "enviar-pedido") {
        sendOrder();
    }
    
} 

// customizar selecao

function customizeSelection(elemento) {

    var irmaos = elemento.parentNode.children;

    for (let i = 0 ; i < irmaos.length ; i++)
    {
        if (irmaos[i] != elemento){
            irmaos[i].style.borderColor = "white";
            irmaos[i].style.filter = "none";
            irmaos[i].querySelector("ion-icon").style.display = "none";
        } else {
            elemento.style.borderColor = "#32B72F";
            elemento.style.filter = "drop-shadow(0px 1px 2px rgb(75, 75, 75))";
            elemento.querySelector("ion-icon").style.display = "inline";
        }
    }

}

// verificar selecao de categoria 

function selectCategory(elemento){

    var pai = elemento.parentNode;
    var info = elemento.children;

    if (pai.id == "prato"){
        prato.estado = true;
        prato.nome = info[1].innerHTML;
        prato.valor = info[3].innerHTML;
    } else if (pai.id == "bebida"){
        bebida.estado = true;
        bebida.nome = info[1].innerHTML;
        bebida.valor = info[3].innerHTML;
    } else if (pai.id == "sobremesa"){
        sobremesa.estado = true;
        sobremesa.nome = info[1].innerHTML;
        sobremesa.valor = info[3].innerHTML;
    }
    
}

// verificar ativacao do botao

function activateButton() {
    if (prato.estado && bebida.estado && sobremesa.estado) {
        document.querySelector(".botao").style.backgroundColor = "#32B72F";
        document.querySelector(".botao").innerHTML = "<p>Fechar pedido</p>";
    }
}

// gestionar pressao do botao

function pressButton() {
    if (prato.estado && bebida.estado && sobremesa.estado) {
        document.querySelector(".dimmer").style.display = "block";
        document.querySelector(".confirmar-pedido").classList.remove("ocultar");
        document.querySelector(".confirmar-pedido").classList.add("mostrar");

        var VT = 0.0; // Valor total
        var vals = [];

        var aux = prato.valor.split(' '); vals[0] = aux[1];
        var aux = bebida.valor.split(' '); vals[1] = aux[1];
        var aux = sobremesa.valor.split(' '); vals[2] = aux[1];

        var m_vals = "";

        for (let i = 0 ; i < 3 ; i ++)
        {
            m_vals += ("<p>"+vals[i]+"</p>");

            var aux = vals[i].split(',');
            var aux2 = parseFloat( aux[0] + aux[1] )/100;
            VT += aux2;
        }

        VT = VT.toFixed(2).split('.');

        m_vals += "<p>R$ "+VT[0]+","+VT[1]+"</p>";

        document.querySelector(".produtos").innerHTML = "<p>"+prato.nome+"</p><p>"+bebida.nome+"</p><p>"+sobremesa.nome+"</p><p>TOTAL</p>";
        document.querySelector(".valores").innerHTML = m_vals;

        mensagem = "Ol??, gostaria de fazer o pedido:\n";
        mensagem += ("- Prato: "+ prato.nome + "\n");
        mensagem += ("- Bebida: "+ bebida.nome + "\n");
        mensagem += ("- Sobremesa: "+ sobremesa.nome + "\n");
        mensagem += ( "Total: R$ "+VT[0]+"."+VT[1] );

    }
}

// abortar pedido

function cancelOrder() {
    document.querySelector(".dimmer").style.display = "none";
    document.querySelector(".confirmar-pedido").classList.remove("mostrar");
    document.querySelector(".confirmar-pedido").classList.add("ocultar");
}

// enviar pedido

function sendOrder() {

    while (nome==null){
        nome = prompt("Por favor, digite seu nome.")
    }
    
    while (endereco==null){
        endereco = prompt("agora, seu endere??o.")
    }

    document.querySelector(".dimmer").style.display = "none";
    document.querySelector(".confirmar-pedido").classList.remove("mostrar");
    document.querySelector(".confirmar-pedido").classList.add("ocultar");

    mensagem += ("\n\n");
    mensagem += ("Nome: "+nome +"\n");
    mensagem += ("Endere??o: "+endereco);

    var wapMes = encodeURIComponent(mensagem);

    var prep = "https://wa.me/+5511994253957?text=";
    window.open(prep + wapMes);
    // console.log(mensagem);
    // alert(mensagem);
}







