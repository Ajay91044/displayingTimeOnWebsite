let div=document.querySelector("div")
let button=document.querySelector("button")

// let time=new Date()

// let date=time.getDate()    
// let day=time.getMonth()
// let year=time.getFullYear()
// let hourse=time.getHours()
// let minutes=time.getMinutes()
// let seconds=time.getSeconds()



// console.log(date,day,year,hourse,minutes,seconds);

// function update()
// {
//    div.innerHTML=`<h1>${seconds}</h1>`
//    console.log(seconds);
// }

// setInterval(update,1000)

let count=0
function update()
{
    count++
    // console.log(count++);
    console.log(count);

    div.innerHTML=`${count}`
}
setInterval(update,1000)