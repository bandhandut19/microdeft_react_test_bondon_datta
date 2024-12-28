import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router";
const PrimaryLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default PrimaryLayout;
