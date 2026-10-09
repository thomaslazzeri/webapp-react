import { Link } from 'react-router-dom';
import './DestinationCard.css';

const IMAGES_URL = 'http://localhost:3000/images';

export const DestinationCard = ({ place }) => (
    <li className='card'>
        <img src={`${IMAGES_URL}/${place.image}`} alt={place.name} />
        <h2>{place.name}</h2>
        <p>{place.country}</p>
        <p>{Number(place.price).toFixed(2)} €</p>
        <Link to={`/destinations/${place.id}`}>Scopri di più</Link>
    </li>
);