  
function coba() {
    let username =document.forms["myform"]["username"].value;
    let password =document.forms["myform"]["password"].value;
    if (username == "admin" && password == "1234567") {
        alert("Login Berhasil");
        window.open("startbootstrap-sb-admin-2-master/index.html");
    } else{
        alert("Login Gagal");
    }
} 