import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Muthukumar S.',
        designation: 'Homeowner',
        rating: 5,
        text: 'Sastikeyan Construction completely transformed our vision into reality. Their attention to detail and commitment to quality is truly unmatched in the industry.',
    },
    {
        name: 'Karthikeyan R.',
        designation: 'CEO, TechSpace Chennai',
        rating: 5,
        text: 'The commercial office they built for us was delivered on time and under budget. The team was professional and the craftsmanship is superb.',
    },
    {
        name: 'Saravanan T.',
        designation: 'Real Estate Developer',
        rating: 5,
        text: 'I have worked with many construction firms, but Sastikeyan Construction stands out. Their project management and execution are flawless.',
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Client Stories</p>
                    <h2 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">What People Say</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="pb-16"
                    >
                        {testimonials.map((test, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100 text-center relative mx-4 mb-4">
                                    <FaQuoteLeft className="text-4xl text-gray-200 mx-auto mb-6" />

                                    <p className="text-gray-600 text-lg md:text-xl italic mb-8 leading-relaxed">
                                        "{test.text}"
                                    </p>

                                    <div className="flex justify-center gap-1 mb-4">
                                        {[...Array(test.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-secondary" />
                                        ))}
                                    </div>

                                    <h4 className="font-headings font-bold text-primary text-lg">{test.name}</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{test.designation}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
