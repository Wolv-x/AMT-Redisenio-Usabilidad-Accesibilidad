export function formatDate(inputDate: Date): string {
    return inputDate.toLocaleString();
}

export function formatCurrency(inputAmount: number): string {
    return inputAmount.toLocaleString('es-EC', { style: 'currency', currency: 'USD' });
}
