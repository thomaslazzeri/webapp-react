import { Link } from 'react-router-dom';

export const Home = () => (
    <div>
        <h1>Agenzia di viaggio</h1>
        <p>Scopri le nostre mete e leggi le recensioni dei viaggiatori.</p>
        <Link to='/destinations'>Scopri le destinazioni</Link>
    </div>
);