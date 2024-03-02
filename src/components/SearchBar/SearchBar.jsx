import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        type="text"
        className={s.input}
        placeholder="Search a TV show you may like"
        value={value}
      />
    </div>
  );
}
