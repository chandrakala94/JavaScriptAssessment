var radioBtnOneway = document.querySelector('#radbtn1');
var radioBtnRoundTrip = document.querySelector('#radbtn2');
var origin = document.querySelector('#from');
var destination = document.querySelector('#to');
var passengerName = document.querySelector('#name');
var agePassen1 = document.querySelector('#age');
var passengerName2 = document.querySelector('#name2');
var agePassen2 = document.querySelector('#age2');
var email = document.querySelector('#mail');
var mobile = document.querySelector('#phone');
var departDate = document.querySelector('#depart');
var returnDate = document.querySelector('#return');


function validFormFieldInput()
{
    //console.log(document.flight-form);
    if(!(radioBtnOneway.value || radioBtnRoundTrip.value))
    {
        alert('Please select either your journey is one way or round trip?');
    }
    if(origin.value.length <= 0)
    {
        alert('Please select your origin point');
        origin.focus();
    }
    if(destination.value.length <= 0)
    {
        alert('Please select your destination point');
        destination.focus();
    }
    if(departDate.value.length <= 0)
    {
        alert('Please select your departure date');
        departDate.focus();
    }
    if(radioBtnRoundTrip.value.length >1)
    {
        if(returnDate.value.length <= 0)
        {
            alert('Please select your return date');
            returnDate.focus();
        }
    }
    if(email.value.length <= 0)
    {
        alert('Please select your Email id');
        email.focus();
    }
    if(mobile.value.length <= 0)
    {
        alert('Please select your Mobile number');
        mobile.focus();
    }
    if(passengerName.value.length <= 5)
    {
        alert('Passenger name length should be more than 5 characters');
        passengerName.focus();
    }
    if(passengerName2.value.length <= 5)
    {
        alert('Passenger name2 length should be more than 5 characters');
        passengerName2.focus();
    }
    if(isNaN(agePassen1.value))
    {
        alert('Passenger Age should be numeric');
        agePassen1.focus();
    }
    if(isNaN(agePassen2.value))
    {
        alert('Passenger2 Age should be numeric');
        agePassen2.focus();
    }
    
}validFormFieldInput();