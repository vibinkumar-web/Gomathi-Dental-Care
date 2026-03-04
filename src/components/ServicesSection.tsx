import { useEffect, useRef } from 'react';
import { services } from '../data/services';
import {
    Activity, Syringe, Shield, Sparkles, Smile,
    Zap, Heart, Baby, Cpu, Stethoscope
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Activity, Syringe, Shield, Sparkles, Smile,
    Zap, Heart, Baby, Cpu, Stethoscope,
};

export default function ServicesSection() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );
        cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#E0F2FE] text-[#0077B6] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                        What We Offer
                    </span>
                    <h2 className="text-4xl font-extrabold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Our Dental Services
                    </h2>
                    <p className="text-[#64748B] mt-3 max-w-xl mx-auto">
                        From routine checkups to complete smile transformations — all under one roof.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] ?? Smile;
                        return (
                            <div
                                key={service.id}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                className="section-animate group bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                                style={{ transitionDelay: `${index * 60}ms` }}
                            >
                                <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-[#1E293B] mb-2 text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">{service.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* RVG badge */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#0077B6]/5 border border-[#0077B6]/20 text-[#0077B6] px-5 py-2.5 rounded-full text-sm font-semibold">
                        🩻  RVG Digital X-Ray Facility Available
                    </div>
                </div>
            </div>
        </section>
    );
}
