import classes from './Main.module.css';
import vector from '../../assets/Vector.png';

const Main = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.btnKing}>
          <button className={classes.btnFoces}>Pomofocus</button>
          <button className={classes.btnShort}>Short Break</button>
          <button className={classes.btnLong}>Long Break</button>
        </div>
        <div>
          <div className={classes.timer}>25 00</div>
        </div>
        <div className={classes.btnStop}>
          <button className={classes.stop}> stop</button>
          <img src={vector} />
        </div>
      </div>
    </>
  );
};

export default Main;
