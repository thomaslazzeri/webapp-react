import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { ErrorFound } from './pages/ErrorFound';
import { ShellLayout } from './components/ShellLayout';

function App() {
        return (
            <Routes>
                <Route path="/" element={<ShellLayout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<ErrorFound />} />
                </Route>
            </Routes>
        );
    }

export default App;
