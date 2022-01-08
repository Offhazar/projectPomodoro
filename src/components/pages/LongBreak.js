import { useSelector } from 'react-redux';
import styles from './LongBreak.module.css';
import vector from '../../assets/Vector.png';
import PomoFocus from './PomoFocus';

const LongBreak = (props) => {
  const { minutes, seconds } = useSelector(
    (state) => state.settings['LONG_BREAK']
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
export default LongBreak;
