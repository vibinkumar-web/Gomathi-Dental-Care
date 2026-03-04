import { useEffect, useRef } from 'react';
import { Cpu, Users, DollarSign, Clock } from 'lucide-react';

const features = [
    {
        icon: Cpu,
        title: 'State-of-the-Art Equipment',
        description: 'Advanced digital X-rays, 3D scanning, and laser dentistry for precise, painless care.',
        color: 'bg-blue-100 text-blue-600',
        border: 'border-blue-200',
    },
    {
        icon: Users,
        title: 'Experienced Specialists',
        description: 'A team of board-certified dentists with decades of combined clinical expertise.',
        color: 'bg-emerald-100 text-emerald-600',
        border: 'border-emerald-200',
    },
    {
        icon: DollarSign,
        title: 'Affordable Pricing',
        description: 'Transparent fee structures, insurance support, and flexible EMI payment options.',
        color: 'bg-amber-100 text-amber-600',
        border: 'border-amber-200',
    },
    {
        icon: Clock,
        title: 'Flexible Scheduling',
        description: 'Open 7 days a week with early and evening slots — dental care on your schedule.',
        color: 'bg-purple-100 text-purple-600',
        border: 'border-purple-200',
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.section-animate').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 120);
                    });
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-[#E0F2FE]/40" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 section-animate">
                    <span className="text-sm font-semibold text-[#0077B6] uppercase tracking-widest">
                        Our Advantages
                    </span>
                    <h2
                        className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E293B]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Why Choose Us?
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#0077B6]" />
                    <p className="mt-4 text-[#64748B] max-w-xl mx-auto">
                        We go beyond just dental treatments — we create experiences that make you want to come
                        back for your next visit.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`section-animate bg-white border ${feature.border} rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div
                                    className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3
                                    className="font-bold text-[#1E293B] mb-2 text-base"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA strip */}
                <div className="section-animate mt-10 bg-[#0077B6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Ready to experience the difference?
                        </h3>
                        <p className="text-white/80 text-sm mt-1">
                            Join 10,000+ patients who trust Pearl Smile for their dental health.
                        </p>
                    </div>
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-shrink-0 px-6 py-3 bg-white text-[#0077B6] font-semibold rounded-full hover:bg-[#E0F2FE] transition-colors shadow-md"
                    >
                        Book Appointment →
                    </button>
                </div>
            </div>
        </section>
    );
}
