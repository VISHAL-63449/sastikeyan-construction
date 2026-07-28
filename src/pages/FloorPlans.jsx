import { useEffect } from 'react';
import { FaBed, FaBath, FaCar, FaCouch, FaUtensils, FaDownload } from 'react-icons/fa';

const baseUrl = import.meta.env.BASE_URL;

const plans = [
    { id: 1, title: '600 Sq Ft Compact', type: 'Apartment', beds: 1, baths: 1, parking: 0, living: 1, kitchen: 1, image: `${baseUrl}projects/project-7.jpeg` },
    { id: 2, title: '800 Sq Ft Family', type: 'Apartment', beds: 2, baths: 2, parking: 1, living: 1, kitchen: 1, image: `${baseUrl}projects/project-2.jpeg` },
    { id: 3, title: '1200 Sq Ft Premium', type: 'Apartment', beds: 3, baths: 2, parking: 1, living: 1, kitchen: 1, image: `${baseUrl}services/Architecture Planning.png` },
    { id: 4, title: 'Standard Duplex', type: 'Duplex', beds: 3, baths: 3, parking: 2, living: 2, kitchen: 1, image: `${baseUrl}projects/project-4.jpeg` },
    { id: 5, title: 'Luxury Villa', type: 'Villa', beds: 4, baths: 4, parking: 2, living: 2, kitchen: 2, image: `${baseUrl}projects/project-8.jpeg` },
    { id: 6, title: '1500 Sq Ft Estate', type: 'House', beds: 4, baths: 3, parking: 2, living: 2, kitchen: 1, image: `${baseUrl}projects/project-5.jpeg` },
];

const FloorPlans = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-20 lg:py-24 bg-background min-h-screen">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Architecture</p>
                    <h1 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">Floor Plans</h1>
                    <p className="text-gray-600">Browse through our meticulously designed floor plans customized for various plot sizes and requirements.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row group transition-transform hover:-translate-y-1">
                            <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                                <img
                                    src={plan.image}
                                    alt={plan.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {plan.type}
                                </div>
                            </div>

                            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-headings font-bold text-primary mb-4">{plan.title}</h3>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-gray-700 mb-6 font-medium">
                                        <div className="flex items-center gap-2"><FaBed className="text-secondary" /> {plan.beds} Bedrooms</div>
                                        <div className="flex items-center gap-2"><FaBath className="text-secondary" /> {plan.baths} Bathrooms</div>
                                        <div className="flex items-center gap-2"><FaCouch className="text-secondary" /> {plan.living} Living Room</div>
                                        <div className="flex items-center gap-2"><FaUtensils className="text-secondary" /> {plan.kitchen} Kitchen</div>
                                        <div className="flex items-center gap-2"><FaCar className="text-secondary" /> {plan.parking} Parking</div>
                                    </div>
                                </div>

                                <button className="flex items-center justify-center gap-2 w-full py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all font-semibold">
                                    <FaDownload /> Download PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FloorPlans;
