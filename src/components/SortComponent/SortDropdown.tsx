import { useEffect, useRef, useState } from 'react';

interface SortDropdownProps<T> {
  options: T[];
  onSelect: (selected: T) => void;
  initialOption: T;
}

export const SortDropdown = <T,>({
  options,
  onSelect,
  initialOption,
}: SortDropdownProps<T>): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: T) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full  border border-1 border-icons text-primary bg-surface-2 h-10 text-sm text-left font-bold pl-3 pr-3 flex justify-between items-center hover:border-secondary focus:border-accent  "
      >
        {String(selectedOption)}
        {isOpen ? (
          <div className="inline-flex w-2.5 h-2.5 border-solid border-secondary border-l-[2px] border-t-[2px] rounded-sm rotate-45"></div>
        ) : (
          <div className="inline-flex w-2.5 h-2.5 border-solid border-secondary border-r-[2px] border-b-[2px] rounded-sm rotate-45"></div>
        )}
      </button>
      {isOpen && (
        <ul
          className="absolute mt-1 w-full bg-surface-0 border-2 border-elements shadow-lg"
          style={{ zIndex: 1 }}
        >
          {options.map((option) => (
            <li
              key={String(option)}
              className=" h-8 pl-3 flex items-center text-secondary  hover:bg-hover-bg cursor-pointer hover:text-primary"
              onClick={() => handleSelect(option)}
            >
              {String(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
