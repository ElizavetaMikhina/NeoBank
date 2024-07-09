import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@assets/styles/App.scss'
import { Header } from '@components/common/Header'
import { Footer } from '@components/common/Footer'
import { Home } from '@pages/Home'
import { Loan } from '@pages/Loan'
import { Application } from '@pages/Application'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
