import AvatarButton from '../AvatarButton/AvatarButton';
import NotificationButton from '../DropdownButton/NotificationButton';
import MessageButton from '../DropdownButton/MessageButton';
import SearchButton from '../DropdownButton/SearchButton';
import MenuDetailsButton from '../DropdownButton/MenuDetailsButton';

const AppBar = () => {
    return <div className='flex items-center justify-between w-full h-14 bg-gray-800 shadow-lg'>
        <div className='flex items-center ml-4'>
            {/* Logo */}
            <button className='w-10 h-10 text-green-600'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            </button>
            {/* Menu */}
            <span className="shrink-0 md:hidden ml-2"> <MenuDetailsButton /></span>
            <ul className='hidden ml-6 space-x-4 text-gray-400 md:flex'>
                <li className='text-white'><a href="#">Home</a></li>
                <li ><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
        <div className='flex items-center mr-4 space-x-4 shrink-0'>
            {/* Search Bar */}
            <div className='ml-4 relative w-48 hidden lg:block shrink-0'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input className='block w-full text-sm border border-gray-400 rounded py-1.5 pl-10 pr-4 placeholder-gray-400 focus:outline-none' placeholder="Search" />
            </div>
            <div className='flex items-center space-x-3'>
                <span className='lg:hidden'><SearchButton /></span>
                {/* Message */}
                <MessageButton />
                {/* Notification */}
                <NotificationButton />
            </div>
            {/* Avatar */}
            <AvatarButton />
        </div>
    </div>
}

export default AppBar;