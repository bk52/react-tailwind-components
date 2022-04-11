import styles from './SwitchDayNight.module.css';
import cn from 'classnames';

const SwitchDayNight = ({ onChange }) => {
    return <label className={styles.switch}>
        <input type="checkbox" onChange={onChange} />
        <span className={cn(styles.slider, styles.round)}></span>
    </label>
}

export default SwitchDayNight;