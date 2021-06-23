// var mainDiv = document.getElementById("container")
// console.log(mainDiv)
// var div = document.createElement("div")
// var paragraph = document.createElement("p")
// startBtn=document.createElement("button")
// stopBtn=document.createElement("button")
// mainDiv.appendChild(div)
// div.appendChild(paragraph)
// div.appendChild(startBtn)
// div.appendChild(stopBtn)
// startBtn.setAttribute("class", "btn")
// stopBtn.setAttribute("class", "btn")
// startBtn.innerText="+"
// stopBtn.innerText="-"

// startBtn.addEventListener("onclick",clock())


(function showDate(){
var date=new Date()
document.getElementById("date-container").innerText=date.toDateString()
})()

function clock()
{
    var hour = new Date().getHours()
    var mins = new Date().getMinutes()
    var sec = new Date().getSeconds()
    hour= hour<10 ? "0" + hour : hour=hour
    mins= mins<10 ? "0" + mins : mins=mins
    sec= sec<10 ? "0" + sec : sec=sec

    
    if(hour>12)
    {var hour = new Date().getHours()- 12
     var time = hour + ":" + mins + ":" + sec + " PM"
    }
    else {
     var hour=new Date().getHours()
     var time = hour + ":" + mins + ":" + sec + "AM"
    }
    document.getElementById("clock-container").innerText=time

}

var setIntervalRef;

function startclock(){

setIntervalRef=setInterval(clock,1000)

}

function stopclock(){
    clearInterval(setIntervalRef)
}