const d = new Date();
let hour = d.getHours();
console.log(hour);

//prints greeting message based on the hour
if(hour>=1 && hour<=12){
    console.log("Good morning");
}

else if( hour >=13 && hour<=17){
    console.log("Good afternoon");
}

else if(hour>=18 && hour<=20){
    console.log("Good evening");
}

else{
    console.log("Good night");
}