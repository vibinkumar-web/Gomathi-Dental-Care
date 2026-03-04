import { CheckCircle, Stethoscope, Star } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* ── Left ── */}
                    <div className="space-y-6">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B6]">About Us</p>

                        <h2
                            className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] leading-tight"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Caring for Your<br />
                            <span className="text-[#0077B6]">Smile Since Day One</span>
                        </h2>

                        <p className="text-[#64748B] leading-relaxed">
                            At <span className="font-semibold text-[#1E293B]">Gomathi Dental Clinic</span>, we believe everyone deserves a healthy,
                            confident smile. Located in the heart of Sankarankovil, our clinic combines
                            modern technology with compassionate care to serve patients of all ages.
                        </p>

                        <p className="text-[#64748B] leading-relaxed">
                            From routine cleanings to complex implants and braces, our experienced team
                            is here to guide you through every step — gently, affordably, and effectively.
                        </p>

                        {/* Feature list */}
                        <ul className="space-y-3">
                            {[
                                'RVG Digital X-Ray facility',
                                'Government Approved Practice',
                                'Painless procedures with modern equipment',
                                'Children-friendly environment',
                                'Emergency dental care available',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#475569]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Right ── */}
                    <div className="space-y-5">

                        {/* Doctor profile */}
                        <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
                            <div className="bg-[#0077B6] px-6 py-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}>NV</div>
                                <div>
                                    <p className="font-bold text-white text-base">Dr. N. Venkatesh</p>
                                    <p className="text-white/70 text-sm">BDS · Reg. No. 34462</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="bg-[#10B981] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Govt. Approved</span>
                                </div>
                            </div>
                            <div className="bg-white px-6 py-4">
                                <p className="text-sm text-[#64748B] leading-relaxed">
                                    A highly skilled dental surgeon with expertise in cosmetic, restorative, and preventive dentistry.
                                    Committed to making every visit comfortable, effective, and stress-free.
                                </p>
                            </div>
                        </div>

                        {/* Tamil name + tagline card */}
                        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl px-6 py-5 text-center">
                            <p className="text-[#0077B6] font-bold text-xl mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                கோமதி பல் மருத்துவமனை
                            </p>
                            <p className="text-xs tracking-[0.25em] text-[#64748B] uppercase font-medium">Smile · Sparkle · Shine</p>
                        </div>

                        {/* 2 small stat tiles */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#E0F2FE] rounded-2xl p-5 text-center">
                                <Stethoscope className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
                                <p className="font-bold text-[#0077B6] text-sm">9 Services</p>
                                <p className="text-xs text-[#64748B] mt-0.5">Under one roof</p>
                            </div>
                            <div className="bg-[#E0F2FE] rounded-2xl p-5 text-center">
                                <Star className="w-6 h-6 text-[#F59E0B] mx-auto mb-2" />
                                <p className="font-bold text-[#0077B6] text-sm">4.9 Rating</p>
                                <p className="text-xs text-[#64748B] mt-0.5">Trusted by patients</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
