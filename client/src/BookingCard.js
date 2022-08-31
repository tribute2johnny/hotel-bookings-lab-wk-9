import { deleteBooking } from "./BookingService";

const BookingCard = ({booking, removeBooking}) => {
    console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    return (
        <>
        <h1>{booking.name}</h1>
        <p>Email: {booking.Email}</p>
        <p>{booking.status? 'Checked In': 'Checked Out'}</p>
        <button>{booking.status? 'Check Out': 'Check In'}</button>
        <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default BookingCard;