import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
   <nav className="fixed top-0 left-0 right-0 z-30 bg-[#1E1656]/95 backdrop-blur-md border-b border-[#00D1FF]/20">
     {/*       <div className="h-32 bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex space-x-8">
            <img src="/logos/aiefr-logo.png" alt="AIEFR" className="h-16" />
            <img src="/logos/anuvadini-logo.png" alt="ANUVADINI" className="h-16" />
            <img src="/logos/brainovision-logo.png" alt="BRAIN O VISION" className="h-16" />
            <img src="/logos/neat-logo.png" alt="N.E.A.T" className="h-16" />
            <img src="/logos/aicte-logo.png" alt="AICTE" className="h-16" />
          </div>
        </div>
      </div>
*/}
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#FFD700]" />
            <span className="text-xl font-bold text-[#00D1FF]">BrainoVision</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Home</Link>
            <a href="#programs" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Programs</a>
            <a href="#benefits" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Benefits</a>
            <a href="#contact" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;