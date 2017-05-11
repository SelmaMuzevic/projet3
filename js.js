 let t = ["title"];
 for (let i = 0; i < t.length; i++) {
     let title = document.querySelector("#nom");

     function ajouter(element) {
         donnees.push(element);
     }
 }

 function supprimer(element) {
     donnees.splice(element, 1);
 }

 function afficherListe(data) {
     let li = document.createElement("li");
     li.textContent = data;
     document.querySelector("#liste").appendChild(li);

 }
 let form = document.querySelector("form");
 let i = 0;
 form.addEventListener("submit", function(e) {
     e.preventDefault();
     ajouter(title);
     afficherliste(donnees[i]);
     i = i + 1;
 }); <