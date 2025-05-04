// src/components/SortFilter.js
import React, { useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const SortFilter = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("name-asc");

  const sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "population-asc", label: "Population (Low to High)" },
    { value: "population-desc", label: "Population (High to Low)" },
    { value: "area-asc", label: "Area (Small to Large)" },
    { value: "area-desc", label: "Area (Large to Small)" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    onSortChange(value);
    setIsOpen(false);
  };

  const selectedLabel = sortOptions.find(opt => opt.value === selectedOption)?.label || "Sort by";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all duration-200 min-w-[200px] shadow-sm"
      >
        <span>{selectedLabel}</span>
        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-left hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                  selectedOption === option.value 
                    ? 'bg-blue-600 text-white hover:bg-blue-600' 
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                <span>{option.label}</span>
                {selectedOption === option.value && <FiCheck className="text-white dark:text-blue-300" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;