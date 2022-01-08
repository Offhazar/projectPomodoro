import { useSelector } from 'react-redux';
import styles from './PomoBreak.module.css';
import vector from '../../assets/Vector.png';
import PomoFocus from './PomoFocus';

const PomoBreak = (props) => {
  const { minutes, seconds } = useSelector(
    (state) => state.settings['POMODOR']
  );
  return (
    <div className={styles.mainContainer}>
      <div className={styles.btnKing}>
        <PomoFocus />
      </div>
      <div>
        <div className={styles.timer}>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
      <div className={styles.btnStop}>
        <button className={styles.stop}> stop</button>
        <img src={vector} />
      </div>
    </div>
  );
};
export default PomoBreak;
