import { Smile, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const services = [
    'Braces & Teeth Alignment',
    'Root Canal Treatment',
    'Dental Implants',
    'Teeth Whitening',
    'Dentures & Prosthetics',
    'Gum Disease Treatment',
    'Children\'s Dental Care',
    'Tooth Filling & Cleaning',
];

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    const handleScroll = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 bg-[#0077B6] rounded-xl flex items-center justify-center">
                                <Smile className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-white text-lg leading-none" style={{ fontFamily: "'Poppins', sans-serif" }}>Gomathi</p>
                                <p className="text-[10px] text-white/50 leading-none">Dental Clinic</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">
                            கோமதி பல் மருத்துவமனை<br />
                            Smile · Sparkle · Shine<br /><br />
                            Led by <span className="text-white/80 font-medium">Dr. N. Venkatesh, BDS</span> (Reg. 34462),
                            we deliver trusted dental care to families across Chennai.
                        </p>
                        {/* Social */}
                        <div className="flex gap-2">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0077B6] transition-colors">
                                    <Icon className="w-4 h-4 text-white/70" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                                        className="text-sm text-white/60 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((s) => (
                                <li key={s} className="text-sm text-white/60">{s}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <MapPin className="w-4 h-4 text-[#0077B6] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-white/60">289, Thiruvengadam Road,<br />Kakkan Nagar, Sankarankovil<br />Tamil Nadu – 627 756</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                                <div>
                                    <a href="tel:+919043816020" className="text-sm text-white/60 hover:text-white block">90438 16020</a>
                                    <a href="tel:+917598042020" className="text-sm text-white/60 hover:text-white block">75980 42020</a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                                <a href="mailto:info@Gomathidental.com" className="text-sm text-white/60 hover:text-white">info@Gomathidental.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Gomathi Dental Clinic. All rights reserved.</p>
                    <p>Dr. N. Venkatesh, BDS · Reg. No. 34462 · Govt. Approved</p>
                </div>
            </div>
        </footer>
    );
}
