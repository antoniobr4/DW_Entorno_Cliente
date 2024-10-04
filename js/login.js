"use strict";

document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const messageElement = document.getElementById('message');

  
  if (!/^[a-zA-Z]{3,}$/.test(username)) {
      messageElement.textContent = "El nombre de usuario debe tener al menos 3 letras.";
      return;
  }

  
  const validUsername = "antonio";
  const validPassword = "1234";

  
  if (username === validUsername && password === validPassword) {
      messageElement.textContent = "¡Bienvenido, " + username + "!";
      messageElement.style.color = "green"; 
      document.getElementById('login-container').style.display = 'none'; 
      document.getElementById('main-content').style.display = 'block'; 
  } else {
      messageElement.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
      messageElement.style.color = "red"; 
  }
});


document.getElementById('cancel-btn').addEventListener('click', function () {
  document.getElementById('login-form').reset(); 
  document.getElementById('message').textContent = ""; 
});
