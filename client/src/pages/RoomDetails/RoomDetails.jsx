import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState({});

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
      <Helmet>
        <title>{rooms?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        {/* header  */}
        <Header roomData={rooms}></Header>
        <div className="grid grid-cols-1 md:grid-cols-7 items-center justify-center gap-6 mt-7">
          {/* Room Info */}
          <RoomInfo roomData={rooms} />
          <div className="md:col-span-3 order-first md:order-last ">
            {/* RoomReservation */}
            <RoomReservation room={rooms} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
