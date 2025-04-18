import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { StockList } from './components/StockList'
import Form from './components/Form'

function App() {
  // const [count, setCount] = useState(0)

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
    <Header title="Finance Dashboard" />
    <Form />
    <StockList title="Stock List" stockListData={stockListData} />
    
    </>
  )
}

export default App
