import { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {

    const [places, setPlaces] = useState([]);

    const API_URL = 'http://localhost:3000/api/places'

    useEffect(() => {
        axios.get(API_URL)
            .then(resPlaces => {
                setPlaces(resPlaces.data);
            })
            .catch(error => {
                console.log("Si è verificato un errore nel caricamento dei dati:", error);
            });
    }, []);

    return (
        <div>
            <h1>Agenzia di viaggio</h1>
            <ul>
                {
                    places.map(place => (
                        <li key={place.id}>{place.name}</li>
                    ))
                }
            </ul>
        </div>
    )
};