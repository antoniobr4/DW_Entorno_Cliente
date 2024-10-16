# Proyecto: Fundamentos de JS (ES6)

Este proyecto forma parte de las actividades de la asignatura **Desarrollo Web en Entorno Cliente**. El propósito es desarrollar una plantilla web que explore los **Fundamentos de JavaScript (ES6)**, integrando elementos como un sistema de navegación, contenido estructurado y estilos CSS personalizados.

## Estructura del Proyecto

El proyecto contiene las siguientes secciones principales:

- **Header**: Incluye el título del proyecto y el nombre del desarrollador. La imagen se presenta de forma redondeada.
  
- **Formulario de Inicio de Sesión**: Solicita al usuario ingresar su nombre y contraseña para acceder al contenido principal del sitio.

- **Menú de navegación**: Contiene enlaces a recursos externos como w3schools, MDN, y un repositorio de GitHub, así como opciones para acceder a ejercicios de JavaScript.

- **Contenido principal**: Incluye tarjetas con enlaces a ejercicios que demuestran la refactorización de funciones en JavaScript, accesibles tras un login exitoso.

  - **Ejercicio 01**: Conversor, donde se puede ingresar un número y obtener su representación en binario, octal y hexadecimal.
  
  - **Ejercicio 02**: MiniCalculadora, que permite realizar operaciones básicas (suma, resta, multiplicación, división) y calcular el valor entero y la parte decimal de un número.

- **Footer**: Pie de página con información del desarrollador.

## Sistema de Login

El sistema de login consiste en un formulario que solicita al usuario ingresar un **nombre de usuario** y una **contraseña**. El comportamiento del login es el siguiente:

1. **Validación**: 
   - El nombre de usuario debe tener al menos 3 caracteres.
   - Si los datos no son correctos, se muestra un mensaje de error.
   - Si los datos son correctos (nombre de usuario predeterminado: `jota`, contraseña: `dejame`), se muestra un mensaje de bienvenida en el formulario: "Bienvenido!".

2. **Revelación de Contenido**: 
   - Tras un login exitoso, el contenido principal del sitio (tarjetas de ejercicios) se hace visible, mientras que el formulario se oculta.

3. **Estilos del formulario**: 
   - El formulario de inicio de sesión incluye un título "Iniciar Sesión", con botones de envío y cancelación alineados y un mensaje de retroalimentación ubicado al final del formulario.

## Navegación

El menú de navegación proporciona enlaces a varios recursos útiles para aprender más sobre JavaScript (ES6):

- [w3schools](https://www.w3schools.com/js/default.asp)
- [javascript.info](https://es.javascript.info/js)
- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [GitHub del proyecto](https://github.com/antoniobr4/DW_Entorno_Cliente)

### Ejercicios disponibles:

- **Conversor**: Permite ingresar un número y obtener sus equivalentes en diferentes sistemas numéricos (binario, octal, hexadecimal).
- **MiniCalculadora**: Permite realizar operaciones matemáticas básicas y obtener resultados específicos (valor entero, parte decimal y factorial).

## Autor

Desarrollado por: **Antonio Jesús Bravo Rueda**


