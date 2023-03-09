console.log("hello bhai")
let us = document.getElementById("usa")
let india = document.getElementById("india")
let china = document.getElementById("china")

const updateTime =()=>{
    let d = new Date();
us.innerHTML=d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1];
  india.innerHTML= d.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
  }).split(", ")[1];
  china.innerHTML= d.toLocaleString('en-US', {
    timeZone: 'Asia/Shanghai',
  }).split(", ")[1]
  let alarmhour = alarm.value.split(":")[0]
  let alarmmin=alarm.value.split(":")[1]
 if(d.getHours()==alarmhour&& d.getMinutes()==alarmmin){
console.log("hello harry")
var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';

(new Audio(mp3_url)).play()
 }
}
setInterval(updateTime,1000)