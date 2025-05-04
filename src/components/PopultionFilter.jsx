// src/components/PopulationFilter.js
import React, { useState } from "react";

const PopulationFilter = ({ onPopulationFilter }) => {
  const [minPopulation, setMinPopulation] = useState("");
  const [maxPopulation, setMaxPopulation] = useState("");

  const handleApply = () => {
    onPopulationFilter({
      min: minPopulation ? parseInt(minPopulation) : null,
      max: maxPopulation ? parseInt(maxPopulation) : null,
    });
  };

  const handleReset = () => {
    setMinPopulation("");
    setMaxPopulation("");
    onPopulationFilter({ min: null, max: null });
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-medium mb-2">Population Range</h3>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min"
          value={minPopulation}
          onChange={(e) => setMinPopulation(e.target.value)}
          className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <span>to</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPopulation}
          onChange={(e) => setMaxPopulation(e.target.value)}
          className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <button
          onClick={handleApply}
          className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PopulationFilter;