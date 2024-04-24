import React, { useState } from 'react';
import { LIMITS } from '../../types/constants';

interface ItemsDropdownProps {
  options: string[];
  onSelect: (selected: string) => void;
  initialOption?: number;
}

export const ItemsDropdown: React.FC<ItemsDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[1]);

  const handleSelect = (option: string) => {
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
        className="w-[136px] border border-1 border-icons md:w-[128px] h-10 text-sm text-left font-bold pl-3 pr-3 flex justify-between items-center hover:border-secondary focus:border-primary  "
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
          className="absolute mt-1 w-[128px] p-2 pl-3 bg-white border-2 border-elements  shadow-lg"
          style={{ zIndex: 1 }}
        >
          {LIMITS.map((option) => (
            <li
              key={option}
              className="h-8 flex items-center text-secondary  hover:bg-hover-bg cursor-pointer hover:text-primary"
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
