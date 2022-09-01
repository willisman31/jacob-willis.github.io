const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

function setLightAppearance() {
    document.getElementByTagName(body).style.background = "black";
    document.getElementByTagName(body).style.color = "white";
}

function setDarkAppearance() {
    document.getElementByTagName(body).style.background = "black";
    document.getElementByTagName(body).style.color = "white";
}

function setDefaultAppearance() {
    document.getElementByTagName(body).style.color = "black";
    document.getElementByClass(content).style.color = "chartreuse";
    document.getElementByTagName(h1).style.color = "aqua";
    document.getElementByTagName(h2).style.color = "aqua";
    document.getElementByTagName(h3).style.color = "aqua";
    document.getElementByTagName(h4).style.color = "aqua";
    document.getElementByTagName(h5).style.color = "aqua";
    document.getElementByTagName(h6).style.color = "aqua";
    document.getElementByTagName(a).style.color = "aqua";
}

function increaseFontSize() {
    
}

function setMobileMargins() {
    if (isMobile) {
        document.getElementByClass(content).style.padding = "0px 5px 5px 0px";
    }
}

function createAccessibilityWheel() {
    document.getElementByClass(accessibility).style.display = "block";
    document.getElementByClass(accessibility).style.align = "left";
}

