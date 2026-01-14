import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const FeatureCard = ({ icon: Icon, title, description, colorClass, iconClass }) => (
    <div className="card-premium h-full p-8 flex flex-col justify-start group">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", iconClass)}>
            <Icon size={26} className={colorClass} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed font-light">{description}</p>
    </div>
);

const Home = () => {
    return (
        <div className="flex flex-col bg-white overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center pt-20 relative">
                {/* Subtle Ambient Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8"
                        >
                            Patient capital <br />
                            for <span className="text-gradient-indigo">category defining</span> <br />
                            founders.
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                        >
                            We partner with visionary entrepreneurs from day one, providing the conviction and capital to build long-term institutions.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <Link
                                to="/partnerships"
                                className="btn-primary flex items-center gap-2 group"
                            >
                                Our Philosophy
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="btn-secondary flex items-center gap-2"
                            >
                                View Portfolio
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-32 bg-white relative">
                <div className="container-custom relative z-10">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            We are in it for the <span className="text-indigo-600 underline decoration-wavy decoration-indigo-200 underline-offset-8">long term</span>.
                        </h2>
                        <p className="text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
                            For us, it all starts with founders. We back people who have the resilience to build over decades.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Users}
                            title="Founder First"
                            description="We back people, not just ideas. Your resilience and vision are our biggest due diligence items."
                            iconClass="bg-emerald-50 text-emerald-600"
                            colorClass="text-emerald-600"
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Patient Capital"
                            description="We structured our fund to match the timeline of building a generational company. No short-term pressure."
                            iconClass="bg-violet-50 text-violet-600"
                            colorClass="text-violet-600"
                        />
                        <FeatureCard
                            icon={Zap}
                            title="High Conviction"
                            description="We make few bets and go all in. When we commit, we are your strongest partner in the trenches."
                            iconClass="bg-amber-50 text-amber-600"
                            colorClass="text-amber-600"
                        />
                    </div>
                </div>
            </section>

            {/* Latest Insights Preview */}
            <section className="py-32 bg-slate-50/50 border-t border-slate-100/50">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Perspectives</h2>
                        <Link to="/insights" className="hidden md:flex items-center gap-2 text-slate-500 font-medium hover:text-indigo-600 transition-colors text-lg group">
                            Read all insights <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                tag: "Fintech", date: "Sep 15, 2021", title: "Neo Banks in India: The Hype and The Myth",
                                desc: "Understanding the true potential and pitfalls of the neobanking revolution in India...",
                                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                tag: "AI / ML", date: "Feb 28, 2023", title: "AI for founders, managers, and VCs",
                                desc: "How generative AI is reshaping the landscape of company building and investment decision making...",
                                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                tag: "SaaS", date: "Jul 12, 2024", title: "Valuation multiples 101 for founders",
                                desc: "A deep dive into how valuations are really calculated in different market cycles...",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((post, idx) => (
                            <Link to="/insights" key={idx} className="group flex flex-col h-full">
                                <div className="card-premium p-0 h-full flex flex-col">
                                    <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative border-b border-slate-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-700 uppercase tracking-wider shadow-sm border border-indigo-100">
                                            {post.tag}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                                            {post.date}
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>5 min read</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight mb-4">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 line-clamp-2 text-base font-light leading-relaxed">
                                            {post.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimal CTA */}
            <section className="py-32 bg-white border-t border-slate-100 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tighter">Let's build the future.</h2>
                    <p className="text-2xl text-slate-500 mb-12 font-light leading-relaxed">
                        If you are building something categorical, we want to hear from you.
                    </p>
                    <Link
                        to="/contact-us"
                        className="btn-primary text-lg inline-flex items-center gap-2 hover:-translate-y-1"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
