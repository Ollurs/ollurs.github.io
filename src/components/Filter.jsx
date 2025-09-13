import { useState } from "react";

const useFilter = (items) => {
  const [selectedCriteria, setSelectedCriteria] = useState([]);

const filterFunction = (item, selectedTech) => {
    return selectedTech.some((filter) => item.filter.includes(filter));
};

  const toggleCriteria = (criteria) => {
    setSelectedCriteria((prev) =>
      prev.includes(criteria) ? prev.filter((c) => c !== criteria) : [...prev, criteria]
    );
  };

  const filteredItems = selectedCriteria.length
    ? items.filter((item) => filterFunction(item, selectedCriteria))
    : items;

  return { filteredItems, selectedCriteria, toggleCriteria };
};

export default useFilter;