import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@assets/styles/App.scss'
import { Header } from '@components/common/Header'
import { Footer } from '@components/common/Footer'
import { Home } from '@pages/Home'
import { Loan } from '@pages/Loan'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
