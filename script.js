window.onload = (function() {
    let birthday = new Date(2002, 10, 25);
    let date = new Date();
    let now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let age = Math.trunc((now - birthday) / (1000 * 86400 * 365));
    document.querySelector("#age").innerText = age;
}());