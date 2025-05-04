// src/components/StatusFilter.js
import React from "react";

const StatusFilter = ({ onStatusChange }) => {
  const statusOptions = [
    { value: "", label: "All Statuses" },
    { value: "independent", label: "Independent" },
    { value: "unMember", label: "UN Member" },
  ];

  return (
    <div className="flex items-center">
      <label htmlFor="status" className="mr-2 text-sm font-medium text-gray-700">
        Status:
      </label>
      <select
        id="status"
        onChange={(e) => onStatusChange(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;