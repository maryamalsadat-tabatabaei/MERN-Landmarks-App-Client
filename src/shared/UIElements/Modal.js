import { CSSTransition } from "react-transition-group";
import ModalOverlay from "./ModalOverlay";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200}>
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};
export default Modal;
