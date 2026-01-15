import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../assets/IeFund.png';

const Footer = () => {
    return (

        <footer className="bg-gray-50 relative overflow-hidden pt-32 pb-12 border-t border-slate-200">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-5">
                        <Link to="/" className="inline-block mb-8 hover:opacity-80 transition-opacity duration-300">
                            <img src={logo} alt="IE Fund" className="h-10 w-auto object-contain" />
                        </Link>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-light">
                            Patient capital for visionary founders. Backing the next generation of category-defining AI & Deep Tech companies.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="font-bold text-slate-900 mb-8 tracking-wide uppercase text-sm opacity-80">Firm</h4>
                        <ul className="space-y-4 text-base text-slate-500">
                            {['Partnerships', 'Portfolio', 'Insights', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="hover:text-slate-900 hover:translate-x-1 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="col-span-1 md:col-span-4">
                        <h4 className="font-bold text-slate-900 mb-8 tracking-wide uppercase text-sm opacity-80">Connect</h4>
                        <div className="flex space-x-6 mb-10">
                            {[
                                { icon: Mail, href: "mailto:kanchan.thakur@iefund.in" }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group"
                                >
                                    <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">
                            Location:<br />
                            F - 126, Katwaria Sarai,<br />
                            110016, New Delhi, India
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} IE Fund. Institutional Excellence.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
