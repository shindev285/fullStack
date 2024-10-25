import React from "react";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";
const SearchBox = () => {
  return (
    <>
      <div className="header-search ml-3 mr-3">
      <input type="text" placeholder="search here..." />
      <Button>
        <IoSearch />
      </Button>
    </div>
    </>
  );
};

export default SearchBox;
