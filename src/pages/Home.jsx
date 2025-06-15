import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import Instructors from '../components/home/Instructors';
import Testimonials from '../components/home/Testimonials';
import Packages from '../components/home/Packages';
import Wisdom from '../components/home/Wisdom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Welcome />
      <Instructors />
      <Testimonials />
      <Packages />
      <Wisdom />
    </motion.div>
  );
};

export default Home;