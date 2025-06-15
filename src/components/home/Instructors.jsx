import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import mentor1 from '../../assets/images/mentor1.png';
import mentor2 from '../../assets/images/mentor2.png';

const Instructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const instructors = [
    {
      name: "Saikat",
      title: "Founder & Master Teacher",
      experience: "7+ Years",
      image: mentor1,
      specialties: ["Hatha Yoga", "Meditation", "Pranayama", "Yoga Philosophy", "Mindfulness"],
      bio: "Trained in traditional Himalayan yoga, Saikat brings ancient wisdom to modern practice.",
      certifications: ["RYT-500", "Traditional Himalayan Yoga", "Vedic Philosophy"]
    },
    {
      name: "Chinmay",
      title: "Senior Instructor",
      experience: "7+ Years",
      image: mentor2,
      specialties: ["Vinyasa Flow", "Yin Yoga", "Therapeutic Yoga"],
      bio: "Specializes in therapeutic yoga and has helped 40+ overcome physical limitations.",
      certifications: ["RYT-200", "Yoga Therapy", "Ayurveda Consultant"]
    },
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
              Meet Your Mentors
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Learn from experienced instructors who have dedicated their lives to 
              the practice and teaching of authentic yoga traditions.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mx-auto w-full" style={{maxWidth: '900px'}}>
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl smooth-transition group flex-1 min-w-[300px] max-w-[350px]"
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