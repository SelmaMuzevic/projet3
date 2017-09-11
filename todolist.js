"use strict";


let form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    let title = document.querySelector("#title").value;
    let comment = document.querySelector("#content").value;
    let liste = [title, comment];
    let h2 = document.createElement("h2");
    h2.innerHTML = liste[0];
    document.querySelector(".liste").appendChild(h2);
    let p = document.createElement("p");
    p.innerHTML = liste[1];
    document.querySelector(".liste").appendChild(p)
    let button = document.createElement("button");
    button.textContent = "supprimer";
    document.querySelector(".liste").appendChild(button);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    document.querySelector(".liste").appendChild(checkbox);
    p.addEventListener("dblclick", function() {
        p.contentEditable = "true";
    });
    h2.addEventListener("dblclick", function() {
        h2.contentEditable = "true";
    });
    button.addEventListener("click", function() {
        let div = document.querySelector('.liste');
        div.removeChild(h2);
        div.removeChild(p);
        div.removeChild(button);
        div.removeChild(checkbox);
        //autre possibilité : p.remove(); h2.remove();
    });
    e.preventDefault();
});