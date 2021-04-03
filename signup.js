var fname = document.getElementById("first_name");
var lname = document.getElementById("last_name");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var cpwd = document.getElementById("password_confirmation");
var phn = document.getElementById("phone");
function validate(){
    let reg =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let num=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let n=/^[0-9]{10,10}$/;
    if(fname.value==""||lname.value==""||email.value==""||pwd.value==""||cpwd.value==""||phn.value=="")
    {
        alert("All Fields are mandatory!!!");
        return false;
    }
    else if(reg.test(email.value)==false){
        alert("Enter a valid email!");
        return false;
    }
    else if(num.test(phn.value)==false && n.test(phn.value)==false){
        alert("Enter valid phone number!")
        phn.style.border="2px solid red ";
        return false;
    }
    else if(pwd.value!=cpwd.value){
        alert("Passwords should match");
        pwd.style.border="2px solid red ";
        cpwd.style.border="2px solid red ";
        return false;
    }
    
    else {
        
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
