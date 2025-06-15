import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Instructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const instructors = [
    {
      name: "Guru Ananda Saraswati",
      title: "Founder & Master Teacher",
      experience: "25+ Years",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Hatha Yoga", "Meditation", "Pranayama", "Yoga Philosophy"],
      bio: "Trained in traditional Himalayan yoga, Guru Ananda brings ancient wisdom to modern practice.",
      certifications: ["RYT-500", "Traditional Himalayan Yoga", "Vedic Philosophy"]
    },
    {
      name: "Priya Sharma",
      title: "Senior Instructor",
      experience: "15+ Years",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Vinyasa Flow", "Yin Yoga", "Therapeutic Yoga"],
      bio: "Specializes in therapeutic yoga and has helped hundreds overcome physical limitations.",
      certifications: ["RYT-200", "Yoga Therapy", "Ayurveda Consultant"]
    },
    {
      name: "Arjun Patel",
      title: "Meditation Guide",
      experience: "20+ Years",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Meditation", "Mindfulness", "Stress Management"],
      bio: "Expert in various meditation techniques and mindfulness practices for modern life.",
      certifications: ["Certified Meditation Teacher", "Mindfulness Coach", "Stress Management Specialist"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
              Meet Your Guides
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Learn from experienced instructors who have dedicated their lives to 
              the practice and teaching of authentic yoga traditions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl smooth-transition group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {instructor.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {instructor.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-md text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Certifications:
                    </h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {instructor.certifications.map((cert) => (
                        <li key={cert} className="flex items-center">
                          <StarIcon className="w-3 h-3 text-primary-500 mr-2" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;