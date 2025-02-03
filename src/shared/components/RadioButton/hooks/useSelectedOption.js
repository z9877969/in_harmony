import { useState } from 'react';

const useSelectedOption = (initialOption) => {
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return { selectedOption, handleChange };
};

export default useSelectedOption;
