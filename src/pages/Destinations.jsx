import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/places';
const IMAGES_URL = 'http://localhost:3000/images';

export const Destinations = () => {
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
            <h1>Le nostre destinazioni</h1>
            <ul className='cards'>
                {places.map(place => (
                    <li key={place.id} className='card'>
                        <img src={`${IMAGES_URL}/${place.image}`} alt={place.name} />
                        <h2>{place.name}</h2>
                        <p>{place.country}</p>
                        <p>{Number(place.price).toFixed(2)} €</p>
                        <Link to={`/destinations/${place.id}`}>Scopri di più</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};