import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import './ShellLayout.css'

export const ShellLayout = () => (
    <div className="shell-layout">
        <Header />
        <div className="page">
            <Outlet />
        </div>
        <Footer />
    </div>
);