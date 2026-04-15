import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, MapPin, Sparkles, CheckCircle2, Calendar, FileText, UserPlus, ArrowRight } from 'lucide-react';

export default function Enrollment() {
  return (
    <div className="pt-16 pb-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-bold mb-6 border-2 border-primary/20">
              <Sparkles className="w-5 h-5 fill-current" />
              <span className="text-sm uppercase tracking-wider">Join Our Family</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Enrollment <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-fun-pink">Information</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Take the first step towards a bright future for your child. We make the enrollment process simple and stress-free!
            </p>
          </motion.div>
        </div>

        {/* Promo Banner (Moved from Home) */}
        <div className="bg-secondary rounded-[3rem] py-16 relative overflow-hidden mb-20 shadow-2xl">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 4px, transparent 4px)', backgroundSize: '32px 32px' }}></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-8 border-white/20 transform -rotate-1 text-center lg:text-left"
              >
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block bg-fun-pink text-white font-black px-6 py-2 rounded-full text-xl md:text-2xl mb-6 transform rotate-2 shadow-xl border-4 border-white"
                >
                  10% OFF EARLY BIRD DISCOUNT!
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                  Now Accepting Nursery Enrollees
                </h2>
                <p className="text-xl md:text-2xl text-primary font-black mb-8 bg-primary/10 inline-block px-6 py-2 rounded-2xl">
                  For S.Y. 2026-2027
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                  <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-3xl border-4 border-slate-100 w-full sm:w-auto shadow-lg">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                      <p className="font-bold text-slate-800 text-sm">182 Mc Arthur Highway</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-3xl border-4 border-slate-100 w-full sm:w-auto shadow-lg">
                    <div className="bg-secondary/10 p-3 rounded-2xl text-secondary-dark">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                      <p className="font-black text-primary text-lg">0917-527-3304</p>
                    </div>
                  </motion.div>
                </div>
                <p className="text-slate-500 font-bold text-sm bg-slate-100 inline-block px-4 py-2 rounded-full">Promo valid from February 22 - March 22, 2026</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2">
                  <img src="/enrollment.jpg" alt="Happy student enrolling" className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Steps & Requirements */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 border-4 border-slate-100 shadow-xl">
            <h3 className="font-display text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <UserPlus className="w-8 h-8 text-primary" /> How to Enroll
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Schedule a Visit", desc: "Call us to book a tour of our facilities.", icon: Calendar, color: "text-fun-pink bg-fun-pink/10" },
                { title: "Submit Requirements", desc: "Bring the necessary documents to the office.", icon: FileText, color: "text-secondary bg-secondary/10" },
                { title: "Assessment", desc: "A brief, fun assessment for your child.", icon: Sparkles, color: "text-fun-purple bg-fun-purple/10" },
                { title: "Welcome to U-Learn!", desc: "Complete the payment and get your starter kit.", icon: CheckCircle2, color: "text-primary bg-primary/10" }
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className={`p-3 rounded-2xl h-fit ${step.color}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800">{step.title}</h4>
                    <p className="text-slate-600 font-medium">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-[2.5rem] p-10 border-4 border-slate-100 shadow-xl">
            <h3 className="font-display text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-fun-pink" /> Requirements
            </h3>
            <ul className="space-y-4">
              {[
                "Photocopy of PSA Birth Certificate",
                "2 pcs 2x2 ID Picture of the child",
                "1 pc 1x1 ID Picture of parents/guardians",
                "Photocopy of Immunization Record",
                "Accomplished Enrollment Form"
              ].map((req, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border-2 border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="font-medium text-slate-700">{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-fun-purple/10 rounded-2xl border-2 border-fun-purple/20 text-center">
              <p className="text-fun-purple-dark font-bold">Need help with requirements?</p>
              <p className="text-slate-600 text-sm mt-1">Our staff is ready to assist you. Just give us a call!</p>
            </div>
          </div>
        </div>

        {/* Schedule Image */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-4xl font-black text-slate-900 mb-4">Daily Schedule</h3>
            <p className="text-xl text-slate-600 font-medium">A structured day full of learning and fun!</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
          >
            <img src="/schedule.jpg" alt="Daily Schedule" className="w-full h-auto" />
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
