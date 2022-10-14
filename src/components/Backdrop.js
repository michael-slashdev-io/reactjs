import styles from './styles/Card.css';



function Backdrop (props) {
    return <div className="Backdrop" onClick={props.onClick}></div>;
}

export default Backdrop;