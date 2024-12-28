import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Home = () => {
  const userDetails = useAppSelector(
    (state: RootState) => state.user.userDetails
  );
  return (
    <div>
      <h1 className="text-center font-bold bg-purple-600 text-white lg:text-xl py-2">
        Welcome {userDetails.name} !
      </h1>
    </div>
  );
};

export default Home;
