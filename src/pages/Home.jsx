import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CostEstimator from '../components/home/CostEstimator';
import CTA from '../components/home/CTA';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Stats />
            <ServicesPreview />
            <ProjectsPreview />
            <CostEstimator />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;
