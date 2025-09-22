import React, { useState } from 'react';
import { PRICING_DATA } from '../constants';
import { PricingCategory, PricingTier } from '../types';
import { Spacing } from './Layout';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const renderFeature = (feature: string) => {
    return feature;
};


const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => {
    const message = `Halo, saya tertarik dengan paket "${tier.name}".`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6288225444313?text=${encodedMessage}`;

    return (
    <div className={`relative flex flex-col p-6 bg-[#181818] rounded-3xl h-full ${tier.popular ? 'border-2 border-[#78ff00]' : ''}`}>
        {tier.popular && (
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#78ff00] text-black text-sm font-semibold rounded-full whitespace-nowrap">
                Paling Populer
            </div>
        )}
        <div className="flex-grow">
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <Spacing size={8} />
            <p className="text-sm text-gray-400 h-12">{tier.description}</p>
            <Spacing size={16} />
            <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-3xl font-bold text-[#78ff00]">
                    {tier.pricePrefix && <span className="text-xl font-medium">{tier.pricePrefix} </span>}
                    Rp {tier.newPrice}
                </p>
                {tier.oldPrice && (
                    <s className="text-xl text-gray-500">Rp {tier.oldPrice}</s>
                )}
            </div>
            <Spacing size={24} />
            <ul className="space-y-3 text-left">
                {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#78ff00] shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-300">{renderFeature(feature)}</span>
                    </li>
                ))}
            </ul>
        </div>
        <Spacing size={24} />
        <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto h-12 flex items-center justify-center bg-[#78ff00] text-black rounded-2xl font-semibold transition-all duration-400 ease-in-out text-center hover:bg-opacity-80">
            {tier.buttonText}
        </a>
    </div>
    );
};


const PricingCategoryView: React.FC<{ category: PricingCategory }> = ({ category }) => {
    // State for mobile slider (1 card view)
    const popularTierIndex = category.tiers.findIndex(tier => tier.popular);
    const [currentSlide, setCurrentSlide] = useState(popularTierIndex !== -1 ? popularTierIndex : 0);
    
    // State for desktop slider (3 card view)
    const [desktopSlide, setDesktopSlide] = useState(1);
    const TiersToShowDesktop = 3;
    const maxDesktopSlide = category.tiers.length - TiersToShowDesktop;

    // Mobile navigation
    const nextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, category.tiers.length - 1));
    };
    const prevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    };

    // Desktop navigation
    const nextDesktop = () => {
        setDesktopSlide(prev => Math.min(prev + 1, maxDesktopSlide));
    };
    const prevDesktop = () => {
        setDesktopSlide(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center">{category.title}</h2>
            <Spacing size={8} />
            <p className="text-center text-gray-400 max-w-lg">{category.description}</p>
            <Spacing size={48} />

            {/* Desktop Slider (3 cards visible) */}
            <div className="w-full hidden md:block relative">
                 <div className="overflow-hidden">
                    <div
                        className="flex -mx-2 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${desktopSlide * (100 / TiersToShowDesktop)}% - ${desktopSlide * 1}rem / ${TiersToShowDesktop}))`
                        }}
                    >
                        {category.tiers.map((tier) => (
                           <div key={tier.name} className="px-2" style={{ width: `${100 / TiersToShowDesktop}%`}}>
                                <PricingCard tier={tier} />
                           </div>
                        ))}
                    </div>
                </div>

                {maxDesktopSlide > 0 && (
                    <>
                        <button
                            onClick={prevDesktop}
                            disabled={desktopSlide === 0}
                            className="absolute top-1/2 -translate-y-1/2 -left-6 p-2 bg-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed text-white hover:bg-white/20 transition-all"
                            aria-label="Previous tiers"
                        >
                            <ChevronLeftIcon />
                        </button>
                        <button
                            onClick={nextDesktop}
                            disabled={desktopSlide >= maxDesktopSlide}
                            className="absolute top-1/2 -translate-y-1/2 -right-6 p-2 bg-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed text-white hover:bg-white/20 transition-all"
                            aria-label="Next tiers"
                        >
                            <ChevronRightIcon />
                        </button>
                    </>
                )}
            </div>

            {/* Mobile Slider (1 card visible) */}
            <div className="w-full md:hidden">
                <div className="relative max-w-sm mx-auto">
                    <div className="w-full px-8" aria-live="polite">
                        <PricingCard tier={category.tiers[currentSlide]} />
                    </div>

                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="absolute top-1/2 -translate-y-1/2 left-0 p-1 bg-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed text-white hover:bg-white/20 transition-all"
                        aria-label="Previous tier"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === category.tiers.length - 1}
                        className="absolute top-1/2 -translate-y-1/2 right-0 p-1 bg-white/10 rounded-full disabled:opacity-30 disabled:cursor-not-allowed text-white hover:bg-white/20 transition-all"
                        aria-label="Next tier"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {category.tiers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-[#78ff00]' : 'bg-gray-600 hover:bg-gray-400'}`}
                            aria-label={`Go to pricing tier ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-2 p-1 bg-[#181818] rounded-full" role="tablist" aria-label="Pricing categories">
                    {PRICING_DATA.map((category, index) => (
                        <button
                            key={category.title}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${activeTab === index ? 'bg-[#78ff00] text-black' : 'text-gray-400 hover:text-white'}`}
                            role="tab"
                            aria-selected={activeTab === index}
                            aria-controls={`panel-${index}`}
                            id={`tab-${index}`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            <Spacing size={32} />

            <div className="w-full overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeTab * 100}%)` }}
                >
                    {PRICING_DATA.map((category, index) => (
                        <div 
                            key={category.title} 
                            className="w-full flex-shrink-0"
                            role="tabpanel"
                            id={`panel-${index}`}
                            aria-labelledby={`tab-${index}`}
                            aria-hidden={activeTab !== index}
                        >
                             <PricingCategoryView category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;