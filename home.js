document.addEventListener('DOMContentLoaded', function() {
  let btnComprarYsya = document.getElementById('btnComprarYsya');
  let btnComprarDuki = document.getElementById('btnComprarDuki');
  let btnComprarBizarrap = document.getElementById('btnComprarBizarrap');
  let btnComprarWizkhalifa = document.getElementById('btnComprarWizkhalifa');

  // Cargar los datos del archivo data.json
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      // Obtener los detalles de los conciertos
      let ysyaConcert = data.conciertos.find(concierto => concierto.nombre === 'YSY A');
      let dukiConcert = data.conciertos.find(concierto => concierto.nombre === 'Duki');
      let bizarrapConcert = data.conciertos.find(concierto => concierto.nombre === 'Bizarrap');
      let wizkhalifaConcert = data.conciertos.find(concierto => concierto.nombre === 'Wiz Khalifa');

      // Configurar eventos de clic para los botones de compra
      if (btnComprarYsya) {
        btnComprarYsya.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire('¡Compra exitosa!', 'Tu compra de YSY A ha sido procesada', 'success');
          guardarCompraLocalStorage(ysyaConcert);
        });
      }

      if (btnComprarDuki) {
        btnComprarDuki.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire('¡Compra exitosa!', 'Tu compra de Duki ha sido procesada', 'success');
          guardarCompraLocalStorage(dukiConcert);
        });
      }

      if (btnComprarBizarrap) {
        btnComprarBizarrap.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire('¡Compra exitosa!', 'Tu compra de Bizarrap ha sido procesada', 'success');
          guardarCompraLocalStorage(bizarrapConcert);
        });
      }

      if (btnComprarWizkhalifa) {
        btnComprarWizkhalifa.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire('¡Compra exitosa!', 'Tu compra de Wiz Khalifa ha sido procesada', 'success');
          guardarCompraLocalStorage(wizkhalifaConcert);
        });
      }

      function guardarCompraLocalStorage(concierto) {
        let compras = localStorage.getItem('compras');
        if (compras) {
          compras = JSON.parse(compras);
          compras.push(concierto);
        } else {
          compras = [concierto];
        }
        localStorage.setItem('compras', JSON.stringify(compras));
      }
    })
    .catch(error => console.log('Error al cargar los datos:', error));
});