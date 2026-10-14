export const formatPrice = (value) => { /* formata preço para 'R$' */
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(value/100);
};