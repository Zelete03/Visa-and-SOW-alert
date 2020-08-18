/* 
basic plan:
alert visa expiry 3months in advance
alert SOW expiry 1 month in advance
send an email with the alert on time
include the date of expiry
'[firstname] + [surname]'s visa will expire in 3 months on the date [visaEndDate]'
*/

function addThreeMonths(){
//get date in miliseconds add 1/3months worth of miliseconds turn it back into string ez life
var today = new Date();
console.log(today);
}

//miliseconds in a month
var oneMonth = 2628000000;
//fetches todays date
var today = new Date() ;
console.log(today);
//turns string date into milliseconds and updates variable for today
today = Date.parse(today);
console.log(today);
var oneMonthFromNow = new Date(today + oneMonth);
console.log(oneMonthFromNow);
var threeMonthsFromNow = new Date(today + 3*oneMonth);
// threeMonthsFromNow  = Date.parse(threeMonthsFromNow)
console.log(threeMonthsFromNow);

//check if the visa end date is the same as [threeMonthsFromNow] 
//check if the SOW end date is the same as [oneMonthFromNow]
//use fetch function to fetch the dates for visaEndDate etc etc


var visaEndDate = new Date(1605652000000);
console.log(visaEndDate);

let firstname = 'John'; 
let surname = 'Doe';

if (threeMonthsFromNow === visaEndDate); {
    var placeHolder = (firstname + ' ' + surname +'\'s visa will expire in 3 months from today. It will expire on the date: ' + visaEndDate);
    console.log(placeHolder);
    return(placeHolder);

} 
