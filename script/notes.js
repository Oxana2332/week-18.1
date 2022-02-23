"use strict";
(function () {

    let notes = [];
    let Allnotes = [];

    document.addEventListener("DOMContentLoaded", function (evt) {
        let note = localStorage.getItem('note');
        if (note !== null) {
            Allnotes = JSON.parse(note);
        }
        if (Allnotes.length > 0) {
            for (let c of Allnotes) {
                document.getElementById("note").innerHTML += c;
            }
        }
    });

    function onBtnClick() {
        let text = document.getElementById("newNote").value;
        notes.push(text);

        let optionsString = '';
        let titleNew = document.getElementById('newname').value;
        let now = new Date();
        for (let note of notes) {
            let checknotes = note.replace(/ххх|xxx|viagra/gi, "***");
            optionsString = `<div><br><span style ="color:rgb(10, 104, 245);font-size: large;">${titleNew}<br></span>${checknotes}<p style="color: grey;font-size: small;">${now}</p><hr></div>`;
        }
        Allnotes.push(optionsString);

        if (localStorage.getItem('title') === null) {
            localStorage.setItem('title', titleNew);
        }
        localStorage.setItem('note', JSON.stringify(Allnotes));
        document.getElementById("note").innerHTML += optionsString;
    }

    document.querySelector('.button').addEventListener('click', onBtnClick);
})()