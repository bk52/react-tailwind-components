import DropdownButton from './DropdownButton';

const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>

const dropMenu = <>
    <div className="flex justify-between items-center text-sm px-3 py-1 w-60">
        <span>Notifications</span>
        <a href="#">Clear All</a>
    </div>
    <div className='my-0.5 border-t border-gray-300'></div>
    <div className='h-48 overflow-y-auto'>
        <a href="#">
            <div className='flex bg-red-100 px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Joe Black</span> replied to your comment</div>
                    <div className="text-xs mt-1">💬 <span>Just now</span></div>
                </div>
            </div>
        </a>
        <a href="#">
            <div className='flex bg-red-100 px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Emma Watson</span> like your post</div>
                    <div className="text-xs mt-1">👍 <span>5 minutes ago</span></div>
                </div>
            </div>
        </a>
        <a href="#">
            <div className='flex px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Emma Watson</span> like your post</div>
                    <div className="text-xs mt-1">👍 <span>10 minutes ago</span></div>
                </div>
            </div>
        </a>
        <a href="#">
            <div className='flex px-3 py-2'>
                <img className="w-6 h-6 rounded-full" alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
                <div className="text-sm ml-2">
                    <div><span className="font-bold">Emma Watson</span> like your post</div>
                    <div className="text-xs mt-1">👍 <span>15 minutes ago</span></div>
                </div>
            </div>
        </a>
    </div>
    <div className='my-0.5 border-t border-gray-300'></div>
    <div className="text-center text-sm py-2">
        <a href="#">View All</a>
    </div>
</>

const NotificationButton = () => {
    return <DropdownButton icon={icon} badge={2} badgeColor={'bg-red-500'} dropMenu={dropMenu} />
}

export default NotificationButton;