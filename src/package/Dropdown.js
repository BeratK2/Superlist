import React from "react";
import "./index.css";
import { colleges } from "./super-lists";
import { usCitiesTowns } from "./super-lists";

const Dropdown = ({
  label,
  placeholder,
  isRequired,
  value,
  onChange,
  list,
  id,
  name
}) => {  
  var dropdownItems;
  if(list === "college" || "colleges"){
    dropdownItems = colleges
  }
  if(list === "uct"){
    dropdownItems = usCitiesTowns
  }
 
  console.log(dropdownItems)
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        width: "30%",
        textAlign: "start",
      }}
    >
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name="HI"
        type="text"
        list={dropdownItems}
        required={isRequired}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: "15px 30px",
          margin: "10px 0",
          fontSize: "15px",
          border: "solid 2px rgb(219, 219, 219)",
          borderRadius: "10px",
          outline: "none",
        }}
      />
      <datalist id={dropdownItems}>
        {dropdownItems.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </datalist>
    </section>
  );
};

export default Dropdown;
