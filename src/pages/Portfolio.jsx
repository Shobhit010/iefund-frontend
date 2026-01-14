import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import portfolioData from '../data/portfolio.js';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const sectors = ['All', ...new Set(portfolioData.map(item => item.sector))];

    const filteredData = filter === 'All'
        ? portfolioData
        : portfolioData.filter(item => item.sector === filter);

    // Helper to get color for sector
    const getSectorColor = (sector) => {
        switch (sector) {
            case 'Fintech': return 'text-cyan-600 bg-cyan-50 border-cyan-100';
            case 'AI / ML': return 'text-violet-600 bg-violet-50 border-violet-100';
            case 'SaaS': return 'text-indigo-600 bg-indigo-50 border-indigo-100';
            case 'Deep Tech': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
            default: return 'text-slate-600 bg-slate-50 border-slate-100';
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">Our Portfolio</h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                        Backing extraordinary founders building <span className="text-gradient-indigo font-medium">category-defining</span> companies.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center flex-wrap gap-4 mb-20">
                    {sectors.map((sector) => (
                        <button
                            key={sector}
                            onClick={() => setFilter(sector)}
                            className={cn(
                                "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                                filter === sector
                                    ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 transform scale-105"
                                    : "bg-white text-slate-500 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50/50"
                            )}
                        >
                            {sector}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                            >
                                <div className="card-premium h-full p-8 flex flex-col group">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center p-4 border border-slate-100 group-hover:scale-110 transition-transform duration-500 origin-top-left overflow-hidden group-hover:shadow-sm">
                                            {project.logo ? (
                                                <img src={project.logo} alt={project.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                                            ) : (
                                                <div className="text-3xl font-bold text-slate-300 group-hover:text-indigo-300 transition-colors">{project.name[0]}</div>
                                            )}
                                        </div>
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-indigo-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300 -mr-2 -mt-2 group-hover:rotate-12 group-hover:shadow-glow-indigo"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>

                                    <div className="mb-4">
                                        <span className={cn(
                                            "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border transition-colors",
                                            getSectorColor(project.sector)
                                        )}>
                                            {project.sector}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <p className="text-slate-500 leading-relaxed font-light flex-grow text-base group-hover:text-slate-600 transition-colors">
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
