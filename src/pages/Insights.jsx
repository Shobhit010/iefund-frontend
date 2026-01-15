import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import insightsData from '../data/insightsData';

const Insights = () => {

    const getTagColor = (tag) => {
        switch (tag) {
            case 'Market Trends': return 'bg-cyan-50 text-cyan-700 border-cyan-100';
            case 'Talent': return 'bg-amber-50 text-amber-700 border-amber-100';
            case 'Deep Tech': return 'bg-violet-50 text-violet-700 border-violet-100';
            case 'Fundraising': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
            case 'Fintech': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
            case 'Growth': return 'bg-pink-50 text-pink-700 border-pink-100';
            default: return 'bg-slate-50 text-slate-700 border-slate-100';
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-24 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">Insights</h1>
                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                        Perspectives via <span className="text-gradient-indigo font-medium">deep dive</span> research on technology, markets, and the art of company building.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {insightsData.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <Link to={`/insights/${post.slug}`} className="block h-full cursor-pointer">
                                <div className="card-premium p-0 h-full flex flex-col">
                                    <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden relative border-b border-slate-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100 opacity-90 group-hover:opacity-100"
                                        />
                                        <span className={`absolute top-6 left-6 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border shadow-sm ${getTagColor(post.tag)}`}>
                                            {post.tag}
                                        </span>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-sm font-medium text-slate-400 mb-4">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>{post.readTime}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 line-clamp-3 mb-6 font-light leading-relaxed text-lg">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center text-slate-900 font-bold text-base group-hover:text-indigo-600 transition-colors">
                                            Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-40 pt-20 border-t border-slate-100 text-center relative overflow-hidden rounded-3xl bg-slate-50 p-12">
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Stay updated</h3>
                    <p className="text-slate-500 mb-12 max-w-lg mx-auto text-lg font-light">
                        We write about what we see. Join <span className="text-slate-900 font-medium">10k+ founders</span> receiving our insights.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto relative group">
                        <input
                            type="email"
                            placeholder="email@address.com"
                            className="w-full px-6 py-4 rounded-full border border-slate-200 bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 transition-all text-base placeholder:text-slate-400 shadow-sm"
                        />
                        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-base rounded-full hover:bg-indigo-600 transition-colors shadow-md hover:shadow-lg active:scale-95 duration-200 hover:-translate-y-0.5">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
