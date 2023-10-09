let displayTime = document.querySelector("#displayTime")
let button = document.querySelector("button")

let normal_date = document.getElementById("normal_date")


function update() {
    let d = new Date()
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let hourse = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let day=d.getDay()

    let array=["sunday","Monday","tuesday","wednesday","thursday","friday","saturday",]

    if(true)
    {
        day=array[day]
    }
    // console.log(date,day,year,hourse,minutes,seconds);

    
    normal_date.innerHTML=`<span>${date} /</span>
    <span>${month+1} /</span>
    <span>${year}</span>
    <span>${day}</span>`

    displayTime.innerHTML =
     `
    <span>${hourse}:</span>
    <span>${minutes}:</span>
    <span>${seconds}</span>`         
}

setInterval(update, 1000)

// let count=0
// function update()
// {
//     count++
//     // console.log(count++);
//     console.log(count);

//     div.innerHTML=`${count}`
// }
// setInterval(update,1000)