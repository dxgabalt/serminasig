function calcularCosto() {
    // Obtener los valores del formulario
    const surfaceArea = parseFloat(document.getElementById('surfaceArea').value);
    const metalType = document.getElementById('metalType').value;
    
    // Realizar cálculos (puedes ajustar según tus necesidades)
    const costoProductoQuimico = calcularCostoProductoQuimico(metalType);
    const costoManoDeObra = calcularCostoManoDeObra(surfaceArea);
    
    // Calcular el costo total
    const costoTotal = costoProductoQuimico * surfaceArea + costoManoDeObra;
    
    // Mostrar el resultado en la interfaz
    document.getElementById('resultado').textContent = costoTotal.toFixed(2);
}

function calcularCostoProductoQuimico(metalType) {
    // Lógica para calcular el costo del producto químico según el tipo de metal
    // Personalizar segun material
    let costo = 0;
    
    switch (metalType) {
        case 'acero':
            costo = 5; // Costo para acero en USD por m²
            break;
        case 'aluminio':
            costo = 7; // Costo para aluminio en USD por m²
            break;
        // Agregar más casos según sea necesario

    }
    
    return costo;
}

function calcularCostoManoDeObra(surfaceArea) {
    // Lógica para calcular el costo de la mano de obra
    // Personalizar segun requerimientos
    const tarifaPorMetroCuadrado = 10; // Tarifa en USD por m²
    
    return tarifaPorMetroCuadrado * surfaceArea;
}
