import { motion } from 'framer-motion';
import { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.png';
import img10 from '../assets/images/10.png';
import img11 from '../assets/images/11.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: img1,
      category: "classes",
      title: "Yoga Class 1",
      description: "Experience the essence of yoga practice."
    },
    {
      id: 2,
      src: img2,
      category: "classes",
      title: "Yoga Class 2",
      description: "Harmony and balance in every pose."
    },
    {
      id: 3,
      src: img3,
      category: "meditation",
      title: "Meditation Session",
      description: "Guided meditation for inner peace."
    },
    {
      id: 4,
      src: img4,
      category: "retreat",
      title: "Yoga Retreat",
      description: "A peaceful escape to deepen your practice."
    },
    {
      id: 5,
      src: img5,
      category: "workshop",
      title: "Yoga Workshop",
      description: "Learn advanced techniques from experts."
    },
    {
      id: 6,
      src: img6,
      category: "event",
      title: "Special Event",
      description: "Celebrating yoga and community."
    },
    {
      id: 7,
      src: img7,
      category: "asana",
      title: "Asana Practice",
      description: "Perfecting postures with guidance."
    },
    {
      id: 8,
      src: img8,
      category: "asana",
      title: "Asana Flow",
      description: "Flowing through classic asanas."
    },
    {
      id: 9,
      src: img9,
      category: "class",
      title: "Yoga Class 3",
      description: "A vibrant group yoga session."
    },
    {
      id: 10,
      src: img10,
      category: "meditation",
      title: "Meditation Group",
      description: "Collective mindfulness and relaxation."
    },
    {
      id: 11,
      src: img11,
      category: "workshop",
      title: "Workshop Moments",
      description: "Capturing the spirit of learning."
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Daily Morning Practice",
      thumbnail: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Start your day with this energizing 20-minute sequence"
    },
    {
      id: 2,
      title: "Breathing Techniques",
      thumbnail: "https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn powerful pranayama techniques for stress relief"
    },
    {
      id: 3,
      title: "Meditation for Beginners",
      thumbnail: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Simple meditation techniques to calm the mind"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classes', name: 'Classes' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'retreat', name: 'Retreats' },
    { id: 'kids', name: 'Kids Yoga' },
    { id: 'seniors', name: 'Seniors' },
    { id: 'workshops', name: 'Workshops' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
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
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Witness the transformative power of yoga through moments captured 
              in our classes, retreats, and community gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium smooth-transition ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Moments of Transformation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each image tells a story of growth, healing, and spiritual awakening 
                within our yoga community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl smooth-transition"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Video Highlights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience the energy and serenity of our yoga sessions through 
                these carefully curated video highlights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl smooth-transition group"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 smooth-transition">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <div className="w-0 h-0 border-l-[20px] border-l-primary-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 smooth-transition"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 smooth-transition"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 smooth-transition"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Image Info - mobile: above image, desktop: overlay */}
            <div>
              {/* Mobile (block above image) */}
              <div className="block md:hidden mb-4 w-full max-w-xs mx-auto bg-black/80 text-white p-4 rounded-lg shadow-lg z-10 text-center">
                <h3 className="text-lg font-semibold mb-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-200">{selectedImage.description}</p>
              </div>
              {/* Desktop (overlay on image) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 w-[90vw] max-w-2xl bg-black/60 text-white p-4 rounded-lg shadow-lg pointer-events-auto z-10 flex-col items-center">
                <h3 className="text-xl font-semibold mb-2 text-center">{selectedImage.title}</h3>
                <p className="text-base text-gray-200 text-center">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;