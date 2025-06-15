import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="welcome" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            Begin Your Sacred Journey
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            At Niramayam, we honor the ancient traditions of yoga while making them 
            accessible to modern practitioners. Our approach is rooted in the rich heritage 
            of Indian philosophy, combining traditional asanas with contemporary understanding 
            of wellness.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:shadow-lg smooth-transition"
            >
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Authentic Practice
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from certified instructors who have studied in traditional 
                Indian ashrams and carry forward the authentic teachings.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-secondary-50 dark:bg-secondary-900/20 hover:shadow-lg smooth-transition"
            >
              <div className="text-4xl mb-4">🕉️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Holistic Wellness
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experience yoga as a complete lifestyle - integrating physical postures, 
                breathing techniques, meditation, and philosophical wisdom.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-accent-50 dark:bg-accent-900/20 hover:shadow-lg smooth-transition"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Personal Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Embark on a transformative journey that nurtures your physical health, 
                mental clarity, and spiritual awakening.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg"
          >
            <blockquote className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
              "योग: चित्त-वृत्ति निरोध:"
            </blockquote>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Yoga is the cessation of fluctuations in the mind
            </p>
            <cite className="text-sm text-gray-500 dark:text-gray-500">
              - Patanjali Yoga Sutras
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;