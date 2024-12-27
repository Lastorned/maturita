function sendMail(){
    var params = {
        email: document.getElementById("emailFrom").value,
        message: document.getElementById("password").value
    }
const serviceID ="service_hjdsv49";
const templateId ="template_y2di35a";

emailjs.send(serviceID, templateId, params)
.then(
    res =>{
        document.getElementById("emailFrom").value ="";
        document.getElementById("password").value ="";
        console.log(res);
        alert("your massage send successfully ")
    })
    .catch ((err) => console.log(err));
}

