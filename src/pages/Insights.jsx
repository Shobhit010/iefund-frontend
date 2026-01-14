import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Spotlight } from '../components/ui/Spotlight';

const Insights = () => {
    const posts = [
        {
            id: 1,
            title: "Number Theory: The Future of Vertical SaaS",
            excerpt: "Why verify niche markets are becoming the next big battleground for software innovation and how founders can capture value.",
            date: "Oct 12, 2025",
            readTime: "5 min read",
            tag: "Market Trends",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Zero to One: Building Team Culture",
            excerpt: "Lessons learned from hiring the first 10 employees at a high-growth startup. Culture isn't what you say, it's who you hire.",
            date: "Sep 28, 2025",
            readTime: "8 min read",
            tag: "Talent",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "The AI Infrastructure Layer Explained",
            excerpt: "Understanding the evolving stack of artificial intelligence and where value accrues in the long term.",
            date: "Sep 15, 2025",
            readTime: "6 min read",
            tag: "Deep Tech",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            title: "Series A Readiness Guide",
            excerpt: "What leading VCs actually look for in your Series A data room. Metrics that matter vs metrics that distract.",
            date: "Aug 30, 2025",
            readTime: "10 min read",
            tag: "Fundraising",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 5,
            title: "The Fintech Reset: Unit Economics",
            excerpt: "Moving from growth-at-all-costs to sustainable unit economics. A playbook for the next generation of fintech founders.",
            date: "Aug 10, 2025",
            readTime: "7 min read",
            tag: "Fintech",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 6,
            title: "Product Led Growth at Scale",
            excerpt: "How to build a self-serve motion that actually scales enterprise sales. Unlocking the best of both worlds.",
            date: "Jul 22, 2025",
            readTime: "5 min read",
            tag: "Growth",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-bg-base selection:bg-accent selection:text-white relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-20 md:-top-20" fill="#06B6D4" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-24 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Insights</h1>
                    <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
                        Perspectives via <span className="text-white">deep dive</span> research on technology, markets, and the art of company building.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <Link to="#" className="block h-full cursor-pointer">
                                <div className="bg-slate-900 border border-white/10 rounded-3xl aspect-[16/10] mb-8 overflow-hidden relative group-hover:shadow-glow transition-all duration-500 shadow-none">
                                    <div className="absolute inset-0 bg-slate-800" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100 opacity-80 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-wide border border-white/20">
                                        {post.tag}
                                    </span>
                                </div>

                                <div className="flex flex-col flex-grow px-2">
                                    <div className="flex items-center gap-3 text-sm font-medium text-text-muted mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-accent-cyan transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-muted line-clamp-3 mb-6 font-light leading-relaxed text-lg">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center text-white font-bold text-base group-hover:text-accent-cyan transition-colors">
                                        Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-40 pt-20 border-t border-white/5 text-center relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-transparent p-12">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50" />
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stay updated</h3>
                    <p className="text-text-muted mb-12 max-w-lg mx-auto text-lg font-light">
                        We write about what we see. Join <span className="text-white font-medium">10k+ founders</span> receiving our insights.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity duration-700" />
                        <input
                            type="email"
                            placeholder="email@address.com"
                            className="w-full px-6 py-4 rounded-full border border-white/10 bg-slate-950 focus:outline-none focus:border-accent-cyan text-white transition-all text-base placeholder:text-white/20 relative z-10"
                        />
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-base rounded-full hover:bg-indigo-50 transition-colors shadow-lg absolute right-1 top-1 bottom-1 sm:px-6 sm:py-0 z-20 hover:scale-105 active:scale-95 duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
