import classes from './Main.module.css';
import vector from '../../assets/Vector.png';
import PomoFocus from '../pages/PomoFocus';
import { Route } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.btnKing}>
          <Route path="/">
            <PomoFocus />
          </Route>
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
