// Component that's responsible with rendering a "Modal"/Overlay

function Modal(props) {
  function cancelHandler() {
      props.onCancel();
  }

  function confirmHandler() {
      props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      {/* The class names here are just from the index.css file, done so it matches up 
        the reason it has to be onClick here and we can't change it is because button is built in function
        also you could've put "props.onCancel" instead of making a function if you wanted*/}
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
