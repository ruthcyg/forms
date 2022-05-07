
function validate(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const cpassword = document.getElementById("cpassword").value;

   checkemail(email)
    checkusername(username)
   checkpassword(password)
   checkpasswordmatches(cpassword , password)
}

function checkusername(username){

    if(username.length > 7){
        document.getElementById("username").classList.add("success");
        document.getElementById("username").classList.replace("error" , "success");
       /// console.log("hello l am ")
       document.getElementById("username_error").innerHTML =" ";
    }

else{
       document.getElementById("username").classList.add("error")
       document.getElementById("username_error").innerText ="username must be 8 letter long"
    }
}


function checkemail(email){

    if(email.length > 6 && email.includes("@gmail")){
        document.getElementById("email").classList.add("success");
        document.getElementById("email").classList.replace("error" , "success");
       /// console.log("hello l am ")
       document.getElementById("email_error").innerHTML =" ";
    }

else{
       document.getElementById("email").classList.add("error")
       document.getElementById("email_error").innerText ="email must be 6 letter long and contain @gmail"
    }
}


function checkpassword(password){

    if(password.length > 6 && password.includes(".")){
        document.getElementById("password").classList.add("success");
        document.getElementById("password").classList.replace("error" , "success");
       /// console.log("hello l am ")
       document.getElementById("password_error").innerHTML =" ";
    }

else{
       document.getElementById("password").classList.add("error")
       document.getElementById("password_error").innerText ="password must be 6 letter long and includes ."
    }
}


function checkpasswordmatches(password, cpassword){
    if(password==cpassword &&cpassword!=""){
        document.getElementById("cpassword").classList.add("success");
        document.getElementById("cpassword").classList.replace("error" , "success");
       /// console.log("hello l am ")
       document.getElementById("cpassword_error").innerHTML = " ";
    }

else{
       document.getElementById("cpassword").classList.add("error")
       document.getElementById("cpassword_error").innerText ="password does not match"
    }
}
