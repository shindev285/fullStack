import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa6";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import HeaderTop from "./HeaderTop";
import { LuShoppingCart } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import SearchBox from "./SearchBox/SearchBox";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logo-wraper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part-2">
              <CountryDropdown />

              {/* Header Search start here */}
              <SearchBox />
              {/* Header Search end here */}
              <div className="part-3 d-flex align-items-center ml-auto ">
                <Button className="circle mr-3 ">
                  <FaRegUser />
                </Button>
                <div className="cart-item ml-auto d-flex align-items-center">
                  <span className="price">$3.35</span>
                  <div className="position-relative ml-2">
                  <Button className="circle ">
                    <CiShop />
                  </Button>
                  <span className="count d-flex align-items-center justify-center">
                    6
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 nav-part-1">
              <Button className="all-CatTab">
                <span className="text">All Categories</span>
              </Button>
            </div>
            <div className="col-sm-9 nav-part-2">

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
