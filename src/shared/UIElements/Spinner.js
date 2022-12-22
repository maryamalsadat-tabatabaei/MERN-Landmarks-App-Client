import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"} center`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
