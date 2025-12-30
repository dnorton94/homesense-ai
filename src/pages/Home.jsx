import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, MapPin, ArrowRight, Wind, Leaf, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const features = [
    {
      icon: Camera,
      title: "Space Analysis",
      subtitle: "空間分析",
      description: "Upload photos of any room and receive detailed Feng Shui analysis with personalized recommendations to enhance energy flow and harmony.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Sparkles,
      title: "Visual Transformation",
      subtitle: "視覺轉換",
      description: "See your space reimagined. Our AI edits your images to show optimal furniture placement, color schemes, and décor for balanced Chi energy.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: MapPin,
      title: "London Living Guide",
      subtitle: "倫敦指南",
      description: "Discover which London neighborhoods align with your personal energy. Get Feng Shui-based recommendations for your ideal home location.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  const steps = [
    { number: "01", title: "Share Your Space", description: "Upload photos or describe the area you want to analyze" },
    { number: "02", title: "AI Analysis", description: "Our system evaluates energy flow, elements, and spatial harmony" },
    { number: "03", title: "Transform", description: "Receive actionable insights and visualize the improvements" }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-emerald-100/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] w-40 h-40 bg-amber-100/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[20%] w-36 h-36 bg-violet-100/30 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-6 py-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-xl font-semibold text-gray-900 tracking-tight">HomeSense AI</span>
              <span className="ml-2 text-lg text-emerald-700 font-medium">居感</span>
            </div>
          </div>
          <a href="https://discord.gg/ZTfDnKtp" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:shadow-lg hover:shadow-gray-200">
              Get Started
            </Button>
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
                <Leaf className="w-4 h-4" />
                AI-Powered Feng Shui
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[1.1] mb-8"
            >
              Transform your home with
              <span className="block font-medium bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                AI-powered Feng Shui
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl mb-12"
            >
              Transform any room with ancient wisdom meets modern AI. 
              Unlock the flow of positive energy in your home.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <a href="https://discord.gg/ZTfDnKtp" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-8 py-6 text-lg font-medium shadow-xl shadow-emerald-200/50 transition-all hover:shadow-2xl hover:shadow-emerald-300/50 group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/60">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80" 
                alt="Harmonious living space"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Floating Cards */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Energy Flow Analysis</span>
                </div>
                <p className="text-sm text-gray-500">Optimal Chi circulation detected in living area</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Moon className="w-5 h-5 text-violet-500" />
                  <span className="text-2xl font-semibold text-gray-900">94%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Harmony Score</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 tracking-tight">
              Three ways to <span className="font-medium">transform</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/80 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <span className="text-sm text-gray-400">{feature.subtitle}</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase">Process</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-12 tracking-tight">
                Simple steps to <span className="font-medium">harmony</span>
              </h2>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                      <span className="text-white font-medium">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-500">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/60">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Interior transformation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <span className="text-3xl font-bold">5K+</span>
                  <p className="text-xs opacity-80">Spaces Analyzed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 md:p-20">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6">
                Ready to find your <span className="font-medium text-emerald-400">balance</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Join our community and discover how ancient Feng Shui wisdom combined with AI can transform your living space.
              </p>
              <a href="https://discord.gg/ZTfDnKtp" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-10 py-6 text-lg font-medium shadow-xl transition-all hover:shadow-2xl group">
                  Join Discord Community
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 lg:px-20 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center">
              <Wind className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-900 font-medium">HomeSense AI 居感</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 HomeSense AI. Harmonizing spaces with intelligence.</p>
        </div>
      </footer>
    </div>
  );
}