import { useEffect, useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LuHouse, LuBuilding2, LuHardHat, LuPaintRoller, LuCompass, LuWrench } from 'react-icons/lu';

const services = [
    { id: 1, title: 'House Construction', icon: <LuHouse className="stroke-[1.5]" />, img: '/services/home construction.jpeg', desc: 'Custom residential homes built with premium materials and modern techniques.' },
    { id: 2, title: 'Commercial Buildings', icon: <LuBuilding2 className="stroke-[1.5]" />, img: '/services/Commercial Buildings.png', desc: 'Expertly constructed office spaces, malls, and commercial complexes.' },
    { id: 3, title: 'Renovation', icon: <LuHardHat className="stroke-[1.5]" />, img: '/services/Renovation.png', desc: 'Breathing new life into old structures with comprehensive renovation.' },
    { id: 4, title: 'Interior Design', icon: <LuPaintRoller className="stroke-[1.5]" />, img: '/services/interior image.jpeg', desc: 'Curated interiors that harmonize aesthetics with daily functionality.' },
    { id: 5, title: 'Architecture Planning', icon: <LuCompass className="stroke-[1.5]" />, img: '/services/Architecture Planning.png', desc: 'Precision blueprints and modeling to visualize your dream structure.' },
    { id: 6, title: 'Structural Engineering', icon: <LuWrench className="stroke-[1.5]" />, img: '/services/Structural Engineering.png', desc: 'Ensuring absolute stability and safety in every construction project.' },
];

const faqs = [
    { q: "How long does it take to build a standard home?", a: "A standard residential home usually takes between 6 to 8 months to complete, depending on the complexity, size, and weather conditions." },
    { q: "Do you provide architectural design services?", a: "Yes, we offer comprehensive end-to-end services, starting from conceptual architectural design to the final interior finishing." },
    { q: "Are your construction processes sustainable?", a: "Absolutely! We focus on using eco-friendly materials and energy-efficient building practices wherever possible." },
    { q: "Can you help with building permits?", a: "Yes, we handle all the necessary municipal approvals and building permits required to start construction legally." },
];

const Services = () => {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-20 lg:py-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">What We Do</p>
                    <h1 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">Our Services</h1>
                    <p className="text-gray-600">From concept to completion, we provide comprehensive construction solutions tailored to meet your unique needs.</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {services.map(service => (
                        <div key={service.id} className="bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                                <div className="absolute bottom-4 left-4 bg-white text-primary w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-headings font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-700"><FaCheck className="text-secondary text-xs" /> High Quality Materials</div>
                                    <div className="flex items-center gap-2 text-sm text-gray-700"><FaCheck className="text-secondary text-xs" /> Experienced Team</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="mb-24 bg-primary text-white rounded-3xl p-10 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headings font-bold mb-4">Our Construction Process</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">A seamless and transparent workflow to bring your project to life.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                        {/* Timeline line hidden on mobile */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-white/20"></div>

                        {[
                            { num: '01', title: 'Consultation', desc: 'Initial meeting to understand your vision, requirements and budget.' },
                            { num: '02', title: 'Design & Planning', desc: 'Creating blueprints, 3D models and getting necessary approvals.' },
                            { num: '03', title: 'Construction', desc: 'The actual building phase with regular quality checks and updates.' },
                            { num: '04', title: 'Handover', desc: 'Final inspection, deep cleaning, and handing over the keys.' },
                        ].map((step, idx) => (
                            <div key={idx} className="relative z-10">
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-3xl font-headings font-bold mb-6 mx-auto md:mx-0 shadow-lg border-4 border-primary">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-headings font-bold mb-3 text-center md:text-left">{step.title}</h3>
                                <p className="text-sm text-white/70 text-center md:text-left">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-headings font-bold text-primary mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left font-semibold text-primary"
                                >
                                    {faq.q}
                                    {openFaq === idx ? <FaChevronUp className="text-secondary" /> : <FaChevronDown className="text-secondary" />}
                                </button>
                                {openFaq === idx && (
                                    <div className="p-5 bg-gray-50 border-t border-gray-200 text-gray-600 font-light text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
