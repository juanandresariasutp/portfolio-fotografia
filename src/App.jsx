import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Categories from './components/Categories';
import Contact from './components/Contact';

import Eventos from './pages/Eventos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Contact />
            </>
          }
        />

        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
