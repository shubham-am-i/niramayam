import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'Twitter', href: '#', icon: '🐦' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const services = [
    'Hatha Yoga',
    'Vinyasa Flow',
    'Meditation',
    'Pranayama',
    'Yoga Therapy',
    'Kids Yoga',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🕉</span>
              </div>
              <span className="text-xl font-bold">Yoga Sanctuary</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ancient wisdom meets modern practice. Transform your life through the 
              sacred art of yoga, rooted in traditional Indian philosophy and culture.
            </p>
            <blockquote className="text-primary-400 italic text-sm">
              "योग: कर्मसु कौशलम्" <br />
              <span className="text-gray-400 text-xs">- Yoga is skill in action</span>
            </blockquote>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 smooth-transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  123 Spiritual Avenue,<br />
                  Wellness District,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                <p className="text-gray-400 text-sm">info@yogasanctuary.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-2xl hover:scale-110 smooth-transition"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>© {currentYear} Yoga Sanctuary. Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>in India</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>1 Month Free Trial</span>
              <span>•</span>
              <span>₹999/month thereafter</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;