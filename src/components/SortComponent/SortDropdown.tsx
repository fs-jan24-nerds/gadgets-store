import React, { useState } from 'react';
import { SortStatus } from '../../types/enums';

interface SortDropdownProps {
  options: SortStatus[];
  onSelect: (selected: SortStatus) => void;
  initialOption?: SortStatus;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: SortStatus) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-[136px]  border border-1 border-icons  md:w-[176px]  h-10 text-sm text-left font-bold pl-3 pr-3 flex justify-between items-center hover:border-secondary focus:border-primary  "
      >
        {selectedOption}
        {isOpen ? (
          <div className="inline-flex w-2.5 h-2.5 border-solid border-elements border-l-[2px] border-t-[2px] rounded-sm rotate-45"></div>
        ) : (
          <div className="inline-flex w-2.5 h-2.5 border-solid border-elements border-r-[2px] border-b-[2px] rounded-sm rotate-45"></div>
        )}
      </button>
      {isOpen && (
        <ul
          className="absolute  mt-1 w-[176px] p-2 pl-3 bg-white border-2 border-elements  shadow-lg"
          style={{ zIndex: 1 }}
        >
          {options.map((option) => (
            <li
              key={option}
              className=" h-8 flex items-center text-secondary  hover:bg-hover-bg cursor-pointer hover:text-primary"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
