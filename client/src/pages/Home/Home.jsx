import Category from "../../components/Rooms/Categories/Category";
import Rooms from "../../components/Rooms/Rooms";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Category />
      <Rooms></Rooms>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/gJLVTKhTnog?si=bHZLimud3AYtwM5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  );
};

export default Home;
