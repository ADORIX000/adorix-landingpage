import React, { useState } from 'react';
import { Check, Star, Zap, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import TypingText from '../../../components/home/TypingText';

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#E5F9F8]">
    <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-adorix-accent/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-adorix-primary/5 rounded-full blur-[100px]" />
    {/* Floating dots/particles effect */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-adorix-primary/20 rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

const PricingCard = ({
  title,
  offerPrice,
  features,
  icon: Icon,
  recommended
}) => {
  return (
    <div
      className={`relative p-10 rounded-[2.5rem] transition-all duration-500 h-full flex flex-col bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50`}
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
          <Icon className="w-6 h-6 text-adorix-dark" />
        </div>
        <h3 className="text-2xl font-black text-adorix-dark tracking-tight">{title}</h3>
      </div>

      <div className="mb-10">
        <div className="flex items-baseline gap-1.5">
          <span className="text-adorix-dark text-4xl font-black tracking-tight">USD {offerPrice}</span>
          <span className="text-gray-400 font-bold text-sm">/mo</span>
        </div>
        <p className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-tight">for 3 months</p>
      </div>

      <ul className="space-y-4 mb-12 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3 text-[13px] text-gray-600 font-semibold tracking-tight">
            <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-emerald-500 stroke-[4]" />
            </div>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://dashboard.adorixit.com/signup"
        className="block text-center w-full py-5 rounded-2xl font-black text-sm transition-all bg-[#1F2B2D] text-white hover:bg-adorix-dark/90 shadow-xl shadow-adorix-dark/10"
      >
        Get Started with {title}
      </a>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: 'Plus',
      icon: Sparkles,
      offerPrice: '299',
      features: [
        '1 Kiosk Device',
        'Basic Analytics Dashboard',
        'Up to 5 Active Campaigns',
        'Email Support (48h response)',
        'Standard AI Models',
        'Community Access'
      ]
    },
    {
      title: 'Pro',
      icon: Zap,
      offerPrice: '579',
      recommended: true,
      features: [
        'Up to 5 Kiosk Devices',
        'Advanced AI Gaze Tracking',
        'Unlimited Campaigns',
        '24/7 Priority Support',
        'Advanced Analytics & Export',
        'Custom Branding',
        'A/B Testing Tools',
        'API Access (Basic)'
      ]
    },
    {
      title: 'Enterprise',
      icon: Shield,
      offerPrice: '899',
      features: [
        'Unlimited Kiosk Devices',
        'Custom AI Model Training',
        'Full API Access',
        'Dedicated Account Manager',
        'White-label Solutions',
        'SLA Guarantee (99.9%)',
        'Advanced Security Features',
        'On-premise Deployment Option'
      ]
    }
  ];

  return (
    <div className="relative pt-32 pb-40 px-6 min-h-screen">
      <BackgroundElements />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tight leading-[1.1] text-adorix-dark mb-4">
              <TypingText text="Kiosk Plans for " speed={0.05} />
              <span className="text-[#23717B]">
                <TypingText text="Growers" speed={0.05} delay={0.85} />
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;