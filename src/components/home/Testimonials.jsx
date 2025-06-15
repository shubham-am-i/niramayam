import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ravi Mehta",
      age: 45,
      location: "Mumbai",
      image: "https://images.pexels.com/photos/3786233/pexels-photo-3786233.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "Niramayam transformed my life. The authentic teachings helped me overcome chronic back pain and find inner peace. The instructors truly understand the depth of yoga philosophy.",
      rating: 5,
      condition: "Back Pain Relief"
    },
    {
      name: "Priya Singh",
      age: 32,
      location: "Delhi",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "As a working mother, I was constantly stressed. The meditation and pranayama classes have given me tools to manage anxiety and be more present with my family.",
      rating: 5,
      condition: "Stress & Anxiety"
    },
    {
      name: "Arjun Kapoor",
      age: 28,
      location: "Bangalore",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "The PCOD-specific yoga sessions have been incredible. My symptoms have improved significantly, and I feel more energetic and balanced than ever before.",
      rating: 5,
      condition: "PCOD Management"
    },
    {
      name: "Sunita Rao",
      age: 58,
      location: "Chennai",
      image: "https://images.pexels.com/photos/3823486/pexels-photo-3823486.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "At my age, I thought it was too late to start yoga. The senior-friendly classes have improved my flexibility and given me a new lease on life. The community here is wonderful.",
      rating: 5,
      condition: "Senior Fitness"
    },
    {
      name: "Kavita Sharma",
      age: 35,
      location: "Pune",
      image: "https://images.pexels.com/photos/3823490/pexels-photo-3823490.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "The kids' yoga program is amazing! My 8-year-old daughter has become more focused and calm. She looks forward to every session and practices at home too.",
      rating: 5,
      condition: "Kids Yoga"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our community members about their healing journey and 
              how yoga has transformed their lives.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="text-center mb-8">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Age {testimonials[currentIndex].age} • {testimonials[currentIndex].location}
                  </p>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].condition}
                  </span>
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl smooth-transition"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl smooth-transition"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full smooth-transition ${
                    index === currentIndex
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;