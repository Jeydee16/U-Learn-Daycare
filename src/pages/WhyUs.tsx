import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, BookOpen, Shield, Heart, Palette, Music, CheckCircle2, ArrowRight } from 'lucide-react';

const FlipCard = ({ icon: Icon, title, desc, color }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-72 perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-[2rem] p-8 border-4 border-slate-100 shadow-xl flex flex-col items-center justify-center text-center group-hover:border-primary/30 transition-colors">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${color}`}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
          <h3 className="font-display text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-slate-400 mt-2 font-bold text-sm uppercase tracking-widest">Click to flip!</p>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary to-fun-purple rounded-[2rem] p-8 shadow-xl flex flex-col items-center justify-center text-center text-white border-4 border-white" style={{ transform: 'rotateY(180deg)' }}>
          <Icon className="w-16 h-16 mb-4 opacity-20 absolute top-4 right-4" />
          <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
          <p className="text-lg font-medium leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function WhyUs() {
  return (
    <div className="pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 text-secondary-dark font-bold mb-6 border-2 border-secondary/20">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm uppercase tracking-wider">Our Philosophy</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fun-purple">U-Learn?</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              We provide a holistic approach to early childhood education, ensuring your child develops cognitively, physically, and emotionally in a space they love.
            </p>
          </motion.div>
        </div>

        {/* Core Pillars (Flip Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <FlipCard icon={Star} title="Experienced Teachers" desc="Passionate educators dedicated to your child's growth and happiness." color="bg-blue-100 text-blue-600" />
          <FlipCard icon={BookOpen} title="Innovative Modules" desc="Modern learning approaches tailored specifically for early development." color="bg-purple-100 text-purple-600" />
          <FlipCard icon={Shield} title="Safe & Edible Sensory" desc="Worry-free sensory play with 100% safe, edible materials." color="bg-green-100 text-green-600" />
          <FlipCard icon={Heart} title="Free Play" desc="Unstructured time to foster imagination, creativity, and social skills." color="bg-pink-100 text-pink-600" />
          <FlipCard icon={Palette} title="Arts & Crafts" desc="Creative expression through various fun, colorful mediums." color="bg-orange-100 text-orange-600" />
          <FlipCard icon={Music} title="Music & Dance" desc="Rhythm, movement, and joyful expression every single day." color="bg-yellow-100 text-yellow-600" />
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border-8 border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fun-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-display text-4xl font-black text-slate-900 mb-6">Our Commitment to Excellence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At U-Learn, we believe that the early years are the most critical foundation for a child's future. Our curriculum is designed to spark curiosity, build confidence, and foster a lifelong love for learning.
              </p>
              <ul className="space-y-4">
                {[
                  "Low student-to-teacher ratio for personalized attention",
                  "Daily updates and open communication with parents",
                  "Strict health, safety, and sanitation protocols",
                  "Nutritious snack guidelines and allergy-aware environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-accent/10 p-1 rounded-full text-accent mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-fun-purple rounded-[2rem] transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="/expectation.jpg" 
                alt="Happy child learning" 
                className="relative rounded-[2rem] shadow-xl border-4 border-white object-cover aspect-[4/3] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* What's the Program Image */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-4xl font-black text-slate-900 mb-4">What's the Program?</h3>
            <p className="text-xl text-slate-600 font-medium">A quick overview of what we offer.</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
          >
            <img src="/whats the program.jpg" alt="What's the Program" className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Bottom CTA / Footer Hero */}
        <section className="mt-32 py-24 bg-gradient-to-br from-primary to-fun-purple relative overflow-hidden z-10 rounded-[3rem]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 4px, transparent 4px)', backgroundSize: '32px 32px' }}></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-display text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">Ready to Start the Journey?</h2>
            <p className="text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
              Enrollment is now open! Give your child the best start in a fun, safe, and nurturing environment.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-primary px-10 py-5 rounded-full font-black text-2xl transition-all shadow-2xl inline-flex items-center gap-3 hover:bg-slate-50">
                Enroll Now <ArrowRight className="w-7 h-7" />
              </motion.div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
