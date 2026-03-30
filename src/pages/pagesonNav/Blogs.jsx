import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import TypingText from '../../components/home/TypingText';

const BLOG_POSTS = [
    {
        id: 'ai-powered-smart-kiosk',
        title: 'How ADORIX Combines Personalization, Voice AI, and Real-Time Advertising?',
        excerpt: 'Traditional digital signage is static. ADORIX turns a passive display into an intelligent, context-aware advertising kiosk that personalizes content in real time.',
        author: 'Adorix Team',
        date: 'March 30, 2026',
        image: '/blog_illustration.png'
    }
];

const Blogs = () => {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-transparent relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold text-adorix-dark mb-10 tracking-tighter"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-adorix-primary to-adorix-accent">
                            <TypingText text="Our Insights & Stories." speed={0.05} />
                        </span>
                    </motion.h1>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto px-4">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col bg-white border border-gray-100 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:shadow-adorix-primary/10 transition-all duration-700 font-sans"
                        >
                            {/* Image Visual (TOP) */}
                            <div className="aspect-[4/5] relative overflow-hidden bg-[#e0f1ef] flex items-center justify-center">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content (BOTTOM) */}
                            <div className="p-12 md:p-14 flex flex-col items-start text-left">
                                <div className="flex items-center gap-4 text-[11px] font-bold text-adorix-primary mb-6 uppercase tracking-[0.25em]">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-adorix-dark mb-8 leading-[1.1] tracking-tighter group-hover:text-adorix-primary transition-colors duration-300">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 font-bold text-lg leading-relaxed mb-12 max-w-2xl">
                                    {post.excerpt}
                                </p>

                                <Link
                                    to={`/blogs/${post.id}`}
                                    className="inline-flex items-center gap-2 text-adorix-primary font-bold text-xs uppercase tracking-widest group/btn hover:opacity-70 transition-all"
                                >
                                    Read Article
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-adorix-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[40%] h-[40%] bg-adorix-accent/10 blur-[120px] rounded-full -z-10" />
        </div>
    );
};

export default Blogs;
