import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'SK Interior', path: 'https://www.sastikeyaninterior.in/', external: true },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const baseUrl = import.meta.env.BASE_URL;

    return (
        <>
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 z-50">
                        <img src={`${baseUrl}logo.jpeg`} alt="Sastikeyan Construction Logo" className="h-12 md:h-16 object-contain" />
                        <div>
                            <h1 className="text-xl md:text-2xl font-headings font-bold text-primary leading-tight">Sastikeyan</h1>
                            <p className="text-xs text-gray-500 uppercase tracking-widest leading-none">Construction</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {links.map((link) => (
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium transition-colors text-gray-700 hover:text-secondary flex items-center gap-1"
                                >
                                    {link.name} <span style={{ fontSize: '10px' }}>↗</span>
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? 'text-secondary' : 'text-gray-700'}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <Link to="/contact" className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Get Free Quote
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-2xl text-primary z-50"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Menu"
                    >
                        <FaBars />
                    </button>
                </div>
            </header>

            {/* Mobile Nav Slider */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[60] lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[70] flex flex-col shadow-2xl lg:hidden"
                        >
                            <div className="flex justify-end items-center px-6 py-6 border-b border-gray-50">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl text-gray-400 hover:text-primary transition-colors p-2"
                                    aria-label="Close Menu"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="flex flex-col gap-5 px-8 pt-8 overflow-y-auto pb-8 flex-grow">
                                {links.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        className="border-b border-gray-100 pb-3"
                                    >
                                        {link.external ? (
                                            <a
                                                href={link.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-headings font-bold text-gray-800 flex items-center justify-between group"
                                            >
                                                {link.name} <span className="text-sm text-gray-400 group-hover:text-secondary transition-colors">↗</span>
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`text-lg font-headings font-bold block ${location.pathname === link.path ? 'text-secondary' : 'text-gray-800 hover:text-primary transition-colors'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-6"
                                >
                                    <Link onClick={() => setIsOpen(false)} to="/contact" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold block text-center shadow-md hover:shadow-lg transition-shadow w-full text-sm tracking-wide">
                                        Get Free Quote
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
