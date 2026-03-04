import { useEffect, useRef } from 'react';
import { galleryItems } from '../data/galleryItems';
import { Camera } from 'lucide-react';

export default function GallerySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.section-animate').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 80);
                    });
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="gallery" className="py-16 md:py-24 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 section-animate">
                    <span className="text-sm font-semibold text-[#0077B6] uppercase tracking-widest">
                        Take a Tour
                    </span>
                    <h2
                        className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E293B]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Our Clinic
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#0077B6]" />
                    <p className="mt-4 text-[#64748B] max-w-xl mx-auto">
                        Step inside Pearl Smile — a modern, welcoming environment designed for your comfort
                        and care.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className={`section-animate group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${item.gradient} ${item.span ?? ''}`}
                        >
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                <Camera className="w-8 h-8 text-[#0077B6]/40 mb-2" />
                                <span className="text-[#1E293B]/40 text-sm font-medium text-center">{item.label}</span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#0077B6]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <Camera className="w-8 h-8 text-white mb-2" />
                                <span className="text-white font-semibold text-center text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    {item.label}
                                </span>
                                <span className="text-white/70 text-xs mt-1">Pearl Smile Clinic</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
