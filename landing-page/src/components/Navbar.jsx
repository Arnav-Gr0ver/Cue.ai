// components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isChat = location.pathname === '/chat';

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isChat ? 'bg-white border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              FINAGEN
            </span>
          </Link>
          
          {!isChat && (
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
              <Link 
                to="/chat" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                Launch AI Chat
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;