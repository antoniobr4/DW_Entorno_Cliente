
const usuarioCorrecto = "usuario";
const contrasenaCorrecta = "1234";

function solicitarCredenciales() {
  let nombreUsuario;
  let contrasena;
  let continuar = true; 

  while (continuar) {
    nombreUsuario = prompt("Por favor, ingrese su nombre de usuario:");

    if (nombreUsuario === null) {
      alert("Has cancelado el ingreso.");
      return; 
    }

    if (nombreUsuario.length < 3) {
      alert("El nombre de usuario debe tener al menos 3 caracteres.");
      continue; 
    }

    contrasena = prompt("Por favor, ingrese su contraseña:");

    if (contrasena === null) {
      alert("Has cancelado el ingreso.");
     return;
    }

   if (nombreUsuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
     alert("¡Bienvenido! Acceso concedido.");
     document.getElementById("contenidoPrincipal").style.display = "block"; 
     continuar = false; 
    } else {
     let reintentar = confirm("Nombre de usuario o contraseña incorrectos. ¿Desea intentarlo de nuevo?");
     if (!reintentar) {
       alert("Has cancelado el ingreso.");
       continuar = false; 
      }
    }
  }
}

solicitarCredenciales();
