import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

export default function CustomSelect({
  options,
  placeholder = "Selecione atividade",
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (item: Option) => {
    setSelected(item);
    setOpen(false);
    onChange?.(item.value);
  };

  return (
    <div className="custom-select">
      <div
        className={`custom-select__header ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <SlArrowDown className="icon" />
      </div>

      <div className="custom-select__list">
        {open && (
          <ul>
            {options.map((item) => (
              <li
                key={item.value}
                className={selected?.value === item.value ? "selected" : ""}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
