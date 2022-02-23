"use strict";
(function () {
    let comments = [];
    let Allcomments = [];

document.addEventListener("DOMContentLoaded", function(evt) {
    let authorRemember = localStorage.getItem('name');
    let srcRemember = localStorage.getItem('src');
    let commentRemember = localStorage.getItem('comment');

    if (commentRemember !== null){
    Allcomments = JSON.parse(commentRemember);
    }
    if (authorRemember !== null){
        document.querySelector("#author").value = authorRemember;
    }
    if (srcRemember !== null) {
    document.getElementById("img").value = srcRemember; 
    }

    if (Allcomments.length > 0) {
    for (let c of Allcomments) {
        document.getElementById("container").innerHTML += c;
    }
    }
    })

    function onBtnClick() {
        let optionsString = "";
        let author = document.querySelector("#author").value;
        let comment = document.querySelector("#comment").value;
        let src = document.querySelector("#img").value;
        comments.push(comment);
        for (let comment of comments) {
            let clearComment = comment.replace(/ххх|xxx|viagra/gi, "***")
            optionsString +=`<div><span><img src="${src}" height="50px"/</span><span style ="color:  rgb(0, 153, 255);     
            font-size: large;">${author}:</span> ${clearComment}<hr></div>`;
        }
        Allcomments.push(optionsString);

        if (localStorage.getItem('name') === null){
            localStorage.setItem('name', author)
        }
        if (localStorage.getItem('src') === null){
            localStorage.setItem('src', src)
        }

        localStorage.setItem('comment', JSON.stringify(Allcomments));
        document.querySelector("#container").innerHTML = optionsString;
        location.href=location.href;
    }
    document.querySelector('.button').addEventListener('click', onBtnClick);
})()