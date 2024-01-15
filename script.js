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




document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.bottom-line nav');

    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('menu-open');
    });

    // Cerrar el menú al hacer clic en un enlace
    navMenu.addEventListener('click', function () {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('menu-open');
    });
});



function openModal(category) {
    // Lógica para abrir un modal o galería de imágenes según la categoría
    // Puedes implementar esta función según las necesidades de tu proyecto
    console.log(`Abrir modal para la categoría: ${category}`);
}
