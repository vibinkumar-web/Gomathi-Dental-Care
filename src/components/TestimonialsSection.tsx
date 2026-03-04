import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.section-animate').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 150);
                    });
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-[#F8FAFC]" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 section-animate">
                    <span className="text-sm font-semibold text-[#0077B6] uppercase tracking-widest">
                        Patient Stories
                    </span>
                    <h2
                        className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E293B]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        What Our Patients Say
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#0077B6]" />
                    <p className="mt-4 text-[#64748B] max-w-xl mx-auto">
                        Real stories from real patients — because your experiences matter more than any award.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="section-animate bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#E2E8F0] flex flex-col"
                        >
                            {/* Quote icon */}
                            <div className="mb-4">
                                <Quote className="w-8 h-8 text-[#0077B6]/20" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-[#64748B] leading-relaxed italic text-sm flex-grow">
                                "{t.text}"
                            </p>

                            {/* Patient */}
                            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#E2E8F0]">
                                <div
                                    className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1E293B] text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        {t.name}
                                    </p>
                                    <p className="text-[#64748B] text-xs">Verified Patient</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust badges row */}
                <div className="section-animate mt-10 flex flex-wrap items-center justify-center gap-6">
                    {[
                        { icon: '🏆', label: 'Best Dental Clinic 2024' },
                        { icon: '⭐', label: '4.9 Average Rating' },
                        { icon: '✅', label: 'ISO Certified' },
                        { icon: '🦷', label: '10,000+ Smiles Created' },
                    ].map((badge) => (
                        <div
                            key={badge.label}
                            className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-4 py-2 shadow-sm text-sm text-[#1E293B] font-medium"
                        >
                            <span>{badge.icon}</span>
                            {badge.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
