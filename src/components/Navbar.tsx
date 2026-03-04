import { useState, useEffect } from 'react';
import { Menu, X, Smile } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        const sections = ['home', 'about', 'services', 'gallery', 'contact'];
        const observers: IntersectionObserver[] = [];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.4 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observers.forEach((o) => o.disconnect());
        };
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E2E8F0]' : 'bg-white border-b border-[#E2E8F0]'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center gap-2 group">
                        <div className="w-9 h-9 bg-[#0077B6] rounded-xl flex items-center justify-center group-hover:bg-[#005F8A] transition-colors">
                            <Smile className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="font-bold text-[#1E293B] text-lg leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Gomathi
                            </span>
                            <p className="text-[10px] text-[#64748B] leading-none">Dental Clinic</p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a key={link.href} href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'bg-[#E0F2FE] text-[#0077B6]' : 'text-[#64748B] hover:text-[#0077B6] hover:bg-[#E0F2FE]/60'
                                        }`}>
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <a href="tel:+919043816020"
                            className="hidden md:inline-flex items-center px-5 py-2 bg-[#0077B6] text-white text-sm font-semibold rounded-full hover:bg-[#005F8A] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            Book Appointment
                        </a>
                        <button className="md:hidden p-2 rounded-lg text-[#64748B] hover:bg-[#E0F2FE] transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-[#E2E8F0] py-3 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#1E293B] hover:bg-[#E0F2FE] hover:text-[#0077B6] transition-colors">
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2 px-4">
                            <a href="tel:+919043816020"
                                className="w-full flex items-center justify-center px-5 py-2.5 bg-[#0077B6] text-white text-sm font-semibold rounded-full hover:bg-[#005F8A] transition-colors">
                                Call Now: 90438 16020
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
