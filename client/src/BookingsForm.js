import {useState} from "react";
import { postBooking } from "./BookingService";


const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        Email: "",
        status: true,
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })

        setFormData({
            name: "",
            Email: "",
            status: "",
        });
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form">
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name: </label>
                <input
                onChange={onChange}
                type="text"
                id="name"
                name="name"
                value={formData.name} required/>
            </div>
            <div className="formWrap">
                <label htmlFor="Email">Email: </label>
                <input
                onChange={onChange}
                type="text"
                id="Email"
                name="Email"
                value={formData.Email} required/>
            </div>
            <div className="formWrap">
                <label htmlFor="status">Checked In:</label>
                <input
                onChange={onChange} 
                type="checkbox"
                id="status"
                name="status"
                value={formData.status}/>

            </div>

            <input type="submit" value="Save" id="save"/>

        </form>
    );
}

export default BookingsForm;