import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById('welcome');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookClass = () => {
    window.open('https://wa.me/919876543210?text=I%20would%20like%20to%20book%20a%20yoga%20class', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/373169856.sd.mp4?s=5e7bd4a5c2b8b4a5e7bd4a5c2b8b4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Welcome to Your
            <span className="block gradient-text text-primary-400">
              Yoga Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
          >
            Discover the ancient wisdom of yoga rooted in Indian tradition.
            <br className="hidden sm:block" />
            Transform your mind, body, and spirit through sacred practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleBookClass}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-lg font-semibold smooth-transition transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </button>
            <button
              onClick={scrollToContent}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full text-lg font-semibold smooth-transition border border-white/30"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-primary-400 font-medium mb-2">1 Month Free Trial</p>
            <p className="text-gray-300">Then ₹999/month • Cancel anytime</p>
          </motion.div>
        </motion.div>

        {/* Sanskrit Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <blockquote className="text-primary-400 text-lg italic mb-2">
            "सर्वे भवन्तु सुखिन:"
          </blockquote>
          <p className="text-gray-300 text-sm">May all beings be happy</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDownIcon className="w-8 h-8 text-white" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;