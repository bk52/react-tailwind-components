import DropdownButton from './DropdownButton';

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const dropMenu = <>
    <div className="flex justify-between items-center text-sm px-3 py-1 w-60">
        <span>Message</span>
        <a href="#">Clear All</a>
    </div>
    <div className='my-0.5 border-t border-gray-300'></div>
    <div className='h-48 overflow-y-auto'>
        <a href="#">
            <div className='flex bg-green-100 px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Joe Black</span> sent a message to you</div>
                    <div className="text-xs mt-1"><span>Just now</span></div>
                </div>
            </div>
        </a>
        <a href="#">
            <div className='flex bg-green-100 px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Emma Watson</span> sent a message to you</div>
                    <div className="text-xs mt-1"><span>5 minutes ago</span></div>
                </div>
            </div>
        </a>
        <a href="#">
            <div className='flex bg-green-100 px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Emma Watson</span> sent a message to you</div>
                    <div className="text-xs mt-1"><span>10 minutes ago</span></div>
                </div>
            </div>
        </a>
        <a href="#">
            <div className='flex bg-green-100 px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Emma Watson</span> sent a message to you</div>
                    <div className="text-xs mt-1"><span>15 minutes ago</span></div>
                </div>
            </div>
        </a>
    </div>
    <div className='my-0.5 border-t border-gray-300'></div>
    <div className="text-center text-sm py-2">
        <a href="#">View All</a>
    </div>
</>

const MessageButton = () => {
    return <DropdownButton icon={icon} badge={4} badgeColor={'bg-green-500'} dropMenu={dropMenu} />
}

export default MessageButton;