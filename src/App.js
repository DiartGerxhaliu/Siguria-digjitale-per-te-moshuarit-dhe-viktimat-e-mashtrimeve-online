import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/organisms/Menu';
import Home from './pages/Home/Home';
import Footer from './components/organisms/Footer';
import Why from './pages/Why/Why';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <div className="App"
    >
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/why' element={<Why/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
