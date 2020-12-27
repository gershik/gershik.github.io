let openedTelegram = false;
let openedDonate = false;
function openTelegram() {
    if (!openedTelegram) {
        openedTelegram = true;
        document.querySelector("#telegram").style.opacity = "1";
        document.querySelector("#telegram").style.height = "auto";
        document.querySelector("#telegram").style.overflow = "visible";
        document.querySelector("#telegramSpoiler > a").href = "javascript:closeTelegram()";
    }
};

function closeTelegram() {
    if (openedTelegram) {
        openedTelegram = false;
        document.querySelector("#telegram").style.opacity = "0";
        setTimeout(() => { 
            document.querySelector("#telegram").style.height = "0";
            document.querySelector("#telegram").style.overflow = "hidden"; 
        }, 300);
        document.querySelector("#telegramSpoiler > a").href = "javascript:openTelegram()";
    }
};

function openDonate() {
    if (!openedDonate) {
        openedDonate = true;
        document.querySelector("#donate").style.opacity = "1";
        document.querySelector("#donate").style.height = "auto";
        document.querySelector("#donate").style.overflow = "visible";
        document.querySelector("#donateSpoiler > a").href = "javascript:closeDonate()";
    }
};

function closeDonate() {
    if (openedDonate) {
        openedDonate = false;
        document.querySelector("#donate").style.opacity = "0";
        setTimeout(() => { 
            document.querySelector("#donate").style.height = "0";
            document.querySelector("#donate").style.overflow = "hidden";  
        }, 300);
        document.querySelector("#donateSpoiler > a").href = "javascript:openDonate()";
    }
};

(function() {
    let birthday = new Date(2002, 10, 25);
    let date = new Date();
    let now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let age = Math.trunc((now - birthday) / (1000 * 86400 * 365));
    document.querySelector("#age").innerText = age;
}());