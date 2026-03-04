import { Phone, Calendar, MapPin, Clock } from 'lucide-react';

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-between overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #EFF9FF 0%, #E0F2FE 55%, #BAE6FD 100%)' }}
        >
            {/* Subtle circle decorations */}
            <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full border border-[#0077B6]/10 pointer-events-none" />
            <div className="absolute top-[-20px] right-[-20px] w-[300px] h-[300px] rounded-full border border-[#0077B6]/10 pointer-events-none" />
            <div className="absolute bottom-40 left-[-60px] w-[260px] h-[260px] rounded-full border border-[#0077B6]/10 pointer-events-none" />

            {/* ── Centre content ── */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-28 gap-5">

                {/* Tamil name badge */}
                <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-full px-5 py-2 text-[#0077B6] text-sm font-semibold tracking-wide">
                    கோமதி பல் மருத்துவமனை
                </div>

                {/* Clinic name */}
                <h1
                    className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#1E293B] leading-none tracking-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    Gomathi<br />
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #0077B6, #00B4D8)' }}>
                        Dental Clinic
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-lg sm:text-xl tracking-[0.3em] text-[#0077B6] font-bold uppercase">
                    Smile &nbsp;·&nbsp; Sparkle &nbsp;·&nbsp; Shine
                </p>

                {/* Doctor */}
                <p className="text-base text-[#64748B]">
                    Dr. N. Venkatesh, BDS &nbsp;|&nbsp; Reg. No. 34462 &nbsp;|&nbsp; Govt. Approved
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 px-8 py-3.5 bg-[#0077B6] text-white font-bold rounded-full hover:bg-[#005F8A] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
                    >
                        <Calendar className="w-5 h-5" />
                        Book Appointment
                    </button>
                    <a
                        href="tel:+919043816020"
                        className="flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#E2E8F0] text-[#1E293B] font-semibold rounded-full hover:border-[#0077B6] hover:text-[#0077B6] transition-all duration-300 shadow-sm text-base"
                    >
                        <Phone className="w-5 h-5" />
                        90438 16020
                    </a>
                </div>

            </div>

            {/* ── Bottom info strip ── */}
            <div className="relative z-10 bg-white/70 border-t border-[#E2E8F0] backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0] gap-3 sm:gap-0">

                    <div className="flex items-center gap-3 sm:justify-center py-2 sm:py-0 sm:px-6">
                        <MapPin className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                        <p className="text-sm text-[#475569]">
                            289, Thiruvengadam Rd, Kakkan Nagar,<br className="hidden sm:block" /> Sankarankovil – 627 756
                        </p>
                    </div>

                    <div className="flex items-center gap-3 sm:justify-center py-2 sm:py-0 sm:px-6">
                        <Phone className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                        <p className="text-sm text-[#475569]">
                            90438 16020 &nbsp;·&nbsp; 75980 42020
                        </p>
                    </div>

                    <div className="flex items-center gap-3 sm:justify-center py-2 sm:py-0 sm:px-6">
                        <Clock className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                        <p className="text-sm text-[#475569]">
                            Mon–Sat: 9 AM – 8 PM &nbsp;·&nbsp; Sun: 10 AM – 2 PM
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
