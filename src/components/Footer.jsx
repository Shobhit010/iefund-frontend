import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const Footer = () => {
    return (
        <footer className="bg-[#020617] relative overflow-hidden pt-32 pb-12 border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-5">
                        <Link to="/" className="text-3xl font-display font-bold text-white tracking-tighter block mb-8 hover:text-accent-cyan transition-colors duration-300">
                            IE Fund
                        </Link>
                        <p className="text-text-muted text-lg leading-relaxed max-w-sm font-light">
                            Patient capital for visionary founders. Backing the next generation of category-defining AI & Deep Tech companies.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="font-bold text-white mb-8 tracking-wide uppercase text-sm opacity-80">Firm</h4>
                        <ul className="space-y-4 text-base text-text-muted">
                            {['Partnerships', 'Portfolio', 'Insights', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="col-span-1 md:col-span-4">
                        <h4 className="font-bold text-white mb-8 tracking-wide uppercase text-sm opacity-80">Connect</h4>
                        <div className="flex space-x-6 mb-10">
                            {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-accent/50 hover:shadow-neon transition-all duration-300 group"
                                >
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed font-light">
                            Based in Bangalore, India.<br />
                            Investing Globally.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted font-medium">
                    <p>&copy; {new Date().getFullYear()} IE Fund. Institutional Excellence.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
