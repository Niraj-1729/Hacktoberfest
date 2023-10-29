let inpBase = document.getElementById("px-size");
let inpPx = document.getElementById("pixels");
let inpEM = document.getElementById("ems");

let pxToEm = () => {
    let inpBaseValue = inpBase.value;
    let pxValue = inpPx.value;

    if (pxValue.length != 0) {
        inpEM.value = pxValue / inpBaseValue;
    }
    else {
        inpEM.value = "";
    }
};

let emToPx = () => {
    let inpBaseValue = inpBase.value;
    let emValue = inpEM.value;

    if (emValue.length != 0) {
        inpPx.value = emValue * inpBaseValue;
    }
    else {
        inpPx.value = "";
    }
};

let calcEmPx = () => {
    if (inpBase.value.length != 0) {
        emToPx
    } 
    else {
        inpPx.value = "";
        inpEM.value = "";
    }
};

inpPx.oninput = pxToEm;
inpEM.oninput = emToPx;
inpBase.oninput = calcEmPx;