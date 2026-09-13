import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const baseUrl = import.meta.env.BASE_URL;

const allProjects = [
    { id: 1, title: 'Luxury Villa Construction', category: 'Residential', location: 'OMR, Chennai', area: '4500 sq.ft', date: 'Ongoing', image: `${baseUrl}projects/project-1.jpeg` },
    { id: 2, title: 'Modern Home Construction', category: 'Residential', location: 'T. Nagar, Chennai', area: '2000 sq.ft', date: 'Recent', image: `${baseUrl}projects/my-project.png` },
    { id: 3, title: 'Premium Villa Build', category: 'Villa', location: 'Anna Nagar, Chennai', area: '1200 sq.ft', date: 'Completed', image: `${baseUrl}projects/project-3.jpeg` },
    { id: 4, title: 'Seaside Villa Project', category: 'Villa', location: 'ECR, Chennai', area: '6000 sq.ft', date: 'Ongoing', image: `${baseUrl}projects/project-4.jpeg` },
    { id: 5, title: 'Ultra-Modern House Build', category: 'Residential', location: 'Mylapore, Chennai', area: '3200 sq.ft', date: 'Completed', image: `${baseUrl}projects/project-5.jpeg` },
    { id: 6, title: 'Contemporary Residence', category: 'Residential', location: 'Guindy, Chennai', area: '8500 sq.ft', date: 'Recent', image: `${baseUrl}projects/project-6.jpeg` },
    { id: 7, title: 'Smart Home Build', category: 'Residential', location: 'Kelambakkam, Chennai', area: '3000 sq.ft', date: 'Ongoing', image: `${baseUrl}projects/project-7.jpeg` },
    { id: 8, title: 'Bespoke Architecture', category: 'Villa', location: 'Velachery, Chennai', area: '4800 sq.ft', date: 'Completed', image: `${baseUrl}projects/project-8.jpeg` },
];

const categories = ['All', 'Residential', 'Villa'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="py-20 lg:py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our Portfolio</p>
                    <h1 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">Featured Projects</h1>
                    <p className="text-gray-600">Explore our recent portfolio of premium residential homes and luxury villa constructions.</p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="mb-8">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.a
                                    href={project.image}
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer block"
                                >
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold uppercase px-3 py-1 rounded-full text-center">
                                            {project.category}
                                            <br />
                                            <span className="text-[10px] text-gray-400">Click to expand</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-headings font-bold text-gray-800 mb-4">{project.title}</h3>
                                        <div className="space-y-2 mb-6 text-sm text-gray-600">
                                            <div className="flex justify-between border-b pb-2"><span className="font-semibold">Location:</span> <span>{project.location}</span></div>
                                            <div className="flex justify-between border-b pb-2"><span className="font-semibold">Area:</span> <span>{project.area}</span></div>
                                            <div className="flex justify-between pb-2"><span className="font-semibold">Completed:</span> <span>{project.date}</span></div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </LightGallery>
                </motion.div>

            </div>
        </div>
    );
};

export default Projects;
