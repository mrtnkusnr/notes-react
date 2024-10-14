import { FaPlus } from "react-icons/fa6";

const AddNoteButton = ({ handleModal }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-violet-600 hover:bg-violet-500 text-white font-bold p-4 rounded-full"
        onClick={handleModal}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddNoteButton;
