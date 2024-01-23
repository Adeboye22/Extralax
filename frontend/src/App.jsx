import { Routes, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Homepage';
import Services from './components/services/Services';
import About from './components/portfolio/Portfolio';

const App = () => {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/portfolio' element={<About/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
