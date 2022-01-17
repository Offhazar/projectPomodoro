import styles from '../bntComponent/Long.module.css';
// import styles from '../components/pages/TimerValue/module.css';
import Button from '../../UI/Button';

const Long = ({ changeTimer, bodyColor, longNext }) => {
  let color3 = `${styles.btnLong} ${
    bodyColor === '#437EA8' ? styles.btnLongBg : ''
  }`;
  return (
    <>
      <Button className={color3} onClick={() => changeTimer(longNext)}>
        Long Break
      </Button>
    </>
  );
};

export default Long;
