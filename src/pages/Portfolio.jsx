import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import portfolioData from '../data/portfolio.js';
import { BackgroundGradient } from '../components/ui/BackgroundGradient';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const sectors = ['All', ...new Set(portfolioData.map(item => item.sector))];

    const filteredData = filter === 'All'
        ? portfolioData
        : portfolioData.filter(item => item.sector === filter);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-base selection:bg-accent selection:text-white">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Our Portfolio</h1>
                    <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed">
                        Backing extraordinary founders building <span className="text-white font-medium">category-defining</span> companies.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center flex-wrap gap-4 mb-20">
                    {sectors.map((sector) => (
                        <button
                            key={sector}
                            onClick={() => setFilter(sector)}
                            className={cn(
                                "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 border relative overflow-hidden group",
                                filter === sector
                                    ? "text-white border-transparent shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                    : "bg-white/5 text-text-muted border-white/10 hover:border-accent/50 hover:text-white"
                            )}
                        >
                            {filter === sector && (
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 -z-10" />
                            )}
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
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                            >
                                <BackgroundGradient className="rounded-[22px] bg-slate-900 h-full p-8 md:p-10 flex flex-col group hover:shadow-glow transition-all duration-500">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center p-4 border border-white/10 group-hover:scale-105 transition-transform duration-500 origin-top-left group-hover:bg-white/10 overflow-hidden">
                                            {project.logo ? (
                                                <img src={project.logo} alt={project.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                                            ) : (
                                                <div className="text-3xl font-bold text-white/20">{project.name[0]}</div>
                                            )}
                                        </div>
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent text-white/50 group-hover:text-white flex items-center justify-center transition-all duration-300 -mr-2 -mt-2 group-hover:rotate-45"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>

                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-accent-cyan uppercase tracking-wider mb-4 border border-white/10">
                                            {project.sector}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 leading-relaxed font-light flex-grow text-base group-hover:text-slate-200 transition-colors">
                                        {project.description}
                                    </p>
                                </BackgroundGradient>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
