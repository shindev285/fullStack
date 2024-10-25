
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
const CountryDropdown = () => {
  return (
    <>
      <Button className="country-dropdown">
        <div className="info d-flex flex-column">
          <span className="lable">your location</span>
          <span className="name">Nghe An</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>
    </>
  );
};

export default CountryDropdown;
