import React, { useState } from 'react';

const OnChange = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  return (
    <div>
      <label>
        Choose an option:
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default OnChange;

