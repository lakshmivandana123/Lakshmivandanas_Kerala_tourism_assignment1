var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
function validate(){
    let reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(email.value==""||pwd.value=="")
    {
        alert("All fields are mandatory!");
        return false;
    }
    else if(reg.test(email.value)==false){
        alert("Enter a valid email!");
        return false;
    }
    else 
    {
    return passwordChanged();
}
}
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
        return false;
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
        
        return false;
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
        return true;
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
       
        return false;
        
    }
}
