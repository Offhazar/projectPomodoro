import { useSelector } from 'react-redux';
import PomoFocus from './PomoFocus';
import styles from './ShortBreak.module.css';
import vector from '../../assets/Vector.png';

const ShortBreak = (props) => {
  const { minutes, seconds } = useSelector(
    (state) => state.settings['SHORT_BREAK']
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
export default ShortBreak;
