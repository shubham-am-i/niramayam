import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarIcon, UserIcon, TagIcon, ClockIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Ancient Science of Pranayama: Breathing Your Way to Wellness",
      excerpt: "Discover the transformative power of breath control techniques that have been practiced for thousands of years in the yogic tradition.",
      content: "Pranayama, literally meaning 'extension of life force,' is one of the most powerful yet accessible practices in yoga...",
      author: "Guru Ananda Saraswati",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "practice",
      image: "https://images.pexels.com/photos/3822187/pexels-photo-3822187.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Pranayama", "Breathing", "Wellness", "Ancient Wisdom"]
    },
    {
      id: 2,
      title: "Yoga for PCOD: A Natural Approach to Hormonal Balance",
      excerpt: "Learn how specific yoga practices can help manage PCOD symptoms and restore hormonal harmony naturally.",
      content: "Polycystic Ovary Disorder (PCOD) affects millions of women worldwide. Through targeted yoga practices...",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "health",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["PCOD", "Women's Health", "Hormones", "Therapeutic Yoga"]
    },
    {
      id: 3,
      title: "The Philosophy Behind Yoga: Understanding the Eight Limbs",
      excerpt: "Explore Patanjali's Ashtanga Yoga and how these eight limbs create a complete path to spiritual awakening.",
      content: "The eight limbs of yoga, as outlined by sage Patanjali, provide a comprehensive framework for living...",
      author: "Arjun Patel",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "philosophy",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Philosophy", "Patanjali", "Ashtanga", "Spiritual Growth"]
    },
    {
      id: 4,
      title: "Starting Yoga After 50: It's Never Too Late to Begin",
      excerpt: "Discover how yoga can enhance quality of life for seniors, with gentle modifications and tremendous benefits.",
      content: "Age is just a number when it comes to yoga. Many people discover yoga later in life and find it transformative...",
      author: "Priya Sharma",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "lifestyle",
      image: "https://images.pexels.com/photos/3823486/pexels-photo-3823486.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Senior Yoga", "Healthy Aging", "Gentle Practice", "Wellness"]
    },
    {
      id: 5,
      title: "Meditation for Beginners: Finding Stillness in a Busy World",
      excerpt: "Simple meditation techniques to help you start a daily practice and find peace amidst life's chaos.",
      content: "In our fast-paced world, meditation offers an oasis of calm. Starting a meditation practice doesn't require...",
      author: "Arjun Patel",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "practice",
      image: "https://images.pexels.com/photos/3786233/pexels-photo-3786233.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Meditation", "Mindfulness", "Stress Relief", "Inner Peace"]
    },
    {
      id: 6,
      title: "The Healing Power of Restorative Yoga",
      excerpt: "Understand how gentle, supported poses can activate your body's natural healing response and reduce chronic stress.",
      content: "Restorative yoga is a practice of deep relaxation that uses props to support the body in poses...",
      author: "Guru Ananda Saraswati",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "health",
      image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Restorative Yoga", "Healing", "Stress Relief", "Recovery"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'practice', name: 'Practice', count: blogPosts.filter(post => post.category === 'practice').length },
    { id: 'health', name: 'Health', count: blogPosts.filter(post => post.category === 'health').length },
    { id: 'philosophy', name: 'Philosophy', count: blogPosts.filter(post => post.category === 'philosophy').length },
    { id: 'lifestyle', name: 'Lifestyle', count: blogPosts.filter(post => post.category === 'lifestyle').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

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
              Yoga Wisdom Blog
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Insights, practices, and ancient wisdom for modern living. 
              Deepen your understanding of yoga philosophy and enhance your practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Featured Article
              </h2>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <UserIcon className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg smooth-transition transform hover:scale-105 self-start">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium smooth-transition ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl smooth-transition group"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 smooth-transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-500">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm smooth-transition">
                        Read More →
                      </button>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center space-x-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-md"
                          >
                            <TagIcon className="w-3 h-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly yoga wisdom, practice tips, 
              and updates from our community.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 smooth-transition">
                  Subscribe
                </button>
              </div>
              <p className="text-primary-200 text-sm mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts Sidebar */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Recent Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Catch up on our latest articles and teachings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl smooth-transition"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;