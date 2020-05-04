import React from 'react';
import './styles.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import question from '../../assets/svg/question.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ isOpen, handleClose }) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      fullWidth={'md'}
    // aria-labelledby="alert-dialog-slide-title"
    // aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent className='modal'>
        <div>
          <img src={question} alt="" />
          <span>Deseja responder essa pergunta agora?</span>
        </div>
        <div>
          <button type="button" className="button-cancel" onClick={handleClose}>Depois</button>
          <button type="button" className="button" onClick={handleClose}>Sim</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
