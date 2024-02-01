import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";

const RoomDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find((item) => item._id === id);
        setRooms(singleData);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  console.log(rooms);

  return (
    <Container>
      <div>
              <h1> {rooms?.location}</h1>
      </div>
    </Container>
  );
};

export default RoomDetails;
