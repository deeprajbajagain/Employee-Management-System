import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'


function App() {
  return (
    <>
      <Header/>
            <BrowserRouter>
        <Routes>
          // http://localhost:5173
          <Route path="/" element={<ListEmployee />}></Route>
          // http://localhost:5173/employees
          <Route path="/employees" element={<ListEmployee />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
