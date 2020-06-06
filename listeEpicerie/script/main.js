"use strict"

console.log(jQuery.fn.jquery);

// input bouton
let input = $("input").css("fontSize", "20px");
console.log(input);

// recuperation du Ul via sont id liste
let liste = $("#liste").css({ "fontSize": "30px", "list-style-type": "none" });
console.log(liste);


//fonction insertion de text dans la liste.
input.on("keydown", function (evt) {
    if (evt.which == 13) { // Code ASCII de la touche Entrée

        // creation d'un li et text en lowerCase
        liste.append('<li><a>' + input.val().toLowerCase() + '</a></li>').last();

        // array qui sert a insérer les text doublon
        let listForRemove = [];

        // function qui boucle tous les li et verifie si le champ text inséré est deja present dans la liste, si oui il est supprimé
        $('#liste li').each(function () {
            if (jQuery.inArray(this.innerHTML, listForRemove) == -1) {
                listForRemove.push(this.innerHTML);
            }
            else {
                $(this).remove();
            }
        });
    }
});


//fonction qui est pas terminé  modification d'un li (text a)
$(document).ready(function () {
    $('#liste').on("click", "li", function () {
        $(this).css({ "border-style": "solid", "border-color": "coral" });
        console.log($(this).text());

    });
});




// fonction qui permet de suprimer un element li a l'aide de la touche CTRL + click gauche
$('#liste').on("click", "li", function (e) {
    if (e.ctrlKey)
        $(this).css({ "border-style": "solid", "border-color": "coral" }).remove();

});








// sert a insérer la valeur dans le champ text, va etre utile quand on va clicker sur un li
// let zone_saisie = $("input[name='zone_saisie']").val("testest");
// console.log(zone_saisie);
// liste.children("li").filter(function (i, elem) {
//     return $(elem).text().toLowerCase() === input.text().trim().toLowerCase();
// }.length === 0);



