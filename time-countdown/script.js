// - Read - Realise - Write - Reshape 

// The amount of variables -> time , PromoTime, Days, Hours, Minutes, Seconds

// Statements if it's greater or less than 0 what shall happen

// function starting Countdown

let time = 100; //  This is time in minutes //we can also add a promt in here

let promoTime = time * 60;  // Seconds

let counting = document.getElementById('countdown');

// Let's write the functionality 

function startCountdown() {   // Set Interval will keep on calling until the specified time 
    let promoTimer = setInterval(function(){
        if(promoTime <= 0){
            clearInterval(promoTime);
            counting.innerHTML = "Countdown has ended!";
        }// counter is zero or less means that we have reached our desired time limit and we will clearinterval or else it will not stop.
        else { //in this else its the main code when we will calculate 
            promoTime--;//here promo time will decrement

            const days = Math.floor(promoTime / 3600 / 24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const min = Math.floor(promoTime / 60) % 60;  //  give us the remainder in 60 
            //                     (25 * 60 / 60) --> give us the remainder by 60
            const sec = Math.floor(promoTime % 60);
            //                     (25 * 60) % 60 --> Store all of this in the second variable

            counting.innerHTML = `TIME: ${addZero(hours)} hours : ${addZero(min)} minutes : ${addZero(sec)} seconds`
            
        }
    }, 1000);
}

function addZero(t) {
    if(t < 10) {
        return `0${t}`;
    }
    else {
        return t;
    }
    // Another easier method would be this
    // return t < 10 ? 0${t} : t;
}

startCountdown();s