import DropdownButton from './DropdownButton';

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>

const dropMenu = <div className='flex flex-col overflow-y-auto px-3 py-2 space-y-2'>
    <a href="#">Home</a>
    <a href="#">Features</a>
    <a href="#">Pricing</a>
    <a href="#">FAQs</a>
    <a href="#">About</a>
</div>



const MenuDetailsButton = () => {
    return <DropdownButton icon={icon} dropMenu={dropMenu} contentWidth={200} contentSide='left' />
}

export default MenuDetailsButton;