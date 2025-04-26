import { useState, useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { StockList } from './components/StockList'
import Form from './components/Form'
import { StockProvider } from './contexts/StockContext'

function App() {


  const stockListData = [
    {
      symbol: 'AAPL',
      quantity: '200',
      purchasePrice: '200.56',
      currentPrice: '300.67',
    },
    {
      symbol: 'MSFT',
      quantity: '1500',
      purchasePrice: '256.45',
      currentPrice: '367.78',
    }
  ];

  return (
    <>
    <StockProvider>
      <Header title="Finance Dashboard" />
      <Form />
      <StockList title="Stock List" />
    </StockProvider>
    </>
  )
}

export default App
