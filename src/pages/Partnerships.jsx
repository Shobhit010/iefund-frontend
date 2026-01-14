import { motion } from 'framer-motion';

const Partnerships = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <section className="container-custom mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">
                        We don't just invest.<br />
                        We <span className="text-gradient">partner</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
                        Building a company is the hardest thing you will ever do. We are here to make the journey a little less lonely and a lot more ambitious.
                    </p>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="bg-bg-subtle py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Philosophy</h2>
                            <p className="text-lg text-text-muted leading-relaxed mb-6">
                                At IE Fund, we believe that the best founders don't need management; they need alignment. We align our capital, our network, and our energy with your vision.
                            </p>
                            <p className="text-lg text-text-muted leading-relaxed">
                                We are high-conviction, low-volume investors. This means when we commit, we are all in. We don't take board seats to control; we take them to serve.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-8">
                            <motion.div
                                className="bg-white p-8 rounded-2xl shadow-sm"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-primary mb-3">Early Conviction</h3>
                                <p className="text-text-muted">We love being the first check. We underwrite people and markets before metrics and dashboards.</p>
                            </motion.div>
                            <motion.div
                                className="bg-white p-8 rounded-2xl shadow-sm"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-primary mb-3">Founder Empathy</h3>
                                <p className="text-text-muted">We know the struggle. We provide patient capital that respects the messy reality of company building.</p>
                            </motion.div>
                            <motion.div
                                className="bg-white p-8 rounded-2xl shadow-sm"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-primary mb-3">Specific Help</h3>
                                <p className="text-text-muted">We don't offer generic advice. We open specific doors for hiring, customers, and follow-on funding.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Criteria Section */}
            <section className="container-custom py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl font-bold text-primary mb-6">Where we play</h2>
                    <p className="text-xl text-text-muted">We are sector agnostic but thesis driven. We look for outliers in massive or emerging markets.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "B2B SaaS", desc: "Mission-critical software that powers the economy." },
                        { title: "Fintech", desc: "The plumbing of modern commerce and finance." },
                        { title: "Consumer", desc: "Products that change behavior and culture." },
                        { title: "Deep Tech", desc: "Scientific breakthroughs solving hard problems." },
                        { title: "Healthcare", desc: "Improving outcomes and access at scale." },
                        { title: "AI / ML", desc: "Intelligence as the new platform shift." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-border-light p-8 rounded-xl hover:border-accent/50 transition-colors"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                            <p className="text-text-muted">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Partnerships;
