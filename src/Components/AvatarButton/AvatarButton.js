const AvatarButton = () => {
    return <div className='relative inline-block group'>
        <button className='shrink-0'>
            <img className='w-8 h-8 rounded-full' alt="avatar" src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80" />
        </button>
        <div className='hidden absolute bg-white border border-gray-300 min-w-[160px] shadow-lg right-0 mt-2 z-10 rounded-md group-hover:block'>
            <div className='bg-white w-4 h-4 rotate-45 absolute -mt-2 right-2 border-l border-t border-gray-300'></div>
            <a className='text-gray-500 px-3 py-2 no-underline block hover:text-gray-800' href="#">
                <div className='text-xs'>Welcome</div>
                <div className='text-xs text-black font-medium mt-1'>Barış KARAMUSTAFA</div>
            </a>
            <div className='my-0.5 border-t border-gray-300'></div>
            <a className='text-gray-500 px-3 py-2 no-underline block hover:text-gray-800' href="#">
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className='ml-1 text-sm'>Settings</span>
                </div>
            </a>
            <a className='text-gray-500 px-3 py-2 no-underline block hover:text-gray-800' href="#">
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className='ml-1 text-sm'>Logout</span>
                </div>
            </a>
        </div>
    </div>
}

export default AvatarButton;