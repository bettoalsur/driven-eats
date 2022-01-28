
var prato = false;
var bebida = false;
var sobremesa = false;

// elemento clicado e funcoes

window.onclick = function (e) {

    var elemento = e.target;

    if (elemento.className == "opcao") {
        customizeSelection(elemento);
        selectedCategory(elemento);
        activeButton();
    } else if (elemento.parentNode.className == "opcao") {
        customizeSelection(elemento.parentNode);
        selectedCategory(elemento.parentNode);
        activeButton();
    } else if (elemento.className == "botao") {
        pressButton();
    } else if (elemento.parentNode.className == "botao") {
        pressButton();
    }
    

} 

// customizar selecao

function customizeSelection(elemento) {

    var pai = elemento.parentNode;
    var todos = pai.children;

    for (let i = 0 ; i < todos.length ; i++)
    {
        todos[i].style.borderColor = "white";
        todos[i].querySelector("ion-icon").style.display = "none";
    }

    elemento.style.borderColor = "#32B72F";
    elemento.querySelector("ion-icon").style.display = "inline";
}

// verificar selecao de categoria 

function selectedCategory(elemento){
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

function activeButton() {
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao").style.backgroundColor = "#32B72F";
        document.querySelector(".botao").innerHTML = "<p>Fechar pedido</p>";
    }
}

// gestionar pressao do botao

function pressButton() {
    if (prato && bebida && sobremesa) {
        document.querySelector(".botao").style.backgroundColor = "pink";
    }
}







