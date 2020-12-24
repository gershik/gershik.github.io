let opened = false;
function transitionend() {
    document.querySelector("#links > ul").style.height = "0";
    document.querySelector("#links > ul").style.overflow = "hidden";
    opened = false;
    document.querySelector("#links > ul").removeEventListener("transitionend", transitionend, true);
};

function openSpoiler() {
    if (!opened) {
        opened = true;
        document.querySelector("#links > ul").style.opacity = "1";
        document.querySelector("#links > ul").style.height = "auto";
        document.querySelector("#links > ul").style.overflow = "visible";
        document.querySelector("#links > li:nth-child(6) > a").href = "javascript:closeSpoiler()";
    }
};

function closeSpoiler() {
    if (opened) {
        document.querySelector("#links > ul").style.opacity = "0";
        document.querySelector("#links > ul").addEventListener("transitionend", transitionend, true);
        document.querySelector("#links > li:nth-child(6) > a").href = "javascript:openSpoiler()";
    }
};

(function() {
    let birthday = new Date(2002, 10, 25);
    let date = new Date();
    let now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let age = Math.trunc((now - birthday) / (1000 * 86400 * 365));
    document.querySelector("#age").innerText = age;
}());