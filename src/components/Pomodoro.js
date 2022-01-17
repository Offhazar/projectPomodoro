import './Pomodor.css';
import Navbar from './navbar/Navbar';
import TimerValue from './pages/TimerValue';

const Pomodor = () => {
  return (
    <div className="container">
      <Navbar />
      <TimerValue />
    </div>
  );
};

export default Pomodor;
