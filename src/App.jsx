import {} from 'react'
import './App.css'
/* para instalar as dependencias : npm install react-router-dom */
import { BrowserRouter, Routes,Route } from 'react-router-dom'
/*import dos componentes */
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import Produtos from './Produtos'
import Sobre from './Sobre'

function App() {
  return (
    <>
     {/*Estrutura para a rota que vai ser acessado pelo componente NAV*/}
    <BrowserRouter>
      {/*Componente Nav*/}
    <Nav />
    <Routes>
            {/*Rotas dos componentes*/}
      <Route path="/" element={<Home/>}/>
      <Route path="/Produtos" element={<Produtos/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
          {/* Componente Footer*/}
    <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App