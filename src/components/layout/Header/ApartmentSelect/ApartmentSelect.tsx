"use client";

import cn from "classnames";
import Select from "react-select";

import cls from "./ApartmentSelect.module.scss";
import { useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const ApartmentSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />
    </>
  );
};
