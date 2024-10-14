import { useState } from "react";
import Button from "./Button";

type FilterProps = {
  handleFilterPinned: () => void;
  handleResetFilter: () => void;
};

const Filter: React.FC<FilterProps> = ({
  handleFilterPinned,
  handleResetFilter,
}) => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="flex text-lg mb-4 gap-4">
      <Button
        isActive={activeButton === "button1"}
        onClick={() => {
          handleResetFilter();
          handleButtonClick("button1");
        }}
        label="All Notes"
      />

      <Button
        isActive={activeButton === "button2"}
        onClick={() => {
          handleFilterPinned();
          handleButtonClick("button2");
        }}
        label="Pinned"
      />
    </div>
  );
};

export default Filter;
