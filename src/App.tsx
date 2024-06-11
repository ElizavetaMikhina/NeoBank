import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@assets/styles/App.scss'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Main from '@pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
