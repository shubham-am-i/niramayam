import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon, HeartIcon } from '@heroicons/react/24/outline';

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const packages = [
    {
      title: "Little Yogis",
      ageGroup: "Ages 5-12",
      icon: "🧒",
      color: "from-pink-400 to-red-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      features: [
        "Fun & playful yoga poses",
        "Breathing games",
        "Storytelling through movement",
        "Flexibility & coordination",
        "Mindfulness for kids"
      ],
      description: "Introduce children to the joy of yoga through play, stories, and gentle movements that build confidence and focus."
    },
    {
      title: "Teen Warriors",
      ageGroup: "Ages 13-19",
      icon: "🌟",
      color: "from-purple-400 to-indigo-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      features: [
        "Strength building poses",
        "Stress relief techniques",
        "Body positivity focus",
        "Peer group sessions",
        "Exam stress management"
      ],
      description: "Help teenagers navigate physical and emotional changes while building strength, confidence, and healthy coping mechanisms."
    },
    {
      title: "Adult Harmony",
      ageGroup: "Ages 20-55",
      icon: "🧘‍♀️",
      color: "from-primary-400 to-secondary-400",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
      features: [
        "Complete yoga practice",
        "Work-life balance",
        "Strength & flexibility",
        "Meditation & mindfulness",
        "Therapeutic sessions"
      ],
      description: "Comprehensive yoga practice designed for busy adults, focusing on physical health, mental clarity, and spiritual growth."
    },
    {
      title: "Golden Years",
      ageGroup: "Ages 55+",
      icon: "🌸",
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      features: [
        "Gentle & restorative poses",
        "Joint mobility focus",
        "Balance improvement",
        "Chair yoga options",
        "Community connection"
      ],
      description: "Gentle yoga practice tailored for seniors, emphasizing mobility, balance, and maintaining independence with grace."
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleBookClass = (packageTitle) => {
    const message = `I'm interested in the ${packageTitle} yoga program. Can you provide more details?`;
    window.open(`https://wa.me/9382549541?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={cardVariants}
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            >
              Yoga for Every Age
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Discover age-appropriate yoga programs designed to meet the unique needs 
              and goals of every life stage.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                variants={cardVariants}
                className={`${pkg.bgColor} rounded-2xl p-6 hover:shadow-xl smooth-transition group relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="text-8xl transform rotate-12 translate-x-4 -translate-y-4">
                    {pkg.icon}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{pkg.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {pkg.title}
                    </h3>
                    <div className={`inline-block bg-gradient-to-r ${pkg.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                      {pkg.ageGroup}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleBookClass(pkg.title)}
                      className={`w-full bg-gradient-to-r ${pkg.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg smooth-transition transform hover:scale-105`}
                    >
                      Start Free Trial
                    </button>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        1 Month Free • ₹999/month after
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Hearts Animation */}
                <div className="absolute bottom-4 left-4 opacity-20">
                  <HeartIcon className="w-6 h-6 text-primary-500 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Specialized Programs Available
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20">
                  <div className="text-2xl mb-2">🩺</div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Back Pain Relief</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary-50 dark:bg-secondary-900/20">
                  <div className="text-2xl mb-2">🧠</div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Anxiety Management</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent-50 dark:bg-accent-900/20">
                  <div className="text-2xl mb-2">💝</div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">PCOD Support</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <div className="text-2xl mb-2">🤰</div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Prenatal Yoga</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;