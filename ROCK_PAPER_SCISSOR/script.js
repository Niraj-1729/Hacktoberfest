var audio = new Audio("grateful.mp3");
audio.play();
audio.loop = true;



let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let urwin = 0;
let cpuwin = 0;

const cpur = () => {
    let random = Math.floor(Math.random() * 4);

    if (random == 1) {

        document.getElementById("img4").src = "img/paper.png";
        document.getElementById("rslt").innerText = "CPU WINS";
        cpuwin++;

    } else if (random == 2) {

        document.getElementById("img4").src = "img/rock.png";
        document.getElementById("rslt").innerText = "DRAW";

    } else if (random == 3) {

        document.getElementById("img4").src = "img/scissor.png";
        document.getElementById("rslt").innerText = "YOU WIN";
        urwin++;

    }

}
const cpup = () => {
    let random = Math.floor(Math.random() * 4);

    if (random == 1) {

        document.getElementById("img4").src = "img/paper.png";
        document.getElementById("rslt").innerText = "DRAW";

    } else if (random == 2) {

        document.getElementById("img4").src = "img/rock.png";
        document.getElementById("rslt").innerText = "YOU WIN";
        urwin++;

    } else if (random == 3) {

        document.getElementById("img4").src = "img/scissor.png";
        document.getElementById("rslt").innerText = "CPU WINS";
        cpuwin++;

    }
}

const cpus = () => {

    let random = Math.floor(Math.random() * 4);

    if (random == 1) {

        document.getElementById("img4").src = "img/paper.png";
        document.getElementById("rslt").innerText = "YOU WIN";
        urwin++;

    } else if (random == 2) {

        document.getElementById("img4").src = "img/rock.png";
        document.getElementById("rslt").innerText = "CPU WINS";
        cpuwin++;

    } else if (random == 3) {

        document.getElementById("img4").src = "img/scissor.png";
        document.getElementById("rslt").innerText = "DRAW";

    }
}

const show = () => {

    document.getElementById("urw").innerHTML = urwin;
    document.getElementById("cpuw").innerHTML = cpuwin;

}

const fr = () => {

    document.getElementById("img1").style.visibility = "visible";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "hidden";

    cpur();
    show();

}
const fp = () => {

    document.getElementById("img1").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "visible";
    document.getElementById("img3").style.visibility = "hidden";

    cpup();
    show();

}
const fs = () => {

    document.getElementById("img1").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "visible";

    cpus();
    show();

}








// rock.addEventListener("click",fr());
// paper.addEventListener("click",fp());
// scissor.addEventListener("click",fs());
