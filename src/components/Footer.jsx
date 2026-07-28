import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1e293b] text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src="/logo.jpeg" alt="Sastikeyan Construction Logo" className="h-14 md:h-16 object-contain rounded-lg" />
                            <div>
                                <h2 className="text-xl font-headings font-bold text-white leading-tight">Sastikeyan</h2>
                                <p className="text-xs text-secondary uppercase tracking-widest leading-none">Construction</p>
                            </div>
                        </Link>
                        <p className="text-sm mb-6 leading-relaxed">
                            Premium residential and commercial construction services with over 15 years of excellence. We build dreams that last generations.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-headings font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors text-sm flex items-center gap-2">
                                        <span className="text-secondary text-xs">▸</span> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-headings font-semibold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {['Home Construction', 'Commercial Buildings', 'Renovation', 'Interior Design', 'Architecture', 'Consultation'].map((service) => (
                                <li key={service}>
                                    <Link to="/services" className="hover:text-secondary transition-colors text-sm flex items-center gap-2">
                                        <span className="text-secondary text-xs">▸</span> {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-headings font-semibold text-lg mb-6">Contact Info</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-3 text-sm">
                                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                                <span>Sastikeyan Interior, Pbel City, <br />Kelambakkam, Chennai, Tamil Nadu.</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <FaPhoneAlt className="text-secondary flex-shrink-0" />
                                <span>+91 96291 41957</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <FaEnvelope className="text-secondary flex-shrink-0" />
                                <span>sastikeyaninteriors@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {new Date().getFullYear()} Sastikeyan Construction. All rights reserved. Owner: GP Karthik.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
