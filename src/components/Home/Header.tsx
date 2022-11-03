import React from "react";
import { useMediaQuery } from "@mui/material";
import logo from "../../Assets/Home/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import DragHandleIcon from "@mui/icons-material/DragHandle";
const Header = () => {
  const lmd = useMediaQuery("(min-width:924px)");
  const md = useMediaQuery("(min-width:768px)");

  return (
    <>
      <div className="flex items-center justify-between md:justify-start">
        <div className="flex items-center">
          <DragHandleIcon
            sx={{
              fontSize: 40,
              display: `${md && "none"}`,
              color: "white",
              cursor: "pointer",
            }}
          />
          <div className="ml-4">
            <img className="" src={logo} alt="home" />
          </div>
        </div>

        <div className="ml-14 flex">
          <SearchIcon
            sx={{
              fontSize: 30,
              color: "white",
              cursor: "pointer",
            }}
          />
          <input
            className=" hidden outline-none text-white md:block px-2 bg-transparent "
            type="search"
            name=""
            placeholder="Search artist"
            id=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
