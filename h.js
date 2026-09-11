function calculartotalcondescuento(cantidad, preciounitario) {
    const descuentos = 0.07;

    if (cantidad <= 0 || preciounitario <= 0) {
        return 0;
    }

    return cantidad * preciounitario * (1 - descuentos);
}