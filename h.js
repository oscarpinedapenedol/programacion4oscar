function calcularTotalConDescuento(cantidadProductos, precioUnitario) {
    const tasaDescuento = 0.07;

    if (cantidadProductos === null || precioUnitario === null) {
        return 0;
    }

    if (typeof cantidadProductos !== 'number' || typeof precioUnitario !== 'number') {
        return 0;
    }

    if (!Number.isFinite(cantidadProductos) || !Number.isFinite(precioUnitario)) {
        return 0;
    }

    if (cantidadProductos <= 0 || precioUnitario <= 0) {
        return 0;
    }

    return cantidadProductos * precioUnitario * (1 - tasaDescuento);
}

# hola oscar 
