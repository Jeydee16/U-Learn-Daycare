import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 text-secondary-dark font-bold mb-6 border-2 border-secondary/20">
              <MessageCircle className="w-5 h-5 fill-current" />
              <span className="text-sm uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fun-pink">Talk!</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Have questions about our programs or enrollment? We'd love to hear from you. Reach out to us anytime!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-[2.5rem] p-10 border-4 border-slate-100 shadow-xl h-full">
              <h3 className="font-display text-3xl font-black text-slate-900 mb-8">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800 mb-1">Visit Us</h4>
                    <p className="text-slate-600 text-lg">182 Mc Arthur Highway,<br/>Marulas, Valenzuela City</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="bg-secondary/10 p-4 rounded-2xl text-secondary-dark shrink-0">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800 mb-1">Call Us</h4>
                    <p className="text-slate-600 text-lg font-bold">0917-527-3304</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="bg-fun-pink/10 p-4 rounded-2xl text-fun-pink shrink-0">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800 mb-1">Email Us</h4>
                    <p className="text-slate-600 text-lg">hello@ulearndaycare.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="bg-fun-purple/10 p-4 rounded-2xl text-fun-purple shrink-0">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-800 mb-1">Operating Hours</h4>
                    <p className="text-slate-600 text-lg">Monday - Friday<br/>7:00 AM - 5:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-10 border-4 border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fun-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h3 className="font-display text-3xl font-black text-slate-900 mb-8 relative z-10">Send us a Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Parent's Name</label>
                <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all" placeholder="Juan Dela Cruz" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all" placeholder="juan@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xl py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-6 h-6" /> Send Message
              </motion.button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
