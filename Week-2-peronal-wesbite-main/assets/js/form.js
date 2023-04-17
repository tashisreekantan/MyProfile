
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML='Name Is Required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML='Write Full Name';
        return false;
    }
    nameError.innerHTML='<i class="bi bi-patch-check"></i>';
    return true;
}
function validateEmail(){
    var mail=document.getElementById('email').value;
    if(mail.length == 0){
        emailError.innerHTML='Mail Is Required';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Enter Correct Email';
        return false;
    }
    emailError.innerHTML='<i class="bi bi-patch-check"></i>';
    return true;

}
function validateSubject(){
    var sub=document.getElementById('subject').value;
    if(sub.length == 0){
        subjectError.innerHTML='Subject Is Required';
        return false;
    }
    subjectError.innerHTML='<i class="bi bi-patch-check"></i>';
    return true;
}
function validateMessage(){
    var msg=document.getElementById('message').value;
    if(msg.length == 0){
        messageError.innerHTML='Message Is Required';
        return false;
    }
    messageError.innerHTML='<i class="bi bi-patch-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please Fix The Error To Submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}
