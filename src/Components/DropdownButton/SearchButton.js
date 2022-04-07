import DropdownButton from './DropdownButton';

const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>

const dropMenu = <input className='block text-sm border border-gray-400 rounded py-1.5 pl-1.5 pr-4 placeholder-gray-400 focus:outline-none w-48' placeholder="Search" />


const SearchButton = () => {
    return <DropdownButton icon={icon} dropMenu={dropMenu} />
}

export default SearchButton;
