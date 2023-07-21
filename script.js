function confirmarAgregar() {
    if (confirm("¿Estás seguro de que deseas agregar el producto?")) {
      agregarProducto();
    }
  }
  
  function confirmarEliminar() {
    if (confirm("¿Estás seguro de que deseas eliminar el producto?")) {
      eliminarProducto();
    }
  }
  
  function agregarProducto() {
    // Aquí puedes agregar la lógica para enviar los datos del producto al servidor
    // y luego mostrar un mensaje de éxito si la operación fue exitosa.
    alert("Producto agregado correctamente");
    limpiarCamposFormulario();
  }
  
  function eliminarProducto() {
    // Aquí puedes agregar la lógica para enviar la solicitud al servidor para eliminar el producto
    // y luego mostrar un mensaje de éxito si la operación fue exitosa.
    alert("Producto eliminado correctamente");
    limpiarCamposFormulario();
  }
  
  function limpiarCamposFormulario() {
    // Restablecer los campos del formulario a valores vacíos o predeterminados
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("imagen").value = "";
  }
  