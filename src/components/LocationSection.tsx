import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

const contacts = [
    {
        icon: MapPin,
        title: 'Address',
        lines: ['289, Thiruvengadam Road', 'Kakkan Nagar, Sankarankovil', 'Tamil Nadu – 627 756'],
        color: 'text-[#0077B6]',
        bg: 'bg-blue-50',
    },
    {
        icon: Phone,
        title: 'Phone',
        lines: ['90438 16020', '75980 42020'],
        color: 'text-[#10B981]',
        bg: 'bg-emerald-50',
    },
    {
        icon: Mail,
        title: 'Email',
        lines: ['info@Gomathidental.com'],
        color: 'text-[#F59E0B]',
        bg: 'bg-amber-50',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
        color: 'text-[#8B5CF6]',
        bg: 'bg-purple-50',
    },
];

export default function LocationSection() {
    return (
        <section id="contact" className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#E0F2FE] text-[#0077B6] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                        Find Us
                    </span>
                    <h2 className="text-4xl font-extrabold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Location &amp; Contact
                    </h2>
                    <p className="text-[#64748B] mt-3 max-w-xl mx-auto">
                        Visit us at Sankarankovil, Tirunelveli District. We're open 7 days a week.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Map placeholder */}
                    <div className="rounded-3xl overflow-hidden shadow-md border border-[#E2E8F0] bg-white">
                        <div className="w-full h-72 relative"
                            style={{ background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 60%, #E0F2FE 100%)' }}>
                            {/* SVG map grid */}
                            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0077B6" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#mapgrid)" />
                                <line x1="35%" y1="0" x2="35%" y2="100%" stroke="#0077B6" strokeWidth="2" strokeOpacity="0.4" />
                                <line x1="65%" y1="0" x2="65%" y2="100%" stroke="#0077B6" strokeWidth="1" strokeOpacity="0.3" />
                                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0077B6" strokeWidth="2" strokeOpacity="0.4" />
                            </svg>
                            {/* Pin */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                                <div className="w-12 h-12 bg-[#0077B6] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div className="bg-white rounded-xl shadow-md px-4 py-2 text-center">
                                    <p className="font-bold text-[#0077B6] text-sm">Gomathi Dental Clinic</p>
                                    <p className="text-xs text-[#64748B]">289, Thiruvengadam Road, Kakkan Nagar, Sankarankovil</p>
                                </div>
                                <a href="https://maps.google.com/?q=289+Thiruvengadam+Road+Kakkan+Nagar+Sankarankovil"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-xs text-[#0077B6] font-medium underline underline-offset-2 hover:text-[#005F8A] transition-colors">
                                    View on Google Maps →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact cards */}
                    <div className="space-y-4">
                        {contacts.map(({ icon: Icon, title, lines, color, bg }) => (
                            <div key={title} className="bg-white border border-[#E2E8F0] rounded-2xl p-4 flex items-start gap-4">
                                <div className={`${bg} rounded-xl p-3 flex-shrink-0`}>
                                    <Icon className={`w-5 h-5 ${color}`} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">{title}</p>
                                    {lines.map((line) => (
                                        <p key={line} className="text-[#1E293B] font-medium text-sm">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Emergency */}
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-red-700 text-sm">Dental Emergency?</p>
                                <p className="text-xs text-red-600 mt-0.5">
                                    Call us immediately — same-day urgent appointments available on <span className="font-semibold">90438 16020</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
