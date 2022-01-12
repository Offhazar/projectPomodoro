// import styles from '../components/pages/TimerValue.module.css';
import styles from '../bntComponent/Pomodor.module.css';
import Button from '../../UI/Button';

const Pomodoros = ({ changeTimer, bodyColor, pomodorosNext }) => {
  let color1 = `${styles.btnFoces} ${
    bodyColor === '#DB524D' ? styles.btnPomoBg : ''
  }`;
  return (
    <>
      <Button className={color1} onClick={() => changeTimer(pomodorosNext)}>
        Pomodoro
      </Button>
    </>
  );
};

export default Pomodoros;
