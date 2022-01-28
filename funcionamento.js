
var prato = new produto();
var bebida = new produto();
var sobremesa = new produto();

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
    }
    
} 

// customizar selecao

function customizeSelection(elemento) {

    var irmaos = elemento.parentNode.children;

    for (let i = 0 ; i < irmaos.length ; i++)
    {
        if (irmaos[i] != elemento){
            irmaos[i].style.borderColor = "white";
            irmaos[i].querySelector("ion-icon").style.display = "none";
        } else {
            elemento.style.borderColor = "#32B72F";
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
        var val = [];

        var aux = prato.valor.split(' '); val[0] = aux[1];
        var aux = bebida.valor.split(' '); val[1] = aux[1];
        var aux = sobremesa.valor.split(' '); val[2] = aux[1];

        var m_vals = "";

        for (let i = 0 ; i < 3 ; i ++)
        {
            m_vals += ("<p>"+val[i]+"</p>");

            var aux = val[i].split(',');
            var aux2 = parseFloat( aux[0] + aux[1] )/100;
            VT += aux2;
        }

        VT = VT.toFixed(2).split('.');

        m_vals += "<p>R$ "+VT[0]+","+VT[1]+"</p>";

        document.querySelector(".produtos").innerHTML = "<p>"+prato.nome+"</p><p>"+bebida.nome+"</p><p>"+sobremesa.nome+"</p><p>TOTAL</p>";
        document.querySelector(".valores").innerHTML = m_vals;

    }
}

// abortar pedido

function cancelOrder() {
    document.querySelector(".dimmer").style.display = "none";
    document.querySelector(".confirmar-pedido").classList.remove("mostrar");
    document.querySelector(".confirmar-pedido").classList.add("ocultar");
}







