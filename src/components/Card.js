import { useState } from 'react';
import styles from './styles/Card.css';
import Modal from '../components/Modal';
import Backdrop from '../components/Backdrop';

function Card(props) {
  const [ ModalIsOpen, SetModalIsOpen ] = useState(false);
  
  function CloseModalHandler (){
    SetModalIsOpen(false);
  }
  
  function buttonHandler(){
      console.log(props.text);
      SetModalIsOpen(true);
    }

    return (
        <div className='Card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={buttonHandler}>{props.button}</button>
        </div>
        {ModalIsOpen && <Modal onConfirm={CloseModalHandler}/>}
        {ModalIsOpen && <Backdrop onClick={CloseModalHandler}/>}
      </div>  
    );
}

export default Card;