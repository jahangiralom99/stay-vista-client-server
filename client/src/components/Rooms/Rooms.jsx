/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import Heading from "../Shared/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const searchCategory = params.get("category");

  useEffect(() => {
    setLoading(true);
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (searchCategory) {
          const filter = data.filter(
            (item) => item.category === searchCategory
          );
          setRooms(filter);
        } else setRooms(data);
        setLoading(false);
      });
  }, [searchCategory]);

  if (loading) return <Loader />;

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms?.map((room) => (
            <RoomCard key={room._id} room={room}></RoomCard>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h[calc(100vh-300px)]">
          <Heading
            center={true}
            subtitle={"Please Select Other Category"}
            title={"No Rooms Available in the Category!"}
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
