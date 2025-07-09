import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import Employee from './components/Employee'


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
          // http://localhost:5173/add-employee
          <Route path="/add-employee" element={<Employee />}></Route>
          // http://localhost:5173/update-employee/id
          <Route path="/update-employee/:id" element={<Employee />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
