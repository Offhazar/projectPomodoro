// import styles from '../components/pages/TimerValue.module.css';
import styles from '../bntComponent/Short.module.css';
import Button from '../../UI/Button';

const Short = ({ changeTimer, bodyColor, shortNext }) => {
  let color2 = `${styles.btnShort} ${
    bodyColor === '#468E91' ? styles.btnShortBg : ''
  }`;
  return (
    <>
      <Button className={color2} onClick={() => changeTimer(shortNext)}>
        Short Break
      </Button>
    </>
  );
};

export default Short;
