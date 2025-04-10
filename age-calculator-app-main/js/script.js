function conversion() {
    // Obtener los valores de los inputs
    let dia_b = document.getElementById("dia").value;
    let mes_b = document.getElementById("mes").value;
    let anio_b = document.getElementById("anio").value;
  
    // Asegurarse de que los campos no estén vacíos
    if (!dia_b || !mes_b || !anio_b) {
      alert("Por favor ingresa todos los datos.");
      return;
    }
  
    // Convertir las entradas a números
    dia_b = parseInt(dia_b);
    mes_b = parseInt(mes_b);
    anio_b = parseInt(anio_b);
  
    // Obtener la fecha actual
    const fecha_actual = new Date();
    const dia_actual = fecha_actual.getDate();
    const mes_actual = fecha_actual.getMonth() + 1; // Los meses son de 0 a 11
    const anio_actual = fecha_actual.getFullYear();
  
    // Calcular la edad
    let edad_anios = anio_actual - anio_b;
    let edad_meses = mes_actual - mes_b;
    let edad_dias = dia_actual - dia_b;
  
    // Si los días o meses son negativos, ajustar los valores
    if (edad_dias < 0) {
      edad_dias += new Date(anio_actual, mes_actual - 1, 0).getDate(); // días del mes anterior
      edad_meses--;
    }
  
    if (edad_meses < 0) {
      edad_meses += 12;
      edad_anios--;
    }
   // EL innerHTML es para cambiar le valor interno del html
    // Mostrar el resultado
    document.getElementById("dia_output").innerHTML = `${edad_dias} <span>Días</span>`;
    document.getElementById("mes_output").innerHTML = `${edad_meses} <span>Meses</span>`;
    document.getElementById("anio_output").innerHTML = `${edad_anios} <span>Años</span>`;
  }
