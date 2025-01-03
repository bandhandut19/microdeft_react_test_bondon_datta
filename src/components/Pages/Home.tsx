import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Banner from "../UI/Banner";
import { sliderPhotos } from "../utils/sliderPhotos";
import FeaturedCourses from "../UI/FeaturedCourses";
import NewCourses from "../UI/NewCourses";

const Home = () => {
  const userDetails = useAppSelector(
    (state: RootState) => state.user.userDetails
  );
  return (
    <div className="min-h-screen">
      {userDetails?.email ? (
        <h1 className="text-center font-bold bg-purple-600 text-white lg:text-xl py-2">
          Welcome {userDetails.name} !
        </h1>
      ) : (
        ""
      )}
      <div className="overflow-hidden">
        <Banner sliderPhotos={sliderPhotos}></Banner>
      </div>
      <div className="lg:px-10">
        <FeaturedCourses></FeaturedCourses>
        <NewCourses></NewCourses>
      </div>
    </div>
  );
};

export default Home;
