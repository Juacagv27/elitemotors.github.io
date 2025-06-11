
    function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }

    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }
 

 let carrito = [];
    let total = 0;

    function agregarAlCarrito(nombre, precio) {
      carrito.push({ nombre, precio });
      total += precio;
      actualizarCarrito();
    }

    function eliminarDelCarrito(index) {
      total -= carrito[index].precio;
      carrito.splice(index, 1);
      actualizarCarrito();
    }

    function actualizarCarrito() {
      const contenedor = document.getElementById('carrito-items');
      const totalElemento = document.getElementById('total');
      contenedor.innerHTML = '';

      carrito.forEach((item, index) => {
        contenedor.innerHTML += `
          <div class="item-carrito">
            ${item.nombre} - $${item.precio.toLocaleString()}
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>
          </div>
        `;
      });

      totalElemento.textContent = total.toLocaleString();
    }

    function irAPagar() {
      if (carrito.length === 0) {
        alert("El carrito está vacío.");
      } else {
        alert("Gracias por tu compra en Elite Motors.\nTotal a pagar: $" + total.toLocaleString());
        // Aquí podrías redirigir a un formulario de pago real
        // window.location.href = "pago.html";
      }
    }
