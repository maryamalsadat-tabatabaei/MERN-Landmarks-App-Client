import ReactDOM from "react-dom";
import "./ModalOverlay.css";

const ModalOverlay = (props) => {
  const modalContenet = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        {props.header}
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(
    modalContenet,
    document.getElementById("modal-hook")
  );
};

export default ModalOverlay;
