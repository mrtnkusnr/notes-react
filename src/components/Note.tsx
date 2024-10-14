import { useState, useEffect, useRef } from "react";
import {
  FaTrashCan,
  FaPenToSquare,
  FaCirclePlus,
  FaThumbtack,
} from "react-icons/fa6";
import Tag from "./Tag";

const Note = ({
  id,
  content,
  date,
  isPinned,
  handleDeleteNote,
  handlePin,
  notes,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const [newDate, setNewDate] = useState(date);
  const textAreaRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setNewContent(event.target.value);
    setNewDate(newDate);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";

      textAreaRef.current.focus();
      const length = textAreaRef.current.value.length;
      textAreaRef.current.setSelectionRange(length, length);
    }
  }, [newContent, isEditing]);

  return (
    <div className="note break-inside flex flex-col bg-white rounded-lg shadow-md p-4 mb-4">
      {isEditing ? (
        <div>
          <textarea
            className="flex-auto inline-block min-w-auto pb-4 w-full text-gray-900 outline-none focus:outline-none resize-none align-top"
            value={newContent}
            onChange={handleChange}
            rows={4}
            onBlur={handleBlur}
            ref={textAreaRef}
          />
          <div className="note-footer flex flex-grow-0 justify-end">
            <FaCirclePlus className="add-icon cursor-pointer hover:text-slate-500 transition duration-200 ease-in-out" />
          </div>
        </div>
      ) : (
        <div>
          <Tag />
          <p className="flex-auto inline-block w-fit min-w-auto h-24">
            {newContent}
          </p>
          <div className="note-footer flex-auto flex flex-grow-0 justify-between mt-4">
            <span className="text-xs "> {newDate.toLocaleDateString()} </span>
            <div className="flex space-x-4">
              <FaPenToSquare
                className="cursor-pointer hover:text-slate-500 transition duration-200 ease-in-out"
                onClick={handleEdit}
              />
              <FaThumbtack
                className={
                  isPinned
                    ? "cursor-pointer text-violet-600 hover:text-violet-500 transition duration-200 ease-in-out"
                    : "cursor-pointer hover:text-slate-500 transition duration-200 ease-in-out"
                }
                onClick={() => handlePin(id)}
              />
              <FaTrashCan
                className="delete-icon cursor-pointer hover:text-slate-500 transition duration-300 ease-in-out"
                onClick={() => handleDeleteNote(id)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
