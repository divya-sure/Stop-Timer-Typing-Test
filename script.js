// setTimeout(function(){
//     console.log("hiii")
// },5000);

// let interval=setInterval(function(){
//     console.log("hii")
// },1000)
// clearInterval(interval) 

let startTimeEle=document.getElementById("startTime");
let stopTimeEle=document.getElementById("stopTime");
let resetTimeEle=document.getElementById("resetTime");

startTimeEle.addEventListener('click',startTime);
stopTimeEle.addEventListener('click',stopTime);
resetTimeEle.addEventListener('click',resetTime);

let interval;
let millisec=0
let sec=0;
let min=0;
let hrs=0;
function startTime()
{
    interval=setInterval(function()
    {
        millisec++;
        if(millisec==1000)
        {
            sec++;
            millisec=0;
        }
        if(sec==60)
        {
            min++;
            sec=0;
        }
        if(min==60)
        {
            hrs++;
            min=0;
        }
        let time=`${hrs<10?"0":""}${hrs} : ${min<10?"0":""}${min} : ${sec<10?"0":""}${sec} : ${millisec}`
        document.getElementById("time").innerText=`${time}`;
    },1)
}
function stopTime()
{
    clearInterval(interval);

}
function resetTime()
{
    stopTime(); 
    hrs=0;
    min=0;
    sec=0;
    millisec=0;
    document.getElementById("time").innerText=`00 : 00 : 00 : 00`;
}
let str="Hello Guys!!!"
document.getElementById("text").innerText=str;
let flag=false;
function textTyping()
{
    if(!flag)
    {
        flag=true;
        startTime();
    }
    let typedText=document.getElementById("typedText").value;
    let len=typedText.length;
    let ele= document.getElementById("error");
    ele.style.border="6px solid blue"
    if(typedText[len-1]!=str[len-1])
    {
       ele.style.border="6px solid red"
    }
    if(str==typedText)
    {
        stopTime();
        alert(`Congratulations! You completed the sentence`);
        ele.style.border="6px solid green"
    }
}