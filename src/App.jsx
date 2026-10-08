import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { ErrorFound } from './pages/ErrorFound';
import { ShellLayout } from './components/ShellLayout';
import { Destinations } from './pages/Destinations';
import { Destination } from './pages/Destination';
import { Us } from './pages/Us';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ShellLayout />}>
                <Route index element={<Home />} />
                <Route path="destinations" element={<Destinations />} />
                <Route path="destinations/:id" element={<Destination />} />
                <Route path="us" element={<Us />} />
                <Route path="*" element={<ErrorFound />} />
            </Route>
        </Routes>
    );
}

export default App;
