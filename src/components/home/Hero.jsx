import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-[65vh] md:h-screen min-h-[420px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
            >
                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-2"
                >
                    <h1 className="text-2xl sm:text-5xl lg:text-7xl font-headings font-bold leading-tight mb-3 sm:mb-6">
                        Building Your <br className="sm:hidden" /><span className="text-secondary">Dream Home</span> <br className="sm:hidden" />with Quality & Trust
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Premium residential and commercial construction services with over 15 years of experience. We turn your vision into reality.
                    </p>

                    <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
                        <Link
                            to="/contact"
                            className="px-5 sm:px-8 py-2.5 sm:py-4 bg-primary hover:bg-opacity-90 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 text-sm sm:text-lg shadow-lg"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            to="/projects"
                            className="px-5 sm:px-8 py-2.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 text-sm sm:text-lg shadow-lg"
                        >
                            View Projects
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <span className="text-white text-xs uppercase tracking-widest mb-2 opacity-70">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
