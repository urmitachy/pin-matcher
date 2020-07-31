document.getElementById('pinInput').value = "";  //default value for random pin input.
document.getElementById('screen').value = "";    //default value for submit pin screen.
let attempt  = 3; //maximum 3 attempts for pin submission.


function hideStatus() { // Status hide when document load
    wrongPin.style.display = 'none';
    rightPin.style.display = 'none';
    randomInputField.style.backgroundColor = '#3D4153';
}

window.onload = hideStatus;



// Function to generate random numbers.
function randomNumber(){
    let num = 1000 + Math.round(Math.random() * 9000);
    document.getElementById('pinInput').value = num;
}

// Function to show numbers on screen.
function numPad(num){
    document.getElementById('screen').value += num;
}

// Function for clear all numbers from screen.
function allClear(){
    document.getElementById('screen').value = '';
}

// Function for deleting numbers one by one from screen.
function backSpace(){
    let screen = document.getElementById('screen').value;
    let backSpace = screen.slice(0, screen.length - 1 );
    document.getElementById('screen').value = backSpace;
}

// Function for submit button.
function submit(){
    const randomPin = document.getElementById('pinInput').value;
    const screen = document.getElementById('screen').value;

    if( randomPin == screen && randomPin != '' && screen != '' ){
        message('rightPin', 'wrongPin');
        document.getElementById('pinInput').value = ""; 
        document.getElementById('screen').value = "";
        
    }
    else {
        attempt--;
        document.getElementById('tryCount').innerText = attempt;
        document.getElementById('screen').value = "";
        message('wrongPin', 'rightPin');
           if ( attempt == 0 ){   // after 3 failed attempts number pad will be removed.
            message('errorMessage', 'numberPad');
            document.getElementById('wrongPin').style.display = 'none';
           }           
        }
    }

// function for  success or error messages.
function message(show, hide){
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide).style.display = 'none';
}