
var prato = false;
var bebida = false;
var sobremesa = false;

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

    if (pai.id == "prato"){
        prato = true;
    } else if (pai.id == "bebida"){
        bebida = true;
    } else if (pai.id == "sobremesa"){
        sobremesa = true;
    }
    
}

// verificar ativacao do botao

function activateButton() {
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao").style.backgroundColor = "#32B72F";
        document.querySelector(".botao").innerHTML = "<p>Fechar pedido</p>";
    }
}

// gestionar pressao do botao

function pressButton() {
    if (prato && bebida && sobremesa) {
        document.querySelector(".dimmer").style.display = "block";
    }
}







