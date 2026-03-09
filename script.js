let intervals = []

hourFormat();
document.getElementById("format").addEventListener("click", function(){
    let button = document.getElementById("format");
    if (button.innerText === "12-Hour Format"){
        button.innerText = "24-Hour Format";
        intervals.forEach(clearInterval);
    } else {
        button.innerText = "12-Hour Format";
        intervals.forEach(clearInterval);
    }
    hourFormat();
})
function updateClock(){
    const now  = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = currentTime;
}


function hourFormat(){
    let button = document.getElementById("format");
    if (button.innerText === "12-Hour Format"){
        intervals.push(setInterval(updateClock, 1000));
    }
    if (button.innerText === "24-Hour Format"){
        intervals.push(setInterval(twelveHourFormat, 1000));
    }
}

function twelveHourFormat(){
    const now = new Date();
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const currentTime = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`
    document.getElementById("clock").textContent = currentTime;
}
updateClock();
setInterval(hourFormat, 1000);