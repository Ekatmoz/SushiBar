import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./Home'));
const Menu = lazy(() => import('./components/Menu'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const CateringScreen = lazy(() => import('./components/CateringScreen'));

function PageFallback() {
  return <div className='min-h-[50vh]' aria-hidden />;
}

function App() {
  return (
    <main>
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/catering' element={<CateringScreen />} />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
