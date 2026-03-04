import { Calendar, Phone } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #005F8A 0%, #0077B6 50%, #00B4D8 100%)' }} />
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7DD3FC, transparent)' }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)' }} />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <span className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                    ✦ Your Smile Awaits
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Ready to Transform<br />Your Smile?
                </h2>
                <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
                    Book your appointment at Gomathi Dental Clinic today. Expert care with Dr. N. Venkatesh, BDS.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 px-7 py-3.5 bg-white text-[#0077B6] font-bold rounded-full hover:bg-[#E0F2FE] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                    </button>
                    <a href="tel:+919043816020"
                        className="flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300">
                        <Phone className="w-4 h-4" />
                        90438 16020
                    </a>
                </div>
            </div>
        </section>
    );
}
