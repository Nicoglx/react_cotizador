// Obtener la diferencia de anios
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year; 
}

// Calcular el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'americano':
            incremento = 1.15;
            break;
        case 'europeo':
            incremento = 1.30;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return ( plan === 'basico') ? 1.20 : 1.50
}

// Primer letra con mayuscula
export function primerMayus( texto ) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}
