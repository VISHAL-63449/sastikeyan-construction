import { useState } from 'react';

const CostEstimator = () => {
    const [area, setArea] = useState(1000);
    const [type, setType] = useState('residential');
    const [packageLvl, setPackageLvl] = useState('standard');
    const [estimate, setEstimate] = useState(0);

    const calculateCost = (e) => {
        e.preventDefault();
        let baseRate = 0;

        // Base rates per sq.ft
        if (type === 'residential') baseRate = 2200;
        else if (type === 'commercial') baseRate = 2500;
        else if (type === 'villa') baseRate = 2800;

        // Package multiplier
        let multiplier = 1;
        if (packageLvl === 'basic') multiplier = 0.8;
        else if (packageLvl === 'standard') multiplier = 1;
        else if (packageLvl === 'premium') multiplier = 1.3;

        const cost = area * baseRate * multiplier;
        setEstimate(cost);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="w-full lg:w-1/2">
                        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Instant Quote</p>
                        <h2 className="text-4xl md:text-5xl font-headings font-bold text-primary mb-6">Cost Estimator</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Use our interactive calculator to get an an instant estimate for your construction project. The final cost may vary based on exact requirements and material selection.
                        </p>

                        {estimate > 0 && (
                            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl transform transition-all duration-500 scale-100">
                                <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Estimated Cost</p>
                                <div className="text-5xl font-headings font-bold mb-4">₹{Math.round(estimate).toLocaleString('en-IN')}</div>
                                <p className="text-sm opacity-80">This is an approximate estimate. Contact us for a detailed quotation.</p>
                            </div>
                        )}
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="bg-background p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                            <form onSubmit={calculateCost} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Construction Area (Sq.Ft)</label>
                                    <input
                                        type="number"
                                        value={area}
                                        onChange={(e) => setArea(Number(e.target.value))}
                                        min="100"
                                        className="w-full px-5 py-3 rounded-xl border-gray-200 focus:border-secondary focus:ring focus:ring-secondary/20 transition-all outline-none text-gray-700"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                                    <select
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        className="w-full px-5 py-3 rounded-xl border-gray-200 focus:border-secondary focus:ring focus:ring-secondary/20 transition-all outline-none text-gray-700 bg-white"
                                    >
                                        <option value="residential">Residential Home</option>
                                        <option value="villa">Luxury Villa</option>
                                        <option value="commercial">Commercial Building</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Quality Package</label>
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                        {['basic', 'standard', 'premium'].map(pkg => (
                                            <label
                                                key={pkg}
                                                className={`cursor-pointer text-center px-2 sm:px-4 py-3 rounded-xl border-2 transition-all ${packageLvl === pkg ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-gray-200 text-gray-500 hover:border-gray-300'} text-sm md:text-base`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="package"
                                                    value={pkg}
                                                    checked={packageLvl === pkg}
                                                    onChange={() => setPackageLvl(pkg)}
                                                    className="hidden"
                                                />
                                                <span className="capitalize">{pkg}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                                >
                                    Calculate Estimate
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CostEstimator;
