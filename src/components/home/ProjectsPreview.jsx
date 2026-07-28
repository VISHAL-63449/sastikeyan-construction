import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const baseUrl = import.meta.env.BASE_URL;

const projects = [
    {
        title: 'Luxury Villa Construction',
        category: 'Residential',
        image: `${baseUrl}projects/project-1.jpeg`,
    },
    {
        title: 'Seaside Villa Project',
        category: 'Villa',
        image: `${baseUrl}projects/project-4.jpeg`,
    },
    {
        title: 'Commercial Site Dev',
        category: 'Commercial',
        image: `${baseUrl}projects/project-6.jpeg`,
    }
];

const ProjectsPreview = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Portfolio</p>
                        <h2 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">Featured Projects</h2>
                    </div>
                    <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group">
                        Explore All Projects <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full bg-gradient-to-t from-gray-900/90 to-transparent">
                                <span className="bg-secondary text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-3 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-headings font-bold text-white mb-2">{project.title}</h3>
                                <div className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-2 md:mt-4">
                                    <span className="text-white text-sm border-b border-white pb-1 flex items-center gap-2 w-max">
                                        View Details <span>→</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/projects" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold">
                        Explore All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
