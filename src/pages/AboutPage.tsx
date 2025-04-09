import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Star, Palette, Info, MapPin, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Cosmetologists Near You | Our Mission & Services</title>
        <meta name="description" content="Learn about CosmetologistNearYou.com, the premier resource for finding licensed beauty professionals, makeup artists, estheticians, and hair stylists in your local area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900">About CosmetologistNearYou.com</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding licensed cosmetologists, makeup artists, estheticians, and beauty professionals in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At CosmetologistNearYou.com, our mission is to connect individuals seeking professional beauty services with licensed cosmetologists in their local area. We believe everyone deserves access to skilled beauty professionals who can help them look and feel their best.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of cosmetology professionals, making it easy to find the right beauty expert near you. Our platform allows you to browse listings by location, read detailed business profiles, and make informed decisions about where to receive your beauty services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">For Clients</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Find licensed cosmetologists and beauty professionals in your area</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Access detailed profiles with services, pricing, and contact information</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient beauty services near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with beauty professionals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">For Beauty Professionals</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential clients</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Showcase your services, specialties, and business details</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Grow your client base with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Stand out in a specialized, niche directory</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Why Professional Beauty Services Matter</h2>
            <p className="text-gray-700 mb-4">
              Professional beauty services are more than just a luxury—they're an investment in your appearance, confidence, and self-care routine. Licensed cosmetologists have extensive training and expertise to provide personalized services that enhance your natural beauty.
            </p>
            <p className="text-gray-700 mb-4">
              Professional cosmetologists offer services that take into account your skin type, hair texture, face shape, personal style, and maintenance preferences. They provide expert advice on products and techniques that help you maintain your look between visits.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Licensed Cosmetologists</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Palette className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Skilled, licensed professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Personalized beauty consultations</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Professional-grade products</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Current techniques and trends</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">DIY Beauty</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Palette className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited expertise and technique</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Difficulty with advanced techniques</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Consumer-grade products</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Often requires professional correction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              CosmetologistNearYou.com was founded by a team of digital marketing specialists who recognized the need for a specialized platform connecting licensed beauty professionals with clients seeking quality services in their local communities.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both cosmetologists and clients, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on beauty professionals. Many qualified cosmetologists were difficult to find online, and clients struggled to identify which professionals specialized in their specific beauty needs.
            </p>
            <p className="text-gray-700">
              Today, CosmetologistNearYou.com is the premier online resource for cosmetology professionals across the United States. We continue to expand our listings and improve our platform to better serve both beauty professionals and their clients.
            </p>
          </div>
          
          <div className="bg-purple-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you a licensed cosmetologist? Add your business to our directory and connect with potential clients in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;