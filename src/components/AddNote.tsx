import { useEffect, useRef, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

const AddNote = ({ handleAddNote }) => {
  const textAreaRef = useRef(null);
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSaveClick = () => {
    if (value.trim().length > 0) {
      handleAddNote(value);
      setValue("");
    }
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [value]);

  return (
    <div className="note break-inside flex flex-col bg-white rounded-lg shadow-md p-4 mb-4">
      <div>
        <textarea
          className="flex-auto inline-block min-w-auto w-full text-gray-900 outline-none focus:outline-none resize-none align-top"
          value={value}
          onChange={handleChange}
          rows={4}
          ref={textAreaRef}
          placeholder="Write your thoughts here..."
        />
        <div className="note-footer flex flex-grow-0 justify-end mt-4">
          <FaCirclePlus
            className="add-icon cursor-pointer hover:text-slate-500 transition duration-200 ease-in-out"
            onClick={handleSaveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNote;
