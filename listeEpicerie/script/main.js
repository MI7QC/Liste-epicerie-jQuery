"use strict"

console.log(jQuery.fn.jquery);

// input bouton
let input = $("input").css("fontSize", "20px");

// recuperation du Ul via sont id liste
let liste = $("#liste").css({ "fontSize": "30px", "list-style-type": "none" });

//fonction insertion de text dans la liste.
input.on("keydown", function (evt) {
    if (evt.which == 13) { // Code ASCII de la touche Entrée

        // creation d'un li et text en lowerCase
        liste.append('<li id="liste-item"><a>' + input.val() + '</a></li>').last();

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


//fonction modifier un element li
$(document).ready(function () {
    $('#liste').on("click", "li", function () {

        //recuperation de la valeur du champ text input.
        let input = $('<input value="' + $(this).text() + '"/>');

        //remplace  this qui est un li en input
        $(this).replaceWith(input);
        //quand on click sur l'element le css est appliqué
        $(input).css({ "background-color": "darkcyan", "fontSize": "30px" })

        // si je clique sur un autre element celui deja cliquer revient a la normal
        $(input).focus();

        // permet de declancher cette evenement sur un element
        $(input).blur(function () {
            $(this).replaceWith('<li id="liste-item"><a>' + input.val() + '</a></li>');
        })

        //fonction modification du text dans la liste.
        input.on("keydown", function (evt) {
            if (evt.which == 13) {
                // array qui sert a insérer les text doublon
                let listForRemove = [];

                // replace this qui est un input en li
                $(this).replaceWith('<li id="liste-item"><a>' + input.val() + '</a></li>');

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
        })
    });
});

// fonction qui permet de suprimer un element li a l'aide de la touche CTRL + click gauche
$('#liste').on("click", "li", function (e) {
    if (e.ctrlKey)
        $(this).remove();
});



