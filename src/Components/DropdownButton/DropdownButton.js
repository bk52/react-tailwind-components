import cn from 'classnames';

const DropdownButton = ({ icon, badge, badgeColor, dropMenu, contentSide = 'right' }) => {
    return <div className='relative inline-block group'>
        <button className='relative w-6 h-6 text-gray-400 shrink-0 hover:text-white'>
            {icon}
            <div className={`absolute -mt-7 ml-3 w-4 h-4 rounded-full text-white text-xs shrink-0 ${badgeColor}`}>{badge}</div>
        </button>
        <div className={cn(
            `hidden absolute bg-white border border-gray-300 shadow-lg mt-2 z-10 rounded-md group-hover:block`,
            contentSide === 'right' ? 'right-0' : 'left-0'
        )}>
            <div className={cn(
                `bg-white w-4 h-4 rotate-45 -z-10  absolute -mt-2 border-l border-t border-gray-300`,
                contentSide === 'right' ? 'right-1' : 'left-1')}></div>
            {dropMenu}
        </div>
    </div>
}

export default DropdownButton;