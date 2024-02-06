import React from "react";
import { DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = ({ toggleDropdown, selectedItem }) => {
  return (
    <button onClick={toggleDropdown}>
      {selectedItem ? selectedItem : "Dropdown Button"}
    </button>
  );
};

const DropdownMenu = ({ items, selectedItem, selectItem, toggleDropdown }) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          onClick={() => {
            selectItem(item);
            toggleDropdown(false);
          }}
          key={item}
        >
          {item === selectedItem ? item : item}
        </li>
      ))}
    </ul>
  );
};

const Dropdown = ({ items }) => {
  const { isOpen, selectedItem, toggleDropdown, selectItem } = useDropdown();
  return (
    <DropdownProvider>
      <div>
        <DropdownButton
          selectedItem={selectedItem}
          toggleDropdown={toggleDropdown}
        />
        {isOpen && (
          <DropdownMenu
            selectItem={selectItem}
            items={items}
            selectedItem={selectedItem}
            toggleDropdown={toggleDropdown}
          />
        )}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
