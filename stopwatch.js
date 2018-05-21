var h2 = document.getElementsByTagName ("h2");
  var start = document.getElementById ("start");
  var lap = document.getElementById ("lap");
  var stop = document.getElementById ("stop");
  var reset = document.getElementById ("reset");
  var lapBtn = document.getElementById('lap');
  var laps = document.getElementById('lapsDetails');

  var status = 0;
  var time = 0;  
  var mSec = 0;
  var seconds = mSec/1000;
  var minutes = seconds /60; 
  var hours = minutes /60;

  let interval;


 //Timer
function timer(){
    interval = setInterval(function(){
    if(status ==1){
            mSec++;



            if(mSec>=1000){
            mSec=0;
            seconds++;
            }

            if(seconds>=60){
            seconds=0;
            minutes++;
            }

            if(minutes>=60){
            minutes=0;
            hours++;
            }

            if(hours>=24){
            seconds=0;
            minutes=0;
            hours=0;
            mSec++;
            }

            document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + "." + mSec;    
        } 

    },1);
}

//Start watch
function startFunc(){
    status=1;
    console.log('start pushed')
  timer();
}

  //Prints the laps' details below the clock
function lapFunc(){
    lapsDetails.innerHTML += `<li>${document.getElementById("clock").textContent}</li>`
}
  //stop watch

  function stopFunc(){    
      status =0;
      clearInterval(interval);
  }

  //reset watch
function resetFunc(){
      status = 0;
      clearInterval(interval);
      document.getElementById("clock").innerHTML = "0:0:0.0";
      seconds=0;
      minutes=0;
      hours=0;
      mSec=0;
      lapsDetails.innerHTML = ''

 }