import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
