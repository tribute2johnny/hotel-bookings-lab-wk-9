import BookingCard from "./BookingCard";

const BookingsList = ({bookings, removeBooking}) => {
    const bookingsGrid = bookings.map((booking) => {
        return <BookingCard booking={booking} key={booking._id} removeBooking={removeBooking}/>
    });

    return(
        <>
            {bookingsGrid}
        </>
    )
}

export default BookingsList;