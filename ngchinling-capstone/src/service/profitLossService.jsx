export const calculateProfitOrLoss = (quantity, purchasePrice, currentPrice) => {
    const quantityNum = parseFloat(quantity);
    const purchasePriceNum = parseFloat(purchasePrice);
    const currentPriceNum = parseFloat(currentPrice);

    if (isNaN(quantityNum) || isNaN(purchasePriceNum) || isNaN(currentPriceNum)) {
        throw new Error('Invalid input for profit/loss calculation.');
    }

    return (currentPriceNum - purchasePriceNum) * quantityNum;
};
