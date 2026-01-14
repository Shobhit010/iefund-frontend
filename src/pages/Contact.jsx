import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

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
            x: direction > 0 ? 20 : -20,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 20 : -20,
            opacity: 0,
        })
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen pt-20 bg-white selection:bg-slate-200 selection:text-slate-900">
            {/* Form Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-32 flex flex-col justify-center border-r border-slate-100 bg-white relative">
                <div className="max-w-xl mx-auto w-full relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter">Get In Touch</h1>
                    <p className="text-xl text-slate-500 mb-16 font-light leading-relaxed">
                        If you have an idea or are working on one, please reach out. We read every deck.
                    </p>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 p-12 rounded-3xl text-center border border-green-100"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
                                <Check size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Received</h3>
                            <p className="text-slate-500 text-lg">Thanks for sharing your vision. We'll be in touch shortly.</p>
                        </motion.div>
                    ) : (
                        <>
                            {/* Progress Bar */}
                            <div className="w-full bg-slate-100 h-1.5 rounded-full mb-12 overflow-hidden">
                                <motion.div
                                    className="bg-slate-900 h-full rounded-full"
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
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-indigo-600 transition-colors">Full Name *</label>
                                                <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 text-lg text-slate-900 shadow-sm" placeholder="Jane Doe" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-indigo-600 transition-colors">Email *</label>
                                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 text-lg text-slate-900 shadow-sm" placeholder="jane@startup.com" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-indigo-600 transition-colors">LinkedIn *</label>
                                                <input required name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all placeholder:text-slate-300 text-lg text-slate-900 shadow-sm" placeholder="linkedin.com/in/jane" />
                                            </div>
                                            <div className="pt-8 flex justify-end">
                                                <button type="button" onClick={handleNext} className="btn-primary flex items-center group">
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
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-cyan-600 transition-colors">Name of the company *</label>
                                                <input required name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all placeholder:text-slate-300 text-lg text-slate-900 shadow-sm" placeholder="Acme Corp" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-cyan-600 transition-colors">Sector *</label>
                                                <div className="relative">
                                                    <select required name="sector" value={formData.sector} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 outline-none transition-all appearance-none cursor-pointer text-lg text-slate-900 shadow-sm">
                                                        <option value="" className="text-slate-400">Select a sector</option>
                                                        {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                                                    </select>
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                        <ChevronRight size={20} className="rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-8 flex justify-between items-center">
                                                <button type="button" onClick={handleBack} className="text-slate-500 hover:text-slate-900 transition-colors flex items-center font-bold px-4 py-2">
                                                    <ChevronLeft size={20} className="mr-1" /> Back
                                                </button>
                                                <button type="button" onClick={handleNext} className="btn-primary flex items-center group">
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
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-violet-600 transition-colors">Where do you think a gap exists in the market? *</label>
                                                <textarea required name="problemGap" value={formData.problemGap} onChange={handleChange} rows={3} className="w-full bg-white border border-slate-200 rounded-xl p-5 focus:border-violet-600 focus:ring-1 focus:ring-violet-600 outline-none text-base resize-none transition-all placeholder:text-slate-300 text-slate-900 shadow-sm" placeholder="The market is missing..." />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-violet-600 transition-colors">How are you looking to solve the problem? *</label>
                                                <textarea required name="solution" value={formData.solution} onChange={handleChange} rows={3} className="w-full bg-white border border-slate-200 rounded-xl p-5 focus:border-violet-600 focus:ring-1 focus:ring-violet-600 outline-none text-base resize-none transition-all placeholder:text-slate-300 text-slate-900 shadow-sm" placeholder="We are building..." />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within:text-violet-600 transition-colors">Link to your Deck *</label>
                                                <input required name="deckLink" value={formData.deckLink} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:border-violet-600 focus:ring-1 focus:ring-violet-600 outline-none transition-all placeholder:text-slate-300 text-lg text-slate-900 shadow-sm" placeholder="docsend.com/..." />
                                            </div>

                                            <div className="pt-8 flex justify-between items-center">
                                                <button type="button" onClick={handleBack} className="text-slate-500 hover:text-slate-900 transition-colors flex items-center font-bold px-4 py-2">
                                                    <ChevronLeft size={20} className="mr-1" /> Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="btn-accent disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
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
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto bg-slate-50 relative border-t lg:border-t-0 lg:border-l border-slate-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085261456073!3d12.953997410046522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1652876645851!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover opacity-80"
                ></iframe>
                <div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl max-w-sm border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xl mb-4">IE Fund</h4>
                    <p className="text-slate-500 leading-relaxed mb-6 font-light">
                        2nd Floor, Unitus Building<br />
                        Koramangala, Bangalore<br />
                        Karnataka 560034
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-900 font-bold text-sm hover:underline hover:text-indigo-600 transition-colors">
                        Get Directions <ChevronRight size={16} className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
