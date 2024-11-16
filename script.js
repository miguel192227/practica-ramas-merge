function agregar(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
  }
  
  function limpiar() {
    document.getElementById('pantalla').value = '';
  }

  function deshacer(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = valorPantalla.substring(0, valorPantalla.length -1);
    document.getElementById('pantalla').value = resultado;
  }
  