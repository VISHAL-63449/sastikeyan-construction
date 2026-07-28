import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-[88px] md:pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
