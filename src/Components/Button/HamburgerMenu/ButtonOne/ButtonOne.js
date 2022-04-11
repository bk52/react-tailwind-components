import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './ButtonOne.module.css';

const ButtonOne = ({ onStatusChange, openColor = 'bg-gray-600', closeColor = 'bg-red-600' }) => {
    const [open, setOpen] = useState(false)

    const toggleState = () => {
        setOpen(prev => !prev);
    }

    useEffect(() => {
        onStatusChange && onStatusChange(open)
    }, [open])

    return <div className={cn(styles.navIcon, `${open ? styles.open : ''}`)} onClick={toggleState}>
        <span className={`${open ? closeColor : openColor}`}></span>
        <span className={`${open ? closeColor : openColor}`}></span>
        <span className={`${open ? closeColor : openColor}`}></span>
    </div>
}

export default ButtonOne;
