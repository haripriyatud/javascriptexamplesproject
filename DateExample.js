const d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toISOString());
console.log(d.toUTCString())
console.log(d.toLocaleString())
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

// getter functions
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getMinutes());
console.log(d.getSeconds());


// get time zone 
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone)


// creating a variable with year, month
var newdate = new Date(2018,1);
console.log(newdate.toString())

// creating a variable with year, month, day
var newdate = new Date(2020, 1, 24);
console.log(newdate.toString())

// creating a variable with year, month, day,hour
var newdate = new Date(2020, 1, 24,10);
console.log(newdate.toString())

// creating a variable with year, month, day,hour,minute
var newdate = new Date(2020, 1, 24,10,6);
console.log(newdate.toString())

// creating a variable with year, month, day,hour,minute,second
var newdate = new Date(2020, 1, 24,10,6,20);
console.log(newdate.toString())



var date = new Date("Apr 20 2020");
console.log(date.toString())

let msec = Date.parse("Jan 20, 2020");
const converted_date = new Date(msec);
console.log(converted_date.toLocaleString())

// setter functions: 
converted_date.setDate(15);
console.log(converted_date.toLocaleString())

converted_date.setFullYear(2021,5);
console.log(converted_date.toLocaleString())

converted_date.setHours(20);
console.log(converted_date.toLocaleString());

converted_date.setMinutes(20);
console.log(converted_date.toLocaleString());

converted_date.setSeconds(20);
console.log(converted_date.toLocaleString());








