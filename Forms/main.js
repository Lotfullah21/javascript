function check() {
  var email2 = document.getElementById("repeated-email");
  var email1 = document.getElementById("email_1");
  if (email1.value != email2.value) {
    alert("Emails must be same");
    return false;
  }
}
