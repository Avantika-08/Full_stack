function Validate()
{
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    var email=document.getElementById('email').value;
    let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(name=="" || name.length<6)
    {
        alert("Provide a valid username with at least 6 characters");
        document.myform.name.focus();
        return false;
    }
    if(password.length<6)
    {
        alert("Provide a valid password with atleat 6 characters");
        document.myform.name.focus();
        return false;
    }
    if(re.test(email))
    {
        alert("Done");
        return true;
    }
    else
    {
        alert("Provide a Valid Email Address");
        document.myform.email.focus();
        return true;
    }
}
