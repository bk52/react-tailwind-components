import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages';
import HeaderBar from './Pages/HeaderBar';
import TailwindLogo from './Assets/img/TailwindCss.png';
import ReactLogo from './Assets/img/React.png';

const LeftMenu = () => {
  return <><div className='flex justify-around'>
    <button className='w-14 h-14 rounded-full shadow-md p-1'>
      <a href='https://reactjs.org' target='_blank' rel='noreferrer' >
        <img src={ReactLogo} alt='reactLogo' />
      </a>
    </button>

    <button className='w-14 h-14 rounded-full shadow-md p-1'>
      <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
        <img src={TailwindLogo} alt='tailwindLogo' />
      </a>
    </button>
  </div>

    <div className='text-sm text-center font-bold mt-4 text-gray-700'>
      react-tailwind-components
    </div>
    <div className='my-0.5 border-t border-gray-100'></div>
    <ul className='text-sm mt-4 space-y-1'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/components/headerbar">Header Bar</Link></li>
    </ul>
  </>
}

const App = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="w-48 overflow-auto shadow-lg bg-gray-100 border border-r-gray-100 px-2 py-3">
        <LeftMenu />
      </div>
      <div className="w-full overflow-y-auto px-2 py-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components/headerbar" element={<HeaderBar />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
