import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Scissors, Activity, CheckCircle2, Utensils, Beaker, Star, ArrowRight, X } from 'lucide-react';

const activitiesData = [
  {
    id: 1,
    title: "Buying at the Supermarket",
    shortTitle: "Supermarket",
    image: "/buying at supermarket.jpg",
    icon: ShoppingCart,
    color: "bg-secondary",
    description: "Learning practical math and social skills in a real-world setting. Students get to experience picking out items, understanding quantities, and interacting with others in a safe, guided environment."
  },
  {
    id: 2,
    title: "Cutting Activities",
    shortTitle: "Cutting Activities",
    image: "/cutting acctivities.jpg",
    icon: Scissors,
    color: "bg-fun-pink",
    description: "Developing fine motor skills and hand-eye coordination. These activities are crucial for building the hand strength needed for writing later on, all while having fun with crafts!"
  },
  {
    id: 3,
    title: "Gross Motor Activities",
    shortTitle: "Gross Motor",
    image: "/gross motor activities.jpg",
    icon: Activity,
    color: "bg-accent",
    description: "Building strength, balance, and spatial awareness through active play. We encourage kids to move, jump, and navigate obstacles safely to develop their physical abilities."
  },
  {
    id: 4,
    title: "Practical Life Activities",
    shortTitle: "Practical Life",
    image: "/practical life.jpg",
    icon: CheckCircle2,
    color: "bg-primary",
    description: "Fostering independence with everyday tasks like pouring, preparing snacks, and cleaning up. These foundational skills build confidence and self-reliance in our little learners."
  },
  {
    id: 5,
    title: "Nutrition Month Celebration",
    shortTitle: "Nutrition Month",
    image: "/nutrition month.jpg",
    icon: Utensils,
    color: "bg-green-500",
    description: "Fun costumes and activities to learn about healthy eating habits. We teach children the importance of a balanced diet in a playful and engaging way."
  },
  {
    id: 6,
    title: "Science Experiments",
    shortTitle: "Science Fun",
    image: "/science experiment.jpg",
    icon: Beaker,
    color: "bg-fun-purple",
    description: "Sparking curiosity with safe, exciting, and bubbly science fun! We introduce basic scientific concepts through hands-on exploration that feels like magic."
  }
];

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  return (
    <div className="pt-16 pb-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fun-pink/10 text-fun-pink font-bold mb-6 border-2 border-fun-pink/20">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm uppercase tracking-wider">Daily Adventures</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Our Fun <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fun-pink">Activities</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">
              Every day is a new adventure! Here's a glimpse into the exciting activities our students enjoy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesData.map((activity) => (
            <motion.div 
              key={activity.id}
              whileHover={{ y: -10, scale: 1.02 }} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-100 cursor-pointer flex flex-col"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative flex-grow aspect-square overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.div whileHover={{ rotate: 15 }} className={`${activity.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0`}>
                      <activity.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">{activity.shortTitle}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <motion.div 
            whileHover={{ y: -10 }} 
            className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-80 border-8 border-slate-50 cursor-pointer"
            onClick={() => setSelectedActivity({
              title: "Buwan ng Wika",
              image: "/buwan ng wika.jpg",
              icon: Star,
              color: "bg-secondary",
              description: "Celebrating our rich Filipino culture and heritage with fun activities, traditional costumes, and local games! This special event helps children appreciate their roots and enjoy the vibrant traditions of the Philippines."
            })}
          >
            <img src="/buwan ng wika.jpg" alt="Buwan ng Wika" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-4xl font-bold text-white">Buwan ng Wika</h3>
              </div>
              <p className="text-slate-200 font-medium text-lg max-w-2xl mt-2">Click to view details</p>
            </div>
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

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-5xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-3/5 h-64 md:h-auto relative bg-slate-100">
                <img src={selectedActivity.image} alt={selectedActivity.title} className="w-full h-full object-contain" />
              </div>
              
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center overflow-y-auto bg-white">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${selectedActivity.color}`}>
                  <selectedActivity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">{selectedActivity.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{selectedActivity.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
