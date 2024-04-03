function Validate()
{
    var creditcard=document.getElementById("creditcard").value;
    //var creditcard=document.forms["myform"]["creditcard"].value;
    let re1=/^5[1-5][0-9]{14}$/;
    let re2=/^[4][0-9]{12,15}$/;
    let re3=/^3[4-7][0-9]{14}$/;

    if(re1.test(creditcard))
    {
        alert("You Have a Master Card");
        return true;
    }
    else if(re2.test(creditcard))
    {
        alert("You Have a Visa Card");
        return true;
    }
    else if(re3.test(creditcard))
    {
        alert("You Have an American Express Card");
        return true;
    }
    else
    {
        alert("Wrong Credit Card number");
        document.myform.creditcard.focus();
        return false;
    }
}