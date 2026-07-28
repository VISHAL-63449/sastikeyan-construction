import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
            >
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-white"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-headings font-bold mb-6">
                        Ready to Build Your <span className="text-secondary">Dream Home?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-10 font-light">
                        Contact us today for a free consultation and bring your vision to life with our expert construction team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 w-full sm:w-auto text-lg shadow-lg"
                        >
                            Get Free Quote
                        </Link>
                        <a
                            href="tel:+919629141957"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold transition-all transform hover:-translate-y-1 w-full sm:w-auto text-lg shadow-lg flex items-center justify-center gap-2"
                        >
                            <span>📞</span> Connect Now
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
