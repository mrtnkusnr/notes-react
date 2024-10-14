import { FaXmark } from "react-icons/fa6";

const Tag = () => {
  return (
    <div className="flex w-fit items-center justify-between mb-4 py-1 px-1 bg-violet-600 text-white rounded-md text-xs">
      <span className="inline-block px-1">Personal</span>
      <div>
        <FaXmark className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Tag;
