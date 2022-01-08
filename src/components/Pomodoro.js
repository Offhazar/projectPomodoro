import './Pomodor.css';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import { Route } from 'react-router-dom';

const Pomodor = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
};

export default Pomodor;
