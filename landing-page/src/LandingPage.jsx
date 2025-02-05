import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, FileText, Brain, Shield, Sparkles, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, purple 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Main content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side - Hero text */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Financial Analysis
              </div>
              
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Transform Complex Financial Documents into Clear Insights
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
                FINAGEN uses advanced AI to automatically extract, analyze, and summarize key information from your financial documents. Get instant insights, detect patterns, and make data-driven decisions faster than ever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => navigate('/chat')}
                  className="px-8 py-4 rounded bg-purple-600 hover:bg-purple-700 text-white font-medium inline-flex items-center justify-center group transition-all"
                >
                  Try AI Analysis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded border border-purple-500/30 hover:bg-purple-500/10 text-white font-medium inline-flex items-center justify-center">
                  View Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 p-8 rounded-lg bg-white/5">
                <div>
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">5x</div>
                  <div className="text-sm text-gray-400">Faster Analysis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">Processing</div>
                </div>
              </div>
            </div>

            {/* Right side - Feature preview */}
            <div className="flex-1 w-full max-w-xl">
              <div className="rounded-lg overflow-hidden border border-purple-500/20 bg-black/50 backdrop-blur-sm">
                <div className="border-b border-purple-500/20 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-purple-500/20 rounded w-3/4" />
                        <div className="h-4 bg-purple-500/10 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-purple-500/20 rounded w-2/3" />
                        <div className="h-4 bg-purple-500/10 rounded w-1/3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Powerful Features for Modern Finance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-6 w-6 text-purple-400" />,
                title: "AI Document Analysis",
                description: "Extract key financial metrics, trends, and insights automatically from any document format."
              },
              {
                icon: <Shield className="h-6 w-6 text-purple-400" />,
                title: "Enterprise Security",
                description: "Bank-grade encryption and security protocols to keep your sensitive financial data protected."
              },
              {
                icon: <Sparkles className="h-6 w-6 text-purple-400" />,
                title: "Smart Summaries",
                description: "Get instant executive summaries and key takeaways from complex financial reports."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/5 border border-purple-500/20 hover:bg-purple-500/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 border-t border-purple-500/20">
        <div className="absolute inset-0 bg-purple-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded bg-white/5 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-medium"
              >
                Get Started
              </button>
            </form>
            {subscribed && (
              <p className="mt-4 text-sm text-purple-400">
                Thank you for your interest! We'll be in touch soon.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-sm text-gray-400">
            © 2024 FINAGEN. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;