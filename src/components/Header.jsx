import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Partnerships', path: '/partnerships' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Insights', path: '/insights' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                scrolled
                    ? "bg-black/50 backdrop-blur-xl border-white/5 py-3 shadow-glow"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter hover:text-accent-cyan transition-colors duration-300 relative group">
                    <span className="relative z-10">IE Fund</span>
                    <span className="absolute -inset-2 bg-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "text-[15px] font-medium transition-all duration-300 tracking-wide relative group px-2 py-1",
                                isActive(link.path)
                                    ? "text-white"
                                    : "text-text-muted hover:text-white"
                            )}
                        >
                            <span className="relative z-10">{link.name}</span>
                            {/* Hover Neon Glow */}
                            <span className={cn(
                                "absolute inset-0 bg-accent/10 rounded-md blur-md transition-opacity duration-300",
                                isActive(link.path) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            )} />
                            {/* Animated Underline */}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent-cyan to-accent-violet scale-x-0 transition-transform duration-300 origin-left",
                                isActive(link.path) ? "scale-x-100" : "group-hover:scale-x-100"
                            )} />
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="md:hidden bg-[#020617] border-b border-white/10 overflow-hidden backdrop-blur-xl"
                    >
                        <nav className="container-custom flex flex-col py-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-between",
                                        isActive(link.path)
                                            ? "bg-white/5 text-white"
                                            : "text-text-muted hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                    {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_#06B6D4]" />}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
