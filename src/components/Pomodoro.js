import './Pomodor.css';
import Navbar from './navbar/Navbar';
import Main from './main/Main';

const Pomodor = () => {
  return (
    <div className="container">
      <div>
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Pomodor;
