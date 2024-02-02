/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservation = ({ room }) => {
  return (
    <div className="border-[1px] p-5 rounded-xl overflow-hidden border-neutral-200 bg-white">
      <div className="flex flex-row items-center gap-1 p-4">
      <div className='text-2xl font-semibold'>$ {room.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
          <div className="justify-center">
          <Calender />
          </div>
          <hr />
      <div className='p-4'>
        <Button label='Reserve' />
      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
              <div>Total </div>
              <div> $ {room.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
