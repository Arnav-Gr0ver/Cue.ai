import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen relative bg-[#e6dfd1]">
      {/* Noise overlay */}
      <div className="fixed inset-0 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">FINAGEN</span>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#about" className="text-gray-900 hover:text-gray-600">About us</a>
            <a href="#mission" className="text-gray-900 hover:text-gray-600">Our Mission</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact us</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-serif mb-6 text-gray-900">
              Document Forever.
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Intelligent document analysis for your modern financial workflow.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors">
                Get Started
              </button>
              <button className="bg-transparent border border-gray-900 text-gray-900 px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors">
                See a Demo
              </button>
            </div>
          </div>

          {/* Gradient blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200 via-yellow-200 to-pink-200 rounded-full filter blur-3xl opacity-30" />
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="relative z-10 mt-32 mb-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-gray-200">
            <h2 className="text-2xl font-serif mb-4 text-gray-900">Stay Updated</h2>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter for the latest updates in AI-powered document analysis.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 bg-white/50"
              />
              <button className="w-full bg-gray-900 text-white py-3 rounded-sm hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
              {subscribed && (
                <p className="text-green-700 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Security</a></li>
                <li><a href="#" className="hover:text-gray-900">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;