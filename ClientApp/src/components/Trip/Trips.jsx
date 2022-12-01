import React, {Component} from 'react';
import axios from 'axios';

export class Trips extends Component
{
    constructor(props){
        super(props); //super stand for component based class

        this.state = {
            trips: [],
            loading: true
        }
    }

    componentDidMount(){
        this.populateTripsData();
    }

    populateTripsData(){
        axios.get("api/Trips/GetTrips").then(result => {
            const response = result.data;
            this.setState({trips: response, loading: false});
        })
    }


    renderAllTripsTable(trips){
        return (
            <table className='table table-hover table-bordered table-dark'>
                <caption>List of trips</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip =>(
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.Description}</td>
                            <td>{trip.dateStarted}</td>
                            <td>{trip.dateCompleted}</td>
                            <td>-</td>
                        </tr>

                        ))
                    }


                </tbody>
            </table>

        );
    }

    render(){
        let content = this.state.loading ?(
            <p>
                <em>Loading....</em>
            </p>
        ) : (
            this.renderAllTripsTable(this.state.trips)
        )
        return ( //when return the parrent code, only one div in that level
            <div>
                <h1>All Trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>

        );
    }
}