import { FaXmark } from "react-icons/fa6";

const Modal = ({ handleModal }) => {
  return (
    <div className="modal-background fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="modal-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-lg z-50">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <FaXmark className="cursor-pointer" onClick={handleModal} />
      </div>
    </div>
  );
};

export default Modal;
