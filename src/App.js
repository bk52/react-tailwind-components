import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages';
import HeaderBarPage from './Pages/HeaderBar';
import HeaderMenu from './Main/HeaderMenu';
import LeftMenu from './Main/LeftMenu';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <LeftMenu menuOpen={menuOpen} />
      <div className={`absolute transition-all duration-200 ease-in h-screen
        ${menuOpen ? 'left-48 w-[calc(100%-12rem)]' : 'left-0 w-full'}
      `}>
        <HeaderMenu menuOpen={menuOpen} setMenuOpen={(open) => setMenuOpen(open)} />
        <div className='absolute top-8 w-full h-[calc(100%-2rem)] overflow-y-auto'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components/headerbar" element={<HeaderBarPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
