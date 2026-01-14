import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/Spotlight';
import { BackgroundGradient, AuroraBackground } from '../components/ui/BackgroundGradient';
import { cn } from '../lib/utils';
import { useState } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-8 bg-slate-900 h-full flex flex-col justify-start">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-text-muted leading-relaxed font-light">{description}</p>
    </BackgroundGradient>
);

const Home = () => {
    return (
        <div className="flex flex-col bg-bg-base overflow-hidden selection:bg-accent selection:text-white">
            {/* Hero Section with Aurora */}
            <AuroraBackground className="min-h-screen">
                <div className="container-custom relative z-10 pt-32 pb-20">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8"
                        >
                            <span className="text-gradient-premium">Patient capital</span> <br />
                            for category <br />
                            defining founders.
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                        >
                            We partner with visionary entrepreneurs from day one, providing the conviction and capital to build long-term institutions.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <Link
                                to="/partnerships"
                                className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-2 group"
                            >
                                Our Philosophy
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="px-10 py-5 bg-transparent text-white border border-white/20 text-lg font-bold rounded-full hover:bg-white/5 hover:border-white/50 transition-all flex items-center gap-2 backdrop-blur-md"
                            >
                                View Portfolio
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </AuroraBackground>

            {/* Value Proposition */}
            <section className="py-40 bg-[#020617] relative">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#6366F1" />
                <div className="container-custom relative z-10">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            We are in it for the <span className="text-accent underline decoration-wavy decoration-accent/30 underline-offset-8">long term</span>.
                        </h2>
                        <p className="text-2xl text-text-muted max-w-3xl font-light leading-relaxed">
                            For us, it all starts with founders. We back people who have the resilience to build over decades.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Users}
                            title="Founder First"
                            description="We back people, not just ideas. Your resilience and vision are our biggest due diligence items."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Patient Capital"
                            description="We structured our fund to match the timeline of building a generational company. No short-term pressure."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="High Conviction"
                            description="We make few bets and go all in. When we commit, we are your strongest partner in the trenches."
                        />
                    </div>
                </div>
            </section>

            {/* Latest Insights Preview */}
            <section className="py-40 bg-[#0F172A]">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-20">
                        <h2 className="text-5xl font-bold text-white tracking-tight">Perspectives</h2>
                        <Link to="/insights" className="hidden md:flex items-center gap-2 text-white/70 font-medium hover:text-white transition-colors text-lg group">
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
                                <div className="w-full aspect-[4/3] bg-slate-800 rounded-3xl overflow-hidden mb-8 relative group-hover:shadow-glow transition-all duration-500">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-0 group-hover:saturate-100 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                                        {post.tag}
                                    </div>
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="text-sm font-medium text-text-muted mb-3 flex items-center gap-2">
                                        {post.date}
                                        <span className="w-1 h-1 rounded-full bg-border-subtle" />
                                        <span>5 min read</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors leading-tight mb-4">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-muted line-clamp-2 text-base font-light leading-relaxed">
                                        {post.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimal CTA */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-20" />
                <Spotlight className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 w-[150%]" fill="#8B5CF6" />
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-tighter">Let's build the future.</h2>
                    <p className="text-2xl text-indigo-100/80 mb-16 font-light leading-relaxed">
                        If you are building something categorical, we want to hear from you.
                    </p>
                    <Link
                        to="/contact-us"
                        className="inline-block px-14 py-6 bg-white text-black text-xl font-bold rounded-full hover:bg-indigo-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:-translate-y-2"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
