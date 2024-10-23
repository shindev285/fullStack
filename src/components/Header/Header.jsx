import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import HeaderTop from "./HeaderTop";
import { LuShoppingCart } from "react-icons/lu";
const Header = () => {
  return (
    <>
      <div className="wraper">
        <HeaderTop/>
        <header className="header">
          <div className="container">
            <div className="flex items-center justify-between px-1 my-[25px]">
              <div className="logo ">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-cover" />
                </Link>
              </div>
              <CountryDropdown />
              <div className="search">
                <form>
                  <input
                    type="text"
                    placeholder="Search for anything...."
                    name="search"
                  />
                  <button type="submit">
                    <IoSearch />
                  </button>
                </form>
              </div>
              <div className="user">
                <Button
                  variant="contained"
                  startIcon={<FaRegUser />} 
                >
                  Login
                </Button> 
              </div>
              <div className="header-cart  ">
                <Button className="fa-center"
                  variant="contained"
                  startIcon={<LuShoppingCart />} 
                >
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
