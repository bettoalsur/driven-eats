
window.onclick = function (e) {

    var elemento = e.target;

    if (elemento.className == "opcao") {
        customizeSelection(elemento);
    } else if (elemento.parentNode.className == "opcao") {
        customizeSelection(elemento.parentNode);
    }

} 

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









/* const elementos = document.querySelectorAll(".opcao"); // pega todos que se chamam opcao
var index; */


// for (let i=0 ; i < elementos.length ; i++)
// {
//     elementos[i].onclick = function (e) {
//         var elemento = e.target;
//         elemento.style.backgroundColor = "pink";
//         console.log(elemento.tagName);
//     } 
// }




/* var pratos = document.querySelector("#prato").children;

for (let i=0 ; i < pratos.length ; i++)
{
    pratos[i].style.borderColor = "white";
} */


