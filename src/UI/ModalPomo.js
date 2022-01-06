import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../components/modalOverlay/ModalOverlay';
import classes from './ModalPomo.module.css';

const Blackdrop = () => {
  return <div className={classes.blackDrop} />;
};

const ModalOverBy = (props) => {
  return (
    <div className={classes.boxes}>
      <div className={classes.modaloverly}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('modalPomo');
const portalPomo = document.getElementById('pomoModal');

const ModalPomo = (props) => {
  return (
    <Fragment>
      {createPortal(<Blackdrop />, portalElement)}
      {createPortal(<ModalOverBy>{props.children}</ModalOverBy>, portalPomo)}
    </Fragment>
  );
};

export default ModalPomo;
