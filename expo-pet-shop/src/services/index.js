const returnLocaleFormattedCurrency = (value) => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export { returnLocaleFormattedCurrency };