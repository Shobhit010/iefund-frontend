import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import portfolioData from '../data/portfolioData';

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

                {/* PORTFOLIO GRID */}
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
                                <Link to={`/portfolio/${project.slug}`} className="block h-full cursor-pointer">
                                    <div className="bg-white rounded-2xl p-8 h-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden">
                                                {project.logo ? (
                                                    <img src={project.logo} alt={project.name} className="w-full h-full object-contain p-2" />
                                                ) : (
                                                    <div className="text-xl font-bold text-slate-400">{project.name[0]}</div>
                                                )}
                                            </div>
                                            <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition-colors" size={20} />
                                        </div>

                                        <div className="mb-3">
                                            {/* Sector Badge */}
                                            <span className={cn(
                                                "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border",
                                                getSectorColor(project.sector)
                                            )}>
                                                {project.sector}
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                {project.name}
                                            </h3>
                                        </div>

                                        <p className="text-slate-500 font-light leading-relaxed text-sm flex-grow line-clamp-4">
                                            {project.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
