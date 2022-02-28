const header = document.getElementById("Head")
const header1 = document.getElementById("Head1")
const header2 = document.getElementById("Head2")
const header3 = document.getElementById("Head3")
const header4 = document.getElementById("Head4")

header.classList.add("colorLight");
header1.classList.add("colorLight");
header2.classList.add("colorLight");
header3.classList.add("colorLight");
header4.classList.add("colorLight");

function toggleText1(){
    let x = document.getElementById("HiddenText1");
    if (x.style.display === "block") {
        x.style.display = "none";
        header1.classList.add("colorLight");
        header1.classList.remove("colorDark");
        
    } else {
        x.style.display = "block";
        header1.classList.add("colorDark")
        header1.classList.remove("colorLight");
    }
};
function toggleText2(){
    let x = document.getElementById("HiddenText2");
    if (x.style.display === "block") {
        x.style.display = "none";
        header2.classList.add("colorLight");
        header2.classList.remove("colorDark");
    } else {
        x.style.display = "block";
        header2.classList.add("colorDark")
        header2.classList.remove("colorLight");
    }
};

function toggleText3(){
    let x = document.getElementById("HiddenText3");
    if (x.style.display === "block") {
        x.style.display = "none";
        header3.classList.add("colorLight");
        header3.classList.remove("colorDark");
    } else {
        x.style.display = "block";
        header3.classList.add("colorDark")
        header3.classList.remove("colorLight");
    }
    
};
function toggleText4(){
    let x = document.getElementById("HiddenText4");
    if (x.style.display == "block") {
        x.style.display = "none";
        header4.classList.add("colorLight");
        header4.classList.remove("colorDark");
    } else  {
        x.style.display = "block";
        header4.classList.add("colorDark")
        header4.classList.remove("colorLight");
    }
};

function toggleText(){
    let x = document.getElementById("HidenText");
    if (x.style.display == "block") {
        x.style.display = "none";
        header.classList.add("colorLight");
        header.classList.remove("colorDark");
    } else  {
        x.style.display = "block";
        header.classList.add("colorDark")
        header.classList.remove("colorLight");
    }
};

let rotateArrow = () => {
    const pageShowBtn =  document.getElementById("Arrow");
    pageShowBtn.classList.toggle('rotate');
};
let rotateArrow1 = () => {
    const pageShowBtn1 = document.getElementById("Arrow1");
    pageShowBtn1.classList.toggle('rotate');
};
let rotateArrow2 = () => {
    const pageShowBtn2 = document.getElementById("Arrow2");
    pageShowBtn2.classList.toggle('rotate');
};
let rotateArrow3 = () => {
    const pageShowBtn3 = document.getElementById("Arrow3");
    pageShowBtn3.classList.toggle('rotate');
};
let rotateArrow4 = () => {
    const pageShowBtn4 = document.getElementById("Arrow4");
    pageShowBtn4.classList.toggle('rotate');
};


header.addEventListener("click", rotateArrow);
header1.addEventListener("click", rotateArrow1);
header2.addEventListener("click", rotateArrow2);
header3.addEventListener("click", rotateArrow3);
header4.addEventListener("click", rotateArrow4);


