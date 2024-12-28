import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import IPrivateRouteProps from "@/types/privateRouteType";
import { Navigate } from "react-router";

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const userToken = useAppSelector((state: RootState) => state.user.token);

  if (!userToken) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <>{children}</>;
};

export default PrivateRoute;
