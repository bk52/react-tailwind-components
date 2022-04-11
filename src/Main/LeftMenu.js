import { Link } from "react-router-dom";
import TailwindLogo from '../Assets/img/TailwindCss.png';
import ReactLogo from '../Assets/img/React.png';

const LeftMenu = ({ menuOpen }) => {
    return <div className={`absolute left-0 top-0 overflow-auto shadow-lg bg-gray-100 border border-r-gray-100 h-full
    transition-all duration-200 ease-in
    ${menuOpen ? 'w-48' : 'w-0'}`}>
        <div className='flex justify-around px-2 py-3'>
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

        <div className='my-0.5 border-t border-gray-100'></div>
        <ul className='text-sm mt-4 space-y-1 block px-2'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/components/headerbar">Header Bar</Link></li>
        </ul>
    </div>
}

export default LeftMenu;