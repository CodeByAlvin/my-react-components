import ModalComponent from "./c";

const Modal = () => {

  const showModal = () => {
    ModalComponent.show();
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <button onClick={showModal}>show madal</button>
      <ModalComponent />
    </div>
  )
};


export default Modal;