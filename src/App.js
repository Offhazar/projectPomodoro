import { Route } from 'react-router-dom';
import ColorPomo from './components/pages/PomoBreak';
import Pomodor from './components/Pomodoro';
import style from './App.module.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ModalPomo from './UI/ModalPomo';
import ModalOverlay from './components/modalOverlay/ModalOverlay';
import { useSelector } from 'react-redux';

function App() {
  const location = useLocation();
  const addres = location.pathname;
  const shortpage = addres === '/short';
  const longpage = addres === '/long';
  const isModal = useSelector((state) => state.show.showModal);
  return (
    <div
      className={`${style.box} ${shortpage && style.shortpage} ${
        longpage && style.longpage
      }`}
    >
      <Route path="/">
        <Pomodor />
      </Route>

      {isModal && (
        <ModalPomo>
          <ModalOverlay />
        </ModalPomo>
      )}
    </div>
  );
}

export default App;
