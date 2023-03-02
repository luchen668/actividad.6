function priceWithMonthlyDiscount(dias, tasa, descuento)
{
    const horastotal = dias * 8;

    const tasaDesceunto = tasa * (1 - descuento);

    const prectiototal = Math.round(horastotal * tasaDesceunto);
    return prectiototal;
}

alert(priceWithMonthlyDiscount(89, 230, 0.42));