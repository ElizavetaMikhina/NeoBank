import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@assets/styles/App.scss'
import { Header } from '@components/common/Header'
import { Footer } from '@components/common/Footer'
import { Home } from '@pages/Home'
import { Loan } from '@pages/Loan'
import { Application } from '@pages/Application'
import { NotFound } from '@pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/loan/:applicationId" element={<Application />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
