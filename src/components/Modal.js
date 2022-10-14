import styles from './styles/Card.css';



function Modal(props) {

    function confirmHandler() {
        props.onConfirm();
    }
    return <div className='Modal'>
        <h1>Example Popup</h1>
        <button onClick={confirmHandler}>Close The Modal</button>
    </div>
}

export default Modal;