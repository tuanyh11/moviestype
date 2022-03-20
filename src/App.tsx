import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import Tvshow from './Pages/Tvshow'
import './App.scss'

const App:React.FC = ():JSX.Element => {
  return (
        <BrowserRouter>
            <Header/>
              <Routes> 
                  <Route path="/" element={<Home/>}/>
                  <Route path="/tvshow" element={<Tvshow/>}/>
              </Routes>
            <Footer/>
        </BrowserRouter>
  )
}

export default App
