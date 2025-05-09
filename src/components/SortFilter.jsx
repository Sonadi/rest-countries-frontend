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
        className={`flex items-center justify-between gap-4 bg-blue-900/80 backdrop-blur-sm border-2 border-blue-400/30 rounded-xl px-5 py-4 text-lg font-semibold text-blue-50 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition-all duration-200 min-w-[260px] shadow-xl ${
          isOpen ? 'ring-4 ring-blue-500' : ''
        }`}
      >
        <span className="truncate">{selectedLabel}</span>
        <FiChevronDown 
          size={20}
          className={`transition-transform duration-200 text-blue-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-3 w-full bg-blue-900/95 backdrop-blur-sm border-2 border-blue-400/30 rounded-xl shadow-2xl overflow-hidden">
          <div className="py-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`flex items-center justify-between w-full px-5 py-4 text-lg font-semibold transition-colors duration-150 ${
                  selectedOption === option.value
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-100 hover:bg-blue-800/80'
                }`}
              >
                <span>{option.label}</span>
                {selectedOption === option.value && (
                  <FiCheck size={20} className="text-blue-200" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;//