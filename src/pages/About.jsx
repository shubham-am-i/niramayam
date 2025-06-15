import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  AcademicCapIcon, 
  HeartIcon, 
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const milestones = [
    {
      year: "1998",
      title: "Spiritual Awakening",
      description: "Guru Ananda begins intensive yoga training in Rishikesh ashrams",
      icon: "🕉️"
    },
    {
      year: "2003",
      title: "Himalayan Retreat",
      description: "5-year intensive study of traditional Hatha Yoga and meditation",
      icon: "🏔️"
    },
    {
      year: "2008",
      title: "Yoga Sanctuary Founded",
      description: "Established with a vision to share authentic yoga teachings",
      icon: "🏛️"
    },
    {
      year: "2012",
      title: "Therapeutic Yoga Program",
      description: "Launched specialized programs for health conditions",
      icon: "🩺"
    },
    {
      year: "2018",
      title: "1000+ Students Milestone",
      description: "Reached 1000 students transformed through yoga",
      icon: "🌟"
    },
    {
      year: "2023",
      title: "Digital Expansion",
      description: "Launched online programs to reach global community",
      icon: "🌐"
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We honor traditional yoga teachings while making them accessible to modern practitioners.",
      icon: <AcademicCapIcon className="w-8 h-8" />
    },
    {
      title: "Compassion",
      description: "Every student's journey is unique. We provide personalized guidance with loving kindness.",
      icon: <HeartIcon className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "Our commitment to high-quality instruction ensures transformative experiences for all.",
      icon: <StarIcon className="w-8 h-8" />
    },
    {
      title: "Community",
      description: "We foster a supportive environment where students grow together on their spiritual path.",
      icon: <UserGroupIcon className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: <ClockIcon className="w-6 h-6" /> },
    { number: "2000+", label: "Students Transformed", icon: <UserGroupIcon className="w-6 h-6" /> },
    { number: "50+", label: "Health Conditions Helped", icon: <HeartIcon className="w-6 h-6" /> },
    { number: "15+", label: "Awards & Recognitions", icon: <TrophyIcon className="w-6 h-6" /> }
  ];

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
              Our Sacred Journey
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Rooted in ancient wisdom, blossoming in modern times. 
              Discover the story behind Yoga Sanctuary and our mission to 
              transform lives through authentic yoga practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                "To preserve and share the ancient wisdom of yoga, making it accessible to all seekers regardless of age, background, or physical ability."
              </blockquote>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe yoga is not just physical exercise but a complete way of life that integrates 
                body, mind, and spirit. Our approach honors the traditional teachings while adapting 
                them for contemporary lifestyles, ensuring everyone can experience the transformative 
                power of this ancient practice.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to a thriving community, witness the milestones 
              that shaped our path to becoming a beacon of authentic yoga wisdom.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                    <div className="text-3xl mb-3">{milestone.icon}</div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from our teaching methods 
              to our interactions with students and the wider community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg hover:shadow-lg smooth-transition"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Philosophy
            </h2>
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता:"
              </blockquote>
              <p className="text-xl text-primary-100 italic mb-6">
                "Where women are honored, there the gods are pleased"
              </p>
              <div className="text-left space-y-4 text-primary-100 leading-relaxed">
                <p>
                  We believe in the sacred feminine principle that nurtures, heals, and transforms. 
                  Our practice honors the divine energy within each individual, recognizing that 
                  true yoga transcends physical boundaries to touch the soul.
                </p>
                <p>
                  Rooted in the Vedic tradition of "Guru-Shishya Parampara" (teacher-student lineage), 
                  we maintain the sacred trust of knowledge transmission while adapting ancient 
                  wisdom for contemporary needs.
                </p>
                <p>
                  Every breath, every movement, every moment of stillness is an opportunity 
                  for spiritual growth. We guide our students not just in physical postures, 
                  but in the deeper journey of self-discovery and inner awakening.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;