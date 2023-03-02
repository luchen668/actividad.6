function daysInBudget(presupuesto, dias)
{
    const horastotal = dias * 8;
    
    const diastotal = Math.floor(presupuesto / horastotal);
    return diastotal;
}

alert(daysInBudget(20000, 89));