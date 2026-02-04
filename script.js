function sendMail(){
   let parms= {
      name : document.getElementId("name").value,
      email : document.getElementId("email").value,
      subject : document.getElementId("subject").value,
      message : document. getElementId("message").value,
   }

     emailjs.send("service_e99fqjb", "template_giatwjd", parms).then(alert("Email Sent!!"))
}