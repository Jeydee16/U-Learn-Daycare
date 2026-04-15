import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, BookOpen, ArrowUp, MapPin, ArrowRight, Star, Sun, Cloud, Heart } from 'lucide-react';

export default function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#f0f9ff] overflow-x-hidden relative flex flex-col">
      {/* Playful Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-20 left-10 text-fun-pink opacity-20">
          <Star className="w-24 h-24 fill-current" />
        </motion.div>
        <motion.div animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute top-40 right-20 text-secondary opacity-20">
          <Sun className="w-32 h-32 fill-current" />
        </motion.div>
        <motion.div animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} className="absolute bottom-40 left-20 text-primary opacity-20">
          <Cloud className="w-28 h-28 fill-current" />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute bottom-20 right-32 text-accent opacity-20">
          <Heart className="w-20 h-20 fill-current" />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="h-12 bg-white rounded-lg p-1 shadow-sm">
                  <img src="/ulearn logo.jpeg" alt="U-Learn Logo" className="h-full w-auto object-contain" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-3xl text-primary leading-none tracking-tight">U-Learn</h1>
                </div>
              </motion.div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/why-us" className="font-display font-bold text-lg text-slate-600 hover:text-fun-pink transition-colors">Why Us</Link>
              <Link to="/activities" className="font-display font-bold text-lg text-slate-600 hover:text-fun-pink transition-colors">Activities</Link>
              <Link to="/enrollment" className="font-display font-bold text-lg text-slate-600 hover:text-fun-pink transition-colors">Enrollment</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden sm:block">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-secondary/30"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">Contact Us</span>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-20 border-t-[16px] border-primary relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-16 bg-white p-1 rounded-xl">
                  <img src="/ulearn logo.jpeg" alt="U-Learn Logo" className="h-full w-auto object-contain" />
                </div>
                <div>
                  <h2 className="font-display font-black text-3xl text-white leading-none">U-Learn</h2>
                </div>
              </div>
              <p className="text-slate-400 max-w-md mb-8 text-lg leading-relaxed">
                Where learning meets play! We provide a nurturing, safe, and exciting environment for your little ones to grow, learn, and discover their potential.
              </p>
            </div>
            
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-8">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg pt-1">182 Mc Arthur Highway,<br/>Marulas, Valenzuela City</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-white text-xl">0917-527-3304</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-8">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link to="/why-us" className="text-lg hover:text-fun-pink transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Why Choose Us</Link></li>
                <li><Link to="/activities" className="text-lg hover:text-fun-pink transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Our Activities</Link></li>
                <li><Link to="/enrollment" className="text-lg hover:text-secondary transition-colors text-secondary font-bold flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Enroll Now (10% Off!)</Link></li>
                <li><Link to="/contact" className="text-lg hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4"/> Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-slate-800 mt-16 pt-8 text-center text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} U-Learn Daycare. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          y: showScrollTop ? 0 : 20,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-fun-pink text-white p-5 rounded-full shadow-2xl hover:bg-pink-500 transition-colors z-50 flex items-center justify-center border-4 border-white"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
