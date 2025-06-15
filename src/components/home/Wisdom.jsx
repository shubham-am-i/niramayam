import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Wisdom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      sanskrit: "योग: कर्मसु कौशलम्",
      english: "Yoga is skill in action",
      source: "Bhagavad Gita 2.50",
      meaning: "Yoga teaches us to perform our duties with complete awareness and without attachment to results."
    },
    {
      sanskrit: "योगश्चित्तवृत्तिनिरोधः",
      english: "Yoga is the cessation of fluctuations of the mind",
      source: "Patanjali Yoga Sutras 1.2",
      meaning: "The ultimate goal of yoga is to achieve a state of perfect stillness and clarity of mind."
    },
    {
      sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः",
      english: "May all beings be happy, may all beings be healthy",
      source: "Upanishads",
      meaning: "This universal prayer embodies the yogic principle of compassion and interconnectedness."
    },
    {
      sanskrit: "आत्मनो मोक्षार्थं जगद्धिताय च",
      english: "For one's own liberation and for the welfare of the world",
      source: "Ramakrishna Mission Motto",
      meaning: "True spiritual practice benefits both the individual and the entire world."
    },
    {
      sanskrit: "वसुधैव कुटुम्बकम्",
      english: "The world is one family",
      source: "Maha Upanishad",
      meaning: "Yoga teaches us to see the divine in all beings and treat the world as our family."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 lotus-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ancient Wisdom
          </h2>
          <p className="text-xl text-primary-100 mb-16 max-w-3xl mx-auto">
            Draw inspiration from the timeless teachings that have guided yogis 
            for thousands of years. These sacred texts illuminate the path to inner peace.
          </p>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center"
            >
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-4xl font-bold text-white mb-4 leading-relaxed">
                  "{quotes[currentQuote].sanskrit}"
                </p>
                <p className="text-xl md:text-2xl text-primary-100 italic mb-6">
                  "{quotes[currentQuote].english}"
                </p>
                <div className="text-primary-200">
                  <p className="font-medium text-lg mb-2">
                    — {quotes[currentQuote].source}
                  </p>
                  <p className="text-sm leading-relaxed max-w-2xl mx-auto">
                    {quotes[currentQuote].meaning}
                  </p>
                </div>
              </blockquote>
            </motion.div>

            {/* Quote Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full smooth-transition ${
                    index === currentQuote
                      ? 'bg-white'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Cultural Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4 animate-float">🕉️</div>
              <h3 className="text-xl font-bold text-white mb-2">Sacred Traditions</h3>
              <p className="text-primary-100 text-sm">
                Rooted in 5,000 years of Indian wisdom and spiritual practices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: '2s' }}>🪷</div>
              <h3 className="text-xl font-bold text-white mb-2">Holistic Healing</h3>
              <p className="text-primary-100 text-sm">
                Integrating Ayurveda, meditation, and philosophy for complete wellness
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: '4s' }}>🌅</div>
              <h3 className="text-xl font-bold text-white mb-2">Inner Awakening</h3>
              <p className="text-primary-100 text-sm">
                Journey from darkness to light, from ignorance to enlightenment
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wisdom;