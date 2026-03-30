import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogDetail = () => {
    const { id } = useParams();

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-transparent relative overflow-hidden font-sans selection:bg-adorix-accent/30">
            <div className="max-w-4xl mx-auto relative z-10">
                
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-14"
                >
                    <Link 
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-gray-400 font-bold text-[11px] uppercase tracking-[0.2em] hover:text-adorix-dark transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
                        BACK TO BLOG
                    </Link>
                </motion.div>

                {/* Article Header */}
                <header className="mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[36px] md:text-[54px] font-black text-[#1F2B2D] mb-10 leading-[1.1] tracking-[-0.03em]"
                    >
                        How ADORIX Combines <br />
                        Personalization, Voice AI, <br />
                        and <span className="text-adorix-accent">Real-Time Advertising?</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-14"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-full bg-[#E5F9F8] flex items-center justify-center text-adorix-accent font-bold text-[13px] border border-adorix-accent/20">
                                AT
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">AUTHOR</p>
                                <p className="text-sm font-bold text-adorix-dark">Adorix Team</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">DATE</p>
                            <p className="text-sm font-bold text-adorix-dark">March 30, 2026</p>
                        </div>
                    </motion.div>
                </header>

                {/* Article Content */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-none text-[#516163] font-medium leading-[1.8] space-y-14"
                >
                    <p className="text-[26px] md:text-[34px] text-adorix-dark font-bold leading-[1.25] tracking-tight">
                        Traditional digital signage is static. ADORIX changes this by turning passive displays into intelligent kiosks that understand and respond to users in real time.
                    </p>

                    <p className="text-[19px] md:text-[21px] font-medium">
                        At the heart of ADORIX is a dual-system setup. Our <strong className="text-adorix-dark font-bold">kiosk system</strong> handles the "brain" tasks: seeing users with computer vision and talking to them using Voice AI. Meanwhile, our <strong className="text-adorix-dark font-bold">web platform</strong> acts as the command center, letting businesses manage ads and track performance from anywhere.
                    </p>

                    <section>
                        <h2 className="text-[36px] md:text-[48px] font-bold text-adorix-dark mb-10 tracking-tight">
                            How it Works
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Watch", desc: "Generic ads play until a person walks by." },
                                { title: "Personalize", desc: "AI detects demographics to show targeted content." },
                                { title: "Interact", desc: "Users can ask questions using 'Hey Adorix'." }
                            ].map((item, i) => (
                                <div key={i} className="p-12 rounded-[3rem] bg-[#E5F9F8]/70 flex flex-col items-start text-left shadow-sm border border-adorix-accent/5 hover:bg-[#E5F9F8]/90 transition-all duration-300">
                                    <h3 className="text-[22px] font-bold text-adorix-dark mb-4">{item.title}</h3>
                                    <p className="text-[16px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <p className="text-[19px] md:text-[21px]">
                        The kiosk's intelligence comes from advanced AI tools. It uses **Face Detection** to understand who is watching and **Speech Recognition** to have natural conversations. This allows it to answer product questions and provide help instantly, making the shopping experience much more engaging.
                    </p>

                    <p className="text-[19px] md:text-[21px]">
                        On the screen, users see a simple and friendly interface. Real-time updates show subtitles and animated avatars so passengers always know the kiosk is listening. This clear feedback is key to making the AI feel natural and easy to use.
                    </p>

                    <div className="py-20 flex justify-center text-center max-w-3xl mx-auto">
                        <p className="text-[26px] md:text-[36px] font-bold text-adorix-dark leading-[1.3] tracking-tight italic md:not-italic">
                            "ADORIX isn't just a screen—it's a smart assistant that brings the personalization of online shopping to the real world."
                        </p>
                    </div>

                    <p className="text-[19px] md:text-[21px]">
                        By combining personalized ads, voice interaction, and cloud management, ADORIX shows the future of retail. It’s a complete ecosystem designed to make every interaction more meaningful and effective.
                    </p>

                    {/* Footer Tags */}
                    <div className="pt-24 flex flex-wrap gap-5">
                        {['AI', 'SMART RETAIL', 'INNOVATION'].map(tag => (
                            <span key={tag} className="px-8 py-3 bg-white border border-gray-100 rounded-full text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] shadow-sm hover:shadow-md transition-shadow">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </motion.article>
            </div>

            {/* Backdrop Decorations */}
            <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-gradient-to-bl from-adorix-primary/5 via-transparent to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[30%] bg-gradient-to-tr from-adorix-accent/5 via-transparent to-transparent -z-10" />
        </div>
    );
};

export default BlogDetail;
