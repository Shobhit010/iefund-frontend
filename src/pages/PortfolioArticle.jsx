import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import { cn } from '../lib/utils';

const PortfolioArticle = () => {
    const { slug } = useParams();

    // Find the project. If slug matches, good. If not found, handle gracefully.
    const project = portfolioData.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-32 pb-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h2>
                    <Link to="/portfolio" className="text-indigo-600 hover:underline">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    // Prepare content rendering
    // If project has specific 'content' (like Trigrexam), render it.
    // Otherwise, render a default layout using description.
    const hasContent = !!project.content;

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container-custom max-w-4xl mx-auto"
            >
                {/* Back Link */}
                <Link to="/portfolio" className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors mb-10 font-medium group text-sm uppercase tracking-wide">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border bg-slate-50 text-slate-700 border-slate-100"
                        )}>
                            {project.sector}
                        </span>
                    </div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
                    >
                        {project.title || project.name}
                    </motion.h1>

                    {/* Show Date/ReadTime if available (for Trigrexam article style) */}
                    {(project.date || project.readTime) && (
                        <div className="flex items-center gap-6 text-slate-500 text-sm md:text-base border-b border-slate-100 pb-10">
                            {project.date && <div>{project.date}</div>}
                            {project.date && project.readTime && <div className="w-1 h-1 rounded-full bg-slate-300"></div>}
                            {project.readTime && <div>{project.readTime}</div>}
                        </div>
                    )}
                </div>

                {/* Content */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 font-light"
                >
                    {hasContent ? (
                        project.content
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-slate-500 mb-8">{project.description}</p>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-black transition-colors"
                            >
                                Visit Website <ArrowUpRight size={18} className="ml-2" />
                            </a>
                        </div>
                    )}
                </motion.div>

                {/* Footer Link if content exists */}
                {hasContent && (
                    <div className="mt-20 pt-10 border-t border-slate-200">
                        <Link to="/portfolio" className="text-indigo-600 font-bold hover:underline">
                            ← View other investments
                        </Link>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default PortfolioArticle;
