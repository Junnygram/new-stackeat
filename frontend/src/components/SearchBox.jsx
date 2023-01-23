import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
    <>
      <AiOutlineSearch
        size={25}
        className="text-[#fa8517]"
        onSubmit={submitHandler}
      />
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent p-2 w-full focus:outline-none text-white"
        placeholder="Search foods"
      />
    </>
  );
}
