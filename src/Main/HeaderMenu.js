import HamburgerButton from '../Components/Button/HamburgerMenu/ButtonOne/ButtonOne';
import SwitchDayNight from '../Components/Switch/SwitchDayNight/SwitchDayNight';

const HeaderMenu = ({ menuOpen, setMenuOpen }) => {
    return <div className={`absolute flex justify-between items-center w-full h-8 top-0 px-4 bg-gray-100 shadow-md`}>
        <HamburgerButton onStatusChange={setMenuOpen} />
        <a href='https://github.com/bk52/react-tailwind-components' target='_blank' rel='noreferrer' className="text-sm text-gray-700">react-tailwind-components</a>
        <SwitchDayNight />
    </div>
}

export default HeaderMenu;