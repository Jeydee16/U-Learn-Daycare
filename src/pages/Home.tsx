import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, MapPin, Star, Shield, Sparkles, ArrowRight, Heart, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-center lg:text-left"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fun-pink/10 text-fun-pink font-bold mb-6 border-2 border-fun-pink/20"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">Nurturing Future Stars</span>
              </motion.div>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight mb-6 drop-shadow-sm">
                Where Learning <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-fun-purple to-fun-pink">Meets Play!</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                Give your child the best start in life with our innovative learning modules, experienced teachers, and a safe, fun environment designed for ages 1-5.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/enrollment" className="w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3"
                  >
                    Enroll Now <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
                <Link to="/activities" className="w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-slate-50 text-slate-700 border-4 border-slate-200 px-8 py-4 rounded-full font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-lg"
                  >
                    See Activities
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white"
              >
                <img 
                  src="/HERO-SECTION.jpg" 
                  alt="Filipino kids learning and playing" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <motion.div key={i} animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}>
                        <Star className="w-6 h-6 fill-secondary text-secondary drop-shadow-md" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-display font-bold text-2xl drop-shadow-lg">"The best daycare in Valenzuela!"</p>
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white p-5 rounded-3xl shadow-2xl border-4 border-accent flex items-center gap-4"
              >
                <div className="bg-accent/20 p-3 rounded-2xl text-accent">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Ages</p>
                  <p className="font-display font-black text-2xl text-slate-800">1 to 5 Years</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border-8 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fun-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-slate-100 transform -rotate-2"
              >
                <img src="/parents testimonial.jpg" alt="Happy Parents" className="w-full h-auto object-cover" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
                  ))}
                </div>
                <h2 className="font-display text-4xl font-black text-slate-900 mb-6 leading-tight">
                  "U-Learn has been a second home for our child."
                </h2>
                <p className="text-xl text-slate-600 mb-8 font-medium italic leading-relaxed">
                  "We've seen such amazing growth in just a few months. The teachers are incredibly caring, and the activities are always so engaging. We couldn't be happier with our choice!"
                </p>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Maria Santos</p>
                  <p className="text-slate-500">Parent of a Nursery Student</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Summary */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6">Why Choose <span className="text-primary">U-Learn?</span></h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">We provide a holistic approach to early childhood education, ensuring your child develops cognitively, physically, and emotionally.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-3xl border-4 border-slate-100 shadow-lg">
              <Heart className="w-12 h-12 text-fun-pink mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2 text-slate-800">Caring Environment</h3>
              <p className="text-slate-600">A second home where every child feels loved and valued.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border-4 border-slate-100 shadow-lg">
              <BookOpen className="w-12 h-12 text-fun-purple mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2 text-slate-800">Innovative Learning</h3>
              <p className="text-slate-600">Modern modules tailored for early development stages.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border-4 border-slate-100 shadow-lg">
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2 text-slate-800">Safe & Secure</h3>
              <p className="text-slate-600">Strict health and safety protocols for your peace of mind.</p>
            </div>
          </div>
          <Link to="/why-us">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white hover:bg-slate-50 text-primary border-4 border-primary px-8 py-4 rounded-full font-bold text-xl transition-all shadow-lg inline-flex items-center gap-3">
              Learn More About Us <ArrowRight className="w-6 h-6" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Activities Summary */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6">A Peek Into Our <span className="text-fun-pink">Adventures</span></h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">From science experiments to practical life skills, every day is filled with fun and learning!</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <img src="/buying at supermarket.jpg" alt="Supermarket" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-300" />
            <img src="/cutting acctivities.jpg" alt="Cutting" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-300" />
            <img src="/gross motor activities.jpg" alt="Gross Motor" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-300" />
            <img src="/practical life.jpg" alt="Practical Life" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-300" />
            <img src="/nutrition month.jpg" alt="Nutrition" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-300" />
            <img src="/science experiment.jpg" alt="Science" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-300" />
            <img src="/buwan ng wika.jpg" alt="Buwan ng Wika" className="w-full h-48 object-cover rounded-2xl shadow-md border-4 border-white col-span-2 md:col-span-2 hover:scale-105 transition-transform duration-300" />
          </div>

          <Link to="/activities">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-fun-pink hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-fun-pink/30 inline-flex items-center gap-3">
              See All Activities <ArrowRight className="w-6 h-6" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Enrollment Summary */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6">Join the <span className="text-secondary">U-Learn Family</span></h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">We make the enrollment process simple and stress-free. Now accepting Nursery Enrollees for S.Y. 2026-2027!</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border-2 border-slate-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <span className="font-bold text-lg text-slate-700">Schedule a Visit</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border-2 border-slate-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <span className="font-bold text-lg text-slate-700">Submit Requirements</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border-2 border-slate-100 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <span className="font-bold text-lg text-slate-700">Welcome to U-Learn!</span>
            </div>
          </div>

          <Link to="/enrollment">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-secondary/30 inline-flex items-center gap-3">
              View Enrollment Details <ArrowRight className="w-6 h-6" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Bottom CTA / Footer Hero */}
      <section className="py-24 bg-gradient-to-br from-primary to-fun-purple relative overflow-hidden z-10">
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
    </>
  );
}
