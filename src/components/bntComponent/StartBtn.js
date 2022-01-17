import Button from '../../UI/Button';
import styles from './StartBtn.module.css';

const NextBtn = ({ Raspredelyator, checked, bodyColor }) => {
  let color4 = `${styles.stop} ${
    bodyColor === '#437EA8' ? styles.btnlongBreaks : ''
  } ${bodyColor === '#468E91' ? styles.btnShortBreak : ''} `;
  return (
    <>
      <Button className={color4} onClick={Raspredelyator}>
        {checked ? 'STOP' : 'START'}
      </Button>
    </>
  );
};

export default NextBtn;
