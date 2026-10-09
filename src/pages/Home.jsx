import { useState, useEffect } from 'react';
import axios from 'axios';
import { DestinationCard } from '../components/DestinationCard';

const API_URL = 'http://localhost:3000/api/places';

export const Home = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setPlaces(res.data))
            .catch(error => console.error('Errore nel caricamento dei dati', error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Caricamento...</p>;

    return (
        <div>
            <h1>Agenzia di viaggio</h1>
            <ul className='cards'>
                {places.map(place => (
                    <DestinationCard key={place.id} place={place} />  
                ))}
            </ul>
        </div>
    );
};