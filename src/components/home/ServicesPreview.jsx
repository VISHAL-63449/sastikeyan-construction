import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuHouse, LuBuilding2, LuHardHat, LuPaintRoller } from 'react-icons/lu';

const services = [
    {
        title: 'Residential Construction',
        description: 'Custom homes, villas, and apartments built to your exact specifications with premium materials.',
        icon: <LuHouse className="text-4xl text-secondary stroke-[1.5]" />,
    },
    {
        title: 'Commercial Buildings',
        description: 'Office spaces, retail stores, and commercial complexes designed for modern business needs.',
        icon: <LuBuilding2 className="text-4xl text-secondary stroke-[1.5]" />,
    },
    {
        title: 'Renovation',
        description: 'Transform your existing space with our comprehensive renovation and remodeling services.',
        icon: <LuHardHat className="text-4xl text-secondary stroke-[1.5]" />,
    },
    {
        title: 'Interior Design',
        description: 'Aesthetic and functional interior layouts tailored to your lifestyle and preferences.',
        icon: <LuPaintRoller className="text-4xl text-secondary stroke-[1.5]" />,
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">Premium Construction Services</h2>
                    <p className="text-gray-600">We offer end-to-end construction solutions with a focus on quality, safety, and timely delivery.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-headings font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                            <Link to="/services" className="text-primary font-semibold text-sm flex items-center gap-2 hover:text-secondary transition-colors group">
                                Learn More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/services" className="inline-block px-8 py-3 bg-white text-primary border border-primary/20 rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-sm">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
