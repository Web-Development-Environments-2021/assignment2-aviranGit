

function setKeyToGame(){
   keyUp = ascii(document.getElementById("upKey").value);
   keyDown = ascii(document.getElementById("downKey").value);
   keyLeft = ascii(document.getElementById("leftKey").value);
   keyRight = ascii(document.getElementById("rightKey").value);
   //reset the input fields values
   document.getElementById("upKey").value='';
   document.getElementById("downKey").value='';
   document.getElementById("leftKey").value='';
   document.getElementById("rightKey").value='';
   alert("exit set key")
}

function ascii (a) { 
    let keyCode = a.charCodeAt(0);
    if(keyCode>90){
        keyCode= keyCode - 32;
        a='';
    }    
    return keyCode; 
}

function setDefault(){
    keyUp = 38;
    keyDown = 40;
    keyLeft = 37;
    keyRight = 39;
}

function setNumberOfBalls(){
    init_food_remain = Number($('#numOfBalls').val());
}

function setTimer(){
    timer = Number($('#timerInput').val());
}

function setBallsColor(){
    color5p = $('#color5Ball').val();
    color15p = $('#color15Ball').val();
    color25p =  $('#color25Ball').val();
}

function setNumOfmonsters(){
    var numMonster = document.getElementById("numMonster").value;
    numberOfMonnsers = numMonster;
}

//keys definition 

const usedKeys= [];
var lastUp;
var lastDown;
var lastRight;
var lastLeft;
function keyUpSet(){
    addEventListener('keydown',function up(e) {
        e.preventDefault();
        if(usedKeys.includes(e.keyCode)){
            alert("This key is already in use..");
        }
        else{
            if(lastUp != undefined){
                removeKeyFromArray(lastUp);
            }
            lastUp = e.keyCode;
            usedKeys.push(e.keyCode);
            keyUp = e.keyCode;
            lblKeyUpIn.value = e.key;
            document.getElementById('btnDown').disabled=false;
        }
        removeEventListener('keydown',up);
    })
}
function keyDownSet(){
    addEventListener('keydown',function down(e) {
        e.preventDefault();
        if(usedKeys.includes(e.keyCode)){
            alert("This key is already in use..");
        }
        else{    
            if(lastDown != undefined){
                removeKeyFromArray(lastDown);
            }
            lastDown = e.keyCode;     
            usedKeys.push(e.keyCode);
            keyDown = e.keyCode;
            lblKeyDownIn.value = e.key;
            document.getElementById('btnRight').disabled=false;

        }
        removeEventListener('keydown',down);
    })

}

function keyRightSet(){
    addEventListener('keydown', function right(e) {
        e.preventDefault();
        if(usedKeys.includes(e.keyCode)){
            alert("This key is already in use..");
        }
        else{
            if(lastRight != undefined){
                removeKeyFromArray(lastRight);
            }
            lastRight = e.keyCode;
            usedKeys.push(e.keyCode);
            keyRight = e.keyCode;
            lblKeyRightIn.value = e.key;
        }
        removeEventListener('keydown', right);
        document.getElementById('btnLeft').disabled=false;

    })
}
function keyLeftSet(){
    addEventListener('keydown',function left(e) {
        e.preventDefault();
        if(usedKeys.includes(e.keyCode)){
            alert("This key is already in use..");
        }
        else{
            if(lastLeft != undefined){
                removeKeyFromArray(lastLeft);
            }
            lastLeft = e.keyCode;
            usedKeys.push(e.keyCode);
            keyLeft = e.keyCode;
            lblKeyLeftIn.value = e.key;
        }
        removeEventListener('keydown', left);
    })
}

function removeKeyFromArray(item){
    for(var i in usedKeys){
        if(usedKeys[i]==item){
            usedKeys.splice(i,1);
            break;
        }
    }
}



function ApplyConfig(){
    setNumberOfBalls();
    setTimer();
    setBallsColor();
    setNumOfmonsters();
    displayGamePage();
}
