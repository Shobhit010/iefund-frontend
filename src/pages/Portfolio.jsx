import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import portfolioData from '../data/portfolio.js';

const Portfolio = () => {
    // Determine unique sectors from data for the filter
    const [filter, setFilter] = useState('All');
    const sectors = ['All', ...new Set(portfolioData.map(item => item.sector))];

    const filteredData = filter === 'All'
        ? portfolioData
        : portfolioData.filter(item => item.sector === filter);

    // Helper to get color for sector (Simplified logic if needed, or kept same)
    const getSectorColor = (sector) => {
        switch (sector) {
            case 'EdTech': return 'text-cyan-600 bg-cyan-50 border-cyan-100';
            case 'AI / ML': return 'text-violet-600 bg-violet-50 border-violet-100';
            case 'B2B SaaS': return 'text-indigo-600 bg-indigo-50 border-indigo-100';
            case 'Deep Tech': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
            default: return 'text-slate-600 bg-slate-50 border-slate-100';
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">Our Portfolio</h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                        Backing extraordinary founders building <span className="text-gradient-indigo font-medium">category-defining</span> companies.
                    </p>
                </div>

                {/* FEATURED INVESTMENT WRITE-UP (TEXT SECTION) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                            Kanchan Thakur’s IE Fund Invests ₹50 Lakh in AI EdTech Startup Trigrexam
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                In a significant development for India’s fast-growing edtech ecosystem, <strong className="font-medium text-slate-900">Kanchan Thakur</strong>, founder of IE Fund, has invested <strong className="font-medium text-slate-900">₹50 lakh</strong> in <strong className="font-medium text-slate-900">Trigrexam</strong> (Trigredge Solutions Pvt. Ltd.) through an equity funding round. The investment underscores growing investor confidence in technology-driven education platforms, particularly those leveraging artificial intelligence.
                            </p>
                            <p>
                                Trigrexam, accessible through Trigrexam.com, is an AI-powered examination and assessment platform focused on transforming the education space. The startup aims to simplify and modernize the way exams are created, conducted, analyzed, and managed using advanced AI and data-driven insights. With this funding, Trigrexam plans to enhance its technology infrastructure, expand its product offerings, and strengthen its market presence across India.
                            </p>
                            <p>
                                Founded by Manjeet Kumar Mehta and Dheeraj Kumar, alumni of IIT Roorkee, Trigrexam brings together strong academic and technical expertise. The founders envision Trigrexam as a one-stop solution for exams and assessments by 2030, serving schools, colleges, coaching institutes, corporates, and government organizations.
                            </p>
                            <p>
                                IE Fund’s backing provides not only capital but also strategic guidance and industry connections to help the startup scale sustainably.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-200/60 rounded-full"></div>
                </motion.div>

                {/* Filters (Optional: Can keep or remove based on "No alterations to nav behavior". Keeping helps UX) */}
                <div className="flex justify-center flex-wrap gap-4 mb-16">
                    {sectors.map((sector) => (
                        <button
                            key={sector}
                            onClick={() => setFilter(sector)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                filter === sector
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-800"
                            )}
                        >
                            {sector}
                        </button>
                    ))}
                </div>

                {/* NORMAL PORTFOLIO GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="h-full"
                            >
                                <div className="bg-white rounded-2xl p-8 h-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden">
                                            {project.logo ? (
                                                <img src={project.logo} alt={project.name} className="w-full h-full object-contain p-2" />
                                            ) : (
                                                <div className="text-xl font-bold text-slate-400">{project.name[0]}</div>
                                            )}
                                        </div>
                                        {/* Optional: External link icon can stay or go. Keeping for utility if data had links. */}
                                    </div>

                                    <div className="mb-3">
                                        {/* Sector Badge */}
                                        <span className={cn(
                                            "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border",
                                            getSectorColor(project.sector)
                                        )}>
                                            {project.sector}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <p className="text-slate-500 font-light leading-relaxed text-sm flex-grow">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
