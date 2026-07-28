import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { name, email, subject, message } = data;

        // Construct the WhatsApp message text
        const whatsappText = `*New Website Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;

        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/919629141957?text=${encodeURIComponent(whatsappText)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Reset the form after submission
        reset();
    };

    return (
        <div className="py-20 lg:py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
                    <h1 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-gray-600">Have a project in mind? Reach out to us and let's discuss how we can bring your vision to reality.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden p-2 lg:p-4">
                    {/* Info Side */}
                    <div className="w-full lg:w-2/5 md:rounded-2xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between" style={{ backgroundColor: '#0F4C81' }}>
                        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531834685032-c3cb469c5fac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-headings font-bold mb-8">Contact Information</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-4 items-start">
                                    <FaMapMarkerAlt className="text-secondary text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Office Address</h4>
                                        <p className="text-white/80 font-light">Sastikeyan Interior, Pbel City,<br />Kelambakkam, Chennai, Tamil Nadu.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <FaPhoneAlt className="text-secondary text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Call Us Direct</h4>
                                        <p className="text-white/80 font-light">+91 96291 41957</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <FaEnvelope className="text-secondary text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Email Enquiries</h4>
                                        <p className="text-white/80 font-light">sastikeyaninteriors@gmail.com</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Small Map View Integration */}
                            <div className="mt-8 rounded-xl overflow-hidden relative z-10 shadow-lg border border-white/20" style={{ height: '140px' }}>
                                <iframe
                                    className="w-full h-full"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=PBEL%20City,%20Kelambakkam,%20Chennai+(Sastikeyan%20Construction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <p className="font-semibold mb-2">Business Hours</p>
                            <p className="text-sm font-light text-white/80">Mon-Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-sm font-light text-white/80">Saturday: 9:00 AM - 2:00 PM</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-3/5 p-8 md:p-12">
                        <h3 className="text-3xl font-headings font-bold text-gray-800 mb-8">Send Us A Message</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring focus:ring-secondary/20 transition-all outline-none bg-gray-50"
                                        placeholder="Arunachalam"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring focus:ring-secondary/20 transition-all outline-none bg-gray-50"
                                        placeholder="arunachalam@example.com"
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring focus:ring-secondary/20 transition-all outline-none bg-gray-50"
                                    placeholder="I would like to inquire about..."
                                    {...register("subject", { required: true })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring focus:ring-secondary/20 transition-all outline-none bg-gray-50 resize-none"
                                    placeholder="Tell us about your project..."
                                    {...register("message", { required: true })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-primary hover:bg-opacity-90 text-white font-semibold py-4 px-8 rounded-xl shadow-md transition-all w-full flex justify-center items-center gap-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp */}
            <a href="https://wa.me/919629141957" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center cursor-pointer group">
                <FaWhatsapp className="text-3xl" />
                <span className="absolute right-16 bg-white text-gray-800 text-xs px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-medium hidden md:block">WhatsApp Owner<br />(GP Karthick)</span>
            </a>
        </div>
    );
};

export default Contact;
