document.addEventListener('DOMContentLoaded', function() {
  let ingresaButton = document.querySelector('.ingresa');
  
  if (ingresaButton) {
    ingresaButton.addEventListener('click', function() {
      let email = document.getElementById('floatingInput').value;
      let password = document.getElementById('floatingPassword').value;

      if (email.trim() === '' || password.trim() === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes ingresar un correo electrónico y una contraseña válida',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: 'Bienvenido, ' + email,
          confirmButtonText: 'Aceptar'
        }).then(function() {
          // Guardar en el localStorage
          let userData = {
            email: email,
            password: password
          };
          localStorage.setItem('userData', JSON.stringify(userData));
        });
      }
    });
  }
});