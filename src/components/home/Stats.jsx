import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) observer.unobserve(countRef.current);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, isVisible]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const stats = [
    { label: 'Homes Built', value: 500, suffix: '+' },
    { label: 'Years Experience', value: 15, suffix: '+' },
    { label: 'Customer Satisfaction', value: 100, suffix: '%' },
    { label: 'Expert Engineers', value: 50, suffix: '+' },
];

const Stats = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 relative z-20 -mt-10">
            <section className="bg-primary text-white py-16 rounded-2xl shadow-2xl w-full">
                <div className="flex flex-wrap justify-center md:justify-between lg:justify-evenly gap-8 md:gap-4 px-4 md:px-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-headings font-bold text-secondary mb-2">
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-sm md:text-base text-gray-200 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Stats;
