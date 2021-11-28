function currentTime(){
    const date = new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()

    let time=`${hour} : ${minute} : ${second}`
    document.getElementById("clock").innerText=time
}

//currentTime
setInterval(currentTime,1000)