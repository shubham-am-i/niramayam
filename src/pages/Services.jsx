import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  UserGroupIcon, 
  HeartIcon, 
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [activeTab, setActiveTab] = useState('packages');

  const packages = [
    {
      title: "Little Yogis (Ages 5-12)",
      icon: "🧒",
      duration: "45 mins",
      groupSize: "8-10 kids",
      features: [
        "Fun yoga poses through storytelling",
        "Breathing games and exercises",
        "Flexibility and coordination development",
        "Basic mindfulness techniques",
        "Creative movement and dance",
        "Confidence building activities"
      ],
      schedule: ["Monday & Wednesday 4:00 PM", "Saturday 10:00 AM"],
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Teen Warriors (Ages 13-19)",
      icon: "🌟",
      duration: "60 mins",
      groupSize: "10-12 teens",
      features: [
        "Strength-building yoga sequences",
        "Stress management techniques",
        "Body positivity and self-acceptance",
        "Peer support group sessions",
        "Exam stress relief practices",
        "Leadership and confidence building"
      ],
      schedule: ["Tuesday & Thursday 5:00 PM", "Saturday 2:00 PM"],
      color: "from-purple-400 to-indigo-400"
    },
    {
      title: "Adult Harmony (Ages 20-55)",
      icon: "🧘‍♀️",
      duration: "75 mins",
      groupSize: "12-15 adults",
      features: [
        "Complete Hatha and Vinyasa practice",
        "Work-life balance techniques",
        "Strength, flexibility, and endurance",
        "Meditation and pranayama",
        "Therapeutic modifications",
        "Spiritual philosophy discussions"
      ],
      schedule: ["Mon/Wed/Fri 7:00 AM", "Tue/Thu 7:00 PM", "Sunday 9:00 AM"],
      color: "from-primary-400 to-secondary-400"
    },
    {
      title: "Golden Years (Ages 55+)",
      icon: "🌸",
      duration: "60 mins",
      groupSize: "8-10 seniors",
      features: [
        "Gentle and restorative yoga",
        "Joint mobility and flexibility focus",
        "Balance and fall prevention",
        "Chair yoga modifications",
        "Community building activities",
        "Adapted breathing exercises"
      ],
      schedule: ["Monday & Wednesday 10:00 AM", "Friday 3:00 PM"],
      color: "from-emerald-400 to-teal-400"
    }
  ];

  const levels = [
    {
      title: "Beginner's Path",
      subtitle: "Foundation Building",
      duration: "8 weeks",
      features: [
        "Basic yoga postures and alignment",
        "Introduction to breathing techniques",
        "Meditation fundamentals",
        "Yoga philosophy basics",
        "Home practice guidance"
      ],
      description: "Perfect for complete beginners or those returning to yoga practice."
    },
    {
      title: "Intermediate Journey",
      subtitle: "Deepening Practice",
      duration: "12 weeks",
      features: [
        "Advanced postures and transitions",
        "Complex breathing patterns",
        "Longer meditation sessions",
        "Study of sacred texts",
        "Teaching methodology introduction"
      ],
      description: "For practitioners with 6+ months of regular yoga experience."
    },
    {
      title: "Advanced Mastery",
      subtitle: "Spiritual Integration",
      duration: "16 weeks",
      features: [
        "Master-level postures and variations",
        "Advanced pranayama techniques",
        "Silent meditation retreats",
        "Comprehensive philosophy study",
        "Potential teacher training pathway"
      ],
      description: "For experienced practitioners seeking deeper spiritual connection."
    }
  ];

  const therapeuticPrograms = [
    {
      condition: "Back Pain Relief",
      icon: "🩺",
      description: "Specialized sequences for spinal health and pain management",
      duration: "60 mins",
      frequency: "2-3 times per week",
      features: [
        "Spinal alignment techniques",
        "Core strengthening exercises", 
        "Gentle backbends and twists",
        "Relaxation and stress relief",
        "Ergonomic lifestyle guidance"
      ]
    },
    {
      condition: "Anxiety & Stress Management",
      icon: "🧠",
      description: "Calming practices for mental health and emotional balance",
      duration: "75 mins",
      frequency: "2-3 times per week",
      features: [
        "Restorative yoga postures",
        "Breathing for anxiety relief",
        "Guided meditation sessions",
        "Mindfulness techniques",
        "Sleep improvement practices"
      ]
    },
    {
      condition: "PCOD/PCOS Support",
      icon: "💝",
      description: "Hormone-balancing practices for women's reproductive health",
      duration: "60 mins",
      frequency: "3-4 times per week",
      features: [
        "Hormone-regulating poses",
        "Stress reduction techniques",
        "Fertility-enhancing practices",
        "Weight management support",
        "Nutritional guidance"
      ]
    },
    {
      condition: "Prenatal Yoga",
      icon: "🤰",
      description: "Safe and nurturing practice for expecting mothers",
      duration: "60 mins",
      frequency: "2-3 times per week",
      features: [
        "Safe postures for each trimester",
        "Breathing for labor preparation",
        "Pelvic floor strengthening",
        "Relaxation techniques",
        "Partner yoga sessions"
      ]
    },
    {
      condition: "Arthritis & Joint Care",
      icon: "🦴",
      description: "Gentle movements for joint mobility and pain relief",
      duration: "45 mins",
      frequency: "3-4 times per week",
      features: [
        "Low-impact movements",
        "Joint mobility exercises",
        "Inflammation reduction",
        "Pain management techniques",
        "Adaptive modifications"
      ]
    },
    {
      condition: "Diabetes Management",
      icon: "📊",
      description: "Yoga practices to support blood sugar regulation",
      duration: "60 mins",
      frequency: "3-4 times per week",
      features: [
        "Metabolic-boosting sequences",
        "Stress reduction practices",
        "Circulation improvement",
        "Organ-stimulating poses",
        "Lifestyle modification support"
      ]
    }
  ];

  const handleBookService = (serviceName) => {
    const message = `I'm interested in the ${serviceName}. Can you provide more details about scheduling and availability?`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect yoga program for your unique needs and life stage. 
              From playful kids' classes to therapeutic healing sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'packages', label: 'Age-wise Packages', icon: <UserGroupIcon className="w-5 h-5" /> },
              { id: 'levels', label: 'Skill Levels', icon: <AcademicCapIcon className="w-5 h-5" /> },
              { id: 'therapeutic', label: 'Therapeutic Programs', icon: <HeartIcon className="w-5 h-5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium smooth-transition ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Age-wise Packages */}
      {activeTab === 'packages' && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  Age-wise Yoga Packages
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Specially designed programs that cater to the unique physical and 
                  emotional needs of different age groups.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl smooth-transition"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-4xl">{pkg.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="w-4 h-4" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <UserGroupIcon className="w-4 h-4" />
                            <span>{pkg.groupSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Schedule Options:
                      </h4>
                      <div className="space-y-1">
                        {pkg.schedule.map((time, timeIndex) => (
                          <div key={timeIndex} className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded">
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookService(pkg.title)}
                      className={`w-full bg-gradient-to-r ${pkg.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg smooth-transition transform hover:scale-105`}
                    >
                      Book Free Trial
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Skill Levels */}
      {activeTab === 'levels' && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  Progressive Learning Paths
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Structured programs that guide you from your first breath to mastery, 
                  honoring traditional progression while meeting individual needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {levels.map((level, index) => (
                  <motion.div
                    key={level.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 hover:shadow-lg smooth-transition"
                  >
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">
                        {index === 0 ? '🌱' : index === 1 ? '🌳' : '🌅'}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {level.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {level.subtitle}
                      </p>
                      <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                        {level.duration}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                      {level.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleBookService(level.title)}
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg smooth-transition transform hover:scale-105"
                    >
                      Start Your Journey
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Therapeutic Programs */}
      {activeTab === 'therapeutic' && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  Therapeutic Yoga Programs
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Specialized yoga therapy for specific health conditions, combining ancient 
                  wisdom with modern understanding of anatomy and physiology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {therapeuticPrograms.map((program, index) => (
                  <motion.div
                    key={program.condition}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl smooth-transition"
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-3">{program.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {program.condition}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {program.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {program.frequency}
                      </span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleBookService(program.condition)}
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg smooth-transition transform hover:scale-105"
                    >
                      Book Consultation
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Personalized Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Each therapeutic program begins with a comprehensive consultation to understand 
                    your specific condition, medical history, and personal goals. Our certified yoga 
                    therapists work closely with healthcare providers to ensure safe and effective practice.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <div className="text-2xl mb-2">📋</div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Assessment</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive health evaluation</p>
                    </div>
                    <div className="p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Customization</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tailored practice plan</p>
                    </div>
                    <div className="p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                      <div className="text-2xl mb-2">📈</div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Progress</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Regular monitoring and adjustment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default Services;