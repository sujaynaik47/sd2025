import { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../header/PageHeader";

function FlightList() {
    const [flights, setFlights] = useState([]);

   
    const readAllFlights = async () => {
        try {
            const baseurl = "http://localhost:8080";
            const response = await axios.get(`${baseurl}/flights`);
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };

    useEffect(() => {
        readAllFlights();
    }, []);

    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>List of Flights</h3>
            <div className="container">
                <table className="table table-primary table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Flight Number</th>
                            <th scope="col">Airline Name</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight) => (
                            <tr key={flight.id}>
                                <th scope="row">{flight.number}</th>
                                <td>{flight.airline_name}</td>
                                <td>{flight.source}</td>
                                <td>{flight.destination}</td>
                                <td>
                                    <a href={`/flights/edit/${flight.id}`} className="btn btn-warning">
                                        Edit Price
                                    </a>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FlightList;