import { useState, useEffect } from "react";
import './App.css';
import BookingsList from "./BookingList";
import { getBookings } from "./BookingService";
import BookingsForm from "./BookingsForm";


function App() {

  const [hotelBookings, setHotelBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setHotelBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    const temp = hotelBookings.map(s => s);
    temp.push(booking);
    setHotelBookings(temp);
  }

  const removeBooking = (id) => {
    const temp = hotelBookings.map(s => s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setHotelBookings(temp);
  }

  return (
    <>
    <BookingsForm addBooking={addBooking}/>
    <BookingsList bookings={hotelBookings} removeBooking={removeBooking}/>
    </>
  );
}

export default App;
