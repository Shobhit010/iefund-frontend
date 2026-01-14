import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { Spotlight } from '../components/ui/Spotlight';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        linkedin: '',
        companyName: '',
        sector: '',
        problemGap: '',
        solution: '',
        deckLink: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (step === 1 && (!formData.fullName || !formData.email || !formData.linkedin)) return alert("Please fill all fields");
        if (step === 2 && (!formData.companyName || !formData.sector)) return alert("Please fill all fields");
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.problemGap || !formData.solution || !formData.deckLink) return alert("Please fill all fields");

        setIsSubmitting(true);

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({
                    fullName: '', email: '', linkedin: '', companyName: '',
                    sector: '', problemGap: '', solution: '', deckLink: ''
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const sectors = [
        "AI / SaaS", "Fintech", "B2B", "Consumer Internet",
        "D2C / Consumer", "Healthcare", "Hardware / Deeptech", "Other"
    ];

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 30 : -30,
            opacity: 0,
            filter: "blur(10px)"
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)"
        },
        exit: (direction) => ({
            x: direction < 0 ? 30 : -30,
            opacity: 0,
            filter: "blur(10px)"
        })
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen pt-20 bg-bg-base selection:bg-accent selection:text-white">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-32 flex flex-col justify-center border-r border-white/5 bg-[#020617] relative overflow-hidden">
                <Spotlight className="-top-40 left-0 md:left-20 md:-top-20 opacity-50" fill="#8B5CF6" />
                <div className="max-w-xl mx-auto w-full relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Get In Touch</h1>
                    <p className="text-xl text-text-muted mb-16 font-light leading-relaxed">
                        If you have an idea or are working on one, please reach out. We read every deck.
                    </p>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-500/10 p-12 rounded-3xl text-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                        >
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50 shadow-glow">
                                <Check className="text-green-400" size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Received</h3>
                            <p className="text-text-muted text-lg">Thanks for sharing your vision. We'll be in touch shortly.</p>
                        </motion.div>
                    ) : (
                        <>
                            {/* Progress Bar */}
                            <div className="w-full bg-white/5 h-1.5 rounded-full mb-12 overflow-hidden">
                                <motion.div
                                    className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-full shadow-neon"
                                    initial={{ width: "33%" }}
                                    animate={{ width: `${(step / 3) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                />
                            </div>

                            <form onSubmit={handleSubmit} className="min-h-[400px]">
                                <AnimatePresence mode="wait" custom={step}>
                                    {step === 1 && (
                                        <motion.div
                                            key={1}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.4, ease: "circOut" }}
                                            className="space-y-8"
                                        >
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">Full Name *</label>
                                                <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all placeholder:text-white/20 text-lg shadow-inner text-white focus:bg-slate-900" placeholder="Jane Doe" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">Email *</label>
                                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all placeholder:text-white/20 text-lg shadow-inner text-white focus:bg-slate-900" placeholder="jane@startup.com" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">LinkedIn *</label>
                                                <input required name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all placeholder:text-white/20 text-lg shadow-inner text-white focus:bg-slate-900" placeholder="linkedin.com/in/jane" />
                                            </div>
                                            <div className="pt-8 flex justify-end">
                                                <button type="button" onClick={handleNext} className="bg-white text-black px-10 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-50 hover:shadow-glow transition-all flex items-center group hover:-translate-y-1">
                                                    Next <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key={2}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.4, ease: "circOut" }}
                                            className="space-y-8"
                                        >
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">Name of the company *</label>
                                                <input required name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all placeholder:text-white/20 text-lg shadow-inner text-white focus:bg-slate-900" placeholder="Acme Corp" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">Sector *</label>
                                                <div className="relative">
                                                    <select required name="sector" value={formData.sector} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all appearance-none cursor-pointer text-lg shadow-inner text-white focus:bg-slate-900">
                                                        <option value="" className="bg-slate-900">Select a sector</option>
                                                        {sectors.map(s => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
                                                    </select>
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                                        <ChevronRight size={20} className="rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-8 flex justify-between items-center">
                                                <button type="button" onClick={handleBack} className="text-text-muted hover:text-white transition-colors flex items-center font-bold px-4 py-2">
                                                    <ChevronLeft size={20} className="mr-1" /> Back
                                                </button>
                                                <button type="button" onClick={handleNext} className="bg-white text-black px-10 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-50 hover:shadow-glow transition-all flex items-center group hover:-translate-y-1">
                                                    Next <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key={3}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.4, ease: "circOut" }}
                                            className="space-y-8"
                                        >
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">Where do you think a gap exists in the market? *</label>
                                                <textarea required name="problemGap" value={formData.problemGap} onChange={handleChange} rows={3} className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-5 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none text-base resize-none transition-all placeholder:text-white/20 shadow-inner text-white focus:bg-slate-900" placeholder="The market is missing..." />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">How are you looking to solve the problem? *</label>
                                                <textarea required name="solution" value={formData.solution} onChange={handleChange} rows={3} className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-5 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none text-base resize-none transition-all placeholder:text-white/20 shadow-inner text-white focus:bg-slate-900" placeholder="We are building..." />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1 group-focus-within:text-accent-cyan transition-colors">Link to your Deck *</label>
                                                <input required name="deckLink" value={formData.deckLink} onChange={handleChange} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-all placeholder:text-white/20 text-lg shadow-inner text-white focus:bg-slate-900" placeholder="docsend.com/..." />
                                            </div>

                                            <div className="pt-8 flex justify-between items-center">
                                                <button type="button" onClick={handleBack} className="text-text-muted hover:text-white transition-colors flex items-center font-bold px-4 py-2">
                                                    <ChevronLeft size={20} className="mr-1" /> Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="bg-accent-cyan text-black px-12 py-4 rounded-full font-bold shadow-lg hover:bg-cyan-400 hover:shadow-neon transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Submit Idea'}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </>
                    )}
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-slate-900 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085261456073!3d12.953997410046522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1652876645851!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(1) brightness(0.8) contrast(1.2)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover"
                ></iframe>
                <div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-auto bg-black/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl max-w-sm border border-white/20">
                    <h4 className="font-bold text-white text-xl mb-4">IE Fund</h4>
                    <p className="text-text-muted leading-relaxed mb-6 font-light">
                        2nd Floor, Unitus Building<br />
                        Koramangala, Bangalore<br />
                        Karnataka 560034
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent-cyan font-bold text-sm hover:underline hover:text-white transition-colors">
                        Get Directions <ChevronRight size={16} className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
