let resetbtn = document.querySelector(".reset");
let turntheturn = document.getElementById("turn-the-turn");
let turn0 = true;

function btn1() {
        if (turn0) {
                box1.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box1.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        displaybutton();
        checkequal1();
        checkequal4();
        checkequal8();
        checkvalues();
        box1.disabled = true;
}
function btn2() {
        if (turn0) {
                box2.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box2.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        displaybutton();
        checkequal1();
        checkequal5();
        checkvalues();
        box2.disabled = true;
}
function btn3() {
        if (turn0) {
                box3.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box3.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box3.disabled = true;
        displaybutton();
        checkequal1();
        checkequal6();
        checkequal7();
        checkvalues();
}
function btn4() {
        if (turn0) {
                box4.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box4.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box4.disabled = true;
        displaybutton();
        checkequal2();
        checkequal4();
        checkvalues();
}
function btn5() {
        if (turn0) {
                box5.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box5.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box5.disabled = true;
        displaybutton();
        checkequal2();
        checkequal5();
        checkequal7();
        checkequal8();
        checkvalues();
}
function btn6() {
        if (turn0) {
                box6.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box6.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box6.disabled = true;
        displaybutton();
        checkequal2();
        checkequal6();
        checkvalues();
}
function btn7() {
        if (turn0) {
                box7.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box7.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box7.disabled = true;
        displaybutton();
        checkequal3();
        checkequal4();
        checkequal7();
        checkvalues();
}
function btn8() {
        if (turn0) {
                box8.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box8.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box8.disabled = true;
        displaybutton();
        checkequal3();
        checkequal5();
        checkvalues();
}
function btn9() {
        if (turn0) {
                box9.innerHTML = "0";
                turntheturn.innerHTML = "Player X Turn";
                turn0 = false;
        } else {
                box9.innerHTML = "X";
                turntheturn.innerHTML = "Player 0 Turn";
                turn0 = true;
        }
        box9.disabled = true;
        displaybutton();
        checkequal3();
        checkequal6();
        checkequal8();
        checkvalues();
}


const checkvalues = () => {
        if(!winnerfound){
                if (box1.innerHTML != "" && box2.innerHTML != "" && box3.innerHTML != "" && box4.innerHTML != "" && box5.innerHTML != "" && box6.innerHTML != "" && box7.innerHTML != "" && box8.innerHTML != "" && box9.innerHTML != "") {
                        console.log("Winner not Found")
                        turntheturn.innerHTML = "No one wins";
                        document.getElementById("reset").innerHTML = "New Game";

                }
        }        
}



let winnerfound = false;



const checkequal1 = () => {
        // console.log("not null");
        if (box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML) {
                // console.log("Winner", box1.innerHTML);
                turntheturn.innerHTML = "Winner is " + box1.innerHTML;
                box1.style.color = "red";
                box2.style.color = "red";
                box3.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal2 = () => {
        if (box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML) {
                // console.log("Winner", box4.innerHTML);
                turntheturn.innerHTML = "Winner is " + box4.innerHTML;
                box4.style.color = "red";
                box5.style.color = "red";
                box6.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal3 = () => {
        if (box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML) {
                // console.log("Winner", box7.innerHTML);
                turntheturn.innerHTML = "Winner is " + box7.innerHTML;
                box7.style.color = "red";
                box8.style.color = "red";
                box9.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal4 = () => {
        if (box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML) {
                // console.log("Winner", box1.innerHTML);
                turntheturn.innerHTML = "Winner is " + box1.innerHTML;
                box1.style.color = "red";
                box4.style.color = "red";
                box7.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal5 = () => {
        if (box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML) {
                // console.log("Winner", box2.innerHTML);
                turntheturn.innerHTML = "Winner is " + box2.innerHTML;
                box2.style.color = "red";
                box5.style.color = "red";
                box8.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal6 = () => {
        if (box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML) {
                // console.log("Winner", box3.innerHTML);
                turntheturn.innerHTML = "Winner is " + box3.innerHTML;
                box3.style.color = "red";
                box6.style.color = "red";
                box9.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal7 = () => {
        if (box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML) {
                // console.log("Winner", box3.innerHTML);
                turntheturn.innerHTML = "Winner is " + box3.innerHTML;
                box3.style.color = "red";
                box5.style.color = "red";
                box7.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}
const checkequal8 = () => {
        if (box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML) {
                // console.log("Winner", box1.innerHTML);
                turntheturn.innerHTML = "Winner is " + box1.innerHTML;
                box1.style.color = "red";
                box5.style.color = "red";
                box9.style.color = "red";
                winnerfound = true;
                boxdisabled();
        }
}

const boxdisabled = () => {
        box1.disabled = true;
        box2.disabled = true;
        box3.disabled = true;
        box4.disabled = true;
        box5.disabled = true;
        box6.disabled = true;
        box7.disabled = true;
        box8.disabled = true;
        box9.disabled = true;
        document.getElementById("reset").innerHTML = "New Game";
}

const reloadpage = () => {
        location.reload();
}

const displaybutton = () => {
        document.getElementById("reset").style.display = "block";
}