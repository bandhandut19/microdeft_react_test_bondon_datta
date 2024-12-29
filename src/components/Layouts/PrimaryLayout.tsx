import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router";
const PrimaryLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PrimaryLayout;
