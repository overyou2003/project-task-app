"use client";

import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { SingleValue, ActionMeta } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function MyCreatableSelect() {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (
    newValue: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOption(newValue);
    console.log("Value ที่ได้:", newValue?.value);
  };

  return (
    <div className="max-w-full mx-auto">
      <CreatableSelect
        isClearable
        options={options}
        onChange={handleChange}
        value={selectedOption}
        placeholder="Select or type to add..."
        formatCreateLabel={(inputValue) => `Create new role "${inputValue}"`}
        classNames={{
          control: (state) =>
            state.isFocused ? "border-gray-500 shadow-lg" : "border-gray-300",
        }}
      />
    </div>
  );
}
