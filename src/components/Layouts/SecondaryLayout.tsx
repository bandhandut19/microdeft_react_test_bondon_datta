import { Outlet } from "react-router";

const SecondaryLayout = () => {
  return (
    <div className="bg-purple-300 min-h-screen flex items-center justify-center">
      <Outlet></Outlet>
    </div>
  );
};

export default SecondaryLayout;
