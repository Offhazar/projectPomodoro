import Pomodor from './components/Pomodoro';
import style from './App.module.css';
import { useSelector } from 'react-redux';

function App() {
  const isModal = useSelector((state) => state.show.showModal);

  return (
    <div className={style.box}>
      <Pomodor />
    </div>
  );
}

export default App;
