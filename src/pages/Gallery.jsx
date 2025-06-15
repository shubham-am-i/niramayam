import { motion } from 'framer-motion';
import { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "classes",
      title: "Hatha Yoga Session",
      description: "Students practicing traditional Hatha yoga postures"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "meditation",
      title: "Meditation Circle",
      description: "Group meditation session in our peaceful studio"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "classes",
      title: "Vinyasa Flow",
      description: "Dynamic flowing sequence connecting breath and movement"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "retreat",
      title: "Outdoor Retreat",
      description: "Yoga practice in nature during our weekend retreat"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3823490/pexels-photo-3823490.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "kids",
      title: "Kids Yoga Fun",
      description: "Children enjoying playful yoga poses and games"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "classes",
      title: "Pranayama Practice",
      description: "Learning ancient breathing techniques for wellness"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3823486/pexels-photo-3823486.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "seniors",
      title: "Golden Years Yoga",
      description: "Gentle yoga practice designed for senior practitioners"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3786233/pexels-photo-3786233.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "meditation",
      title: "Sunrise Meditation",
      description: "Early morning meditation practice at our studio"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "retreat",
      title: "Mountain Retreat",
      description: "Peaceful yoga session during our Himalayan retreat"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3822186/pexels-photo-3822186.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "classes",
      title: "Therapeutic Yoga",
      description: "Specialized session for back pain relief"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3823492/pexels-photo-3823492.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshops",
      title: "Philosophy Workshop",
      description: "Deep dive into ancient yoga philosophy and texts"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3822185/pexels-photo-3822185.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "classes",
      title: "Restorative Yoga",
      description: "Deeply relaxing poses for stress relief and healing"
    }
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

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;