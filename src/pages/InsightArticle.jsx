import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import insightsData from '../data/insightsData.jsx';
import { cn } from '../lib/utils';

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

const InsightArticle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const article = insightsData.find(post => post.slug === slug);

    useEffect(() => {
        if (!article) {
            // Optional: Redirect to insights if not found, or show 404
            // navigate('/insights');
        }
        window.scrollTo(0, 0);
    }, [slug, article, navigate]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32 pb-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h2>
                    <Link to="/insights" className="text-indigo-600 hover:underline">Back to Insights</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container-custom max-w-4xl mx-auto"
            >
                {/* Back Link */}
                <Link to="/insights" className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors mb-10 font-medium group text-sm uppercase tracking-wide">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border",
                            getTagColor(article.tag)
                        )}>
                            {article.tag}
                        </span>
                    </div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
                    >
                        {article.title}
                    </motion.h1>

                    <div className="flex items-center gap-6 text-slate-500 text-sm md:text-base border-b border-slate-100 pb-10">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            {article.date}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            {article.readTime}
                        </div>
                    </div>
                </div>

                {/* Image (Optional Hero) */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-full aspect-video rounded-2xl overflow-hidden mb-16 shadow-lg border border-slate-100"
                >
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 font-light"
                >
                    {article.content}
                </motion.div>

                {/* Footer / CTA */}
                <div className="mt-20 pt-10 border-t border-slate-200">
                    <p className="text-slate-500 mb-6 font-light italic">
                        Like what you read? Subscribe to our newsletter for more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="email@address.com"
                            className="flex-1 px-6 py-3 rounded-full border border-slate-200 bg-slate-50 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-900"
                        />
                        <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-black transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default InsightArticle;
