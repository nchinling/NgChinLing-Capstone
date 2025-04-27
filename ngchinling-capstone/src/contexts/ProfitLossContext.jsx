import { createContext, useState, useCallback } from 'react';

const ProfitLossContext = createContext();

const ProfitLossProvider = ({ children }) => {
    const [profitLossData, setProfitLossData] = useState({});

    const calculateProfitLoss = useCallback((symbol, quantity, purchasePrice, currentPrice) => {
        const quantityNum = parseFloat(quantity);
        const purchasePriceNum = parseFloat(purchasePrice);
        const currentPriceNum = parseFloat(currentPrice);

        if (isNaN(quantityNum) || isNaN(purchasePriceNum) || isNaN(currentPriceNum)) {
            return;
        }

        const profitOrLoss = (currentPriceNum - purchasePriceNum) * quantityNum;

        setProfitLossData(prevData => ({
            ...prevData,
            [symbol]: profitOrLoss,
        }));
    }, []);

    return (
        <ProfitLossContext.Provider value={{ profitLossData, calculateProfitLoss }}>
            {children}
        </ProfitLossContext.Provider>
    );
};

export { ProfitLossContext, ProfitLossProvider };
