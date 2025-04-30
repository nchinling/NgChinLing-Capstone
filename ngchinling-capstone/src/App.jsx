import { useState, useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StockList } from './components/StockList'
import Form from './components/Form'
import { StockProvider } from './contexts/StockContext'
import { ProfitLossProvider } from './contexts/ProfitLossContext'

function App() {

  return (
    <>
      <Header title=" Finance Dashboard" image="/images/stockmarket.png" />
      <StockProvider>
        <ProfitLossProvider>
          <Form />
          <StockList title="Stock List" />
        </ProfitLossProvider>
      </StockProvider>
      <Footer name="Ng Chin Ling"></Footer>
    </>
  )
}

export default App
