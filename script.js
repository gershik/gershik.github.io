function openSpoiler(whichIsOpen) {
    document.querySelector("#links").style.display = "none";
    document.querySelector(whichIsOpen).style.display = "block";
}

function goBack(whichIsOpen) {
    document.querySelector("#links").style.display = "block";
    document.querySelector(whichIsOpen).style.display = "none";

}

(function() {
    let birthday = new Date(2002, 10, 25);
    let date = new Date();
    let now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let age = Math.trunc((now - birthday) / (1000 * 86400 * 365));
    document.querySelector("#age").innerText = age;
}());