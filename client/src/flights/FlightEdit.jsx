import { useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import { useState } from "react";
function FlightEdit() {
 const [flight, setFlight] = useState({
            id: "",
            number: "",
            airline_name: "",
            source: "",
            destination: "",
            capacity: 0,
            price: 0.0
        });

        const onBoxChange = (event) => {
            const { id, value } = event.target;
            setFlight((prevFlight) => ({
                ...prevFlight,
                [id]: id === "capacity" || id === "price" ? parseFloat(value) || 0 : value
            }));
        };
        const params =useParams();
        const readAllFlights = async () => {
            try {
                const baseurl = "http://localhost:8080";
                const response = await axios.get(`${baseurl}/flights/${params.id}`);
                setFlights(response.data);
            } catch (error) {
                console.error("Error fetching flights:", error);
            }
        };
        const navigate = useNavigate();

    const OnCreate = async () => {
        try {
            const baseurl = "http://localhost:8080";
            const response = await axios.post(`${baseurl}/flights/${params.id}`, {
                ...flight,
                capacity: parseInt(flight.capacity),
                price: parseFloat(flight.price)
            });
            alert(response.data.message);
            navigate('/flights/list');
        } catch (error) {
            alert('Server error');
        }
    };
    
    return (
        <>
            <PageHeader  PageNumber={1}/>
            <h3><a href="/flights/list" className="btn btn-light">Go Back</a>Edit Flight Ticket Price</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight Number:</label>
                    <div className="form-control" id="number">{flight.number}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline Name:</label>
                    <div type="text" className="form-control" id="airline_name">{flight.airline_name}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source:</label>
                    <div className="form-control" id="source">{flight.source}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination:</label>
                    <div className="form-control" id="destination">{flight.destination}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity(Number of Seats):</label>
                    <div className="form-control" id="capacity">value={flight.capacity} onClick={onBoxChange}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket Price:</label>
                    <input type="text" className="form-control" id="price" placeholder="Please enter ticket price"value={flight.price} onClick={onBoxChange} />
                </div>
                <button className="btn btn-warning">Update Price</button>
            </div>
        </>
    );
}

export default FlightEdit;