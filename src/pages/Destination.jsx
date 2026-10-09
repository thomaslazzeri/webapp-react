import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ReviewItem } from '../components/ReviewItem';
import axios from 'axios';
import './Destination.css';

const API_URL = 'http://localhost:3000/api/places';
const IMAGES_URL = 'http://localhost:3000/images';

export const Destination = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(`${API_URL}/${id}`)
            .then(res => setPlace(res.data))
            .catch(err => {
                console.error('Errore nel caricamento', err);
                setError(err.response?.status === 404
                    ? 'Destinazione non trovata'
                    : 'Errore nel caricamento dei dati');
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='destination'>
            <Link to='/' className='back-link'>← Torna alle destinazioni</Link>

            <h1>{place.name}, {place.country}</h1>
            <img src={`${IMAGES_URL}/${place.image}`} alt={place.name} />
            <p>{place.description}</p>
            <p>Prezzo: {Number(place.price).toFixed(2)} €</p>

            <ul className='tags'>
                {place.tags.map(tag => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>

            <h2>Recensioni</h2>
            {place.reviews.length === 0 ? (
                <p>Nessuna recensione</p>
            ) : (
                <ul className='reviews'>
                    {place.reviews.map(review => (
                        <ReviewItem key={review.id} review={review} />
                    ))}
                </ul>
            )}
        </div>
    );
};