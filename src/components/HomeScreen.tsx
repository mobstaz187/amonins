import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

const HomeScreen: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedMode, setSelectedMode] = useState('story');
  const featuredVideos = [
    'Ratiza', 'Reza', 'Gotsu', 'kumamo', 'Sukusa',
    'Catto', 'Gopegi', 'Coorogi', 'Kichi'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % featuredVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedPage>
      <div className="fixed inset-0 w-full h-full">
        <img
          src="./Splash/Gif-Animon.gif"
          alt="Animon Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
        
        {/* Logo and Version */}
        <div className="absolute top-8 left-8 z-20">
          <img 
            src="./logo-default-animon.png" 
            alt="Animon Logo" 
            className="h-16 w-auto"
          />
          <div className="mt-2 text-white/60 text-sm">Version 1.0.0</div>
        </div>

        {/* Left Side Content */}
        <div className="absolute left-28 top-1/2 -translate-y-1/2 z-20 space-y-4">
          {/* Player Stats */}
          <div className="w-72 bg-black/90 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold">Guest Player</div>
                <div className="text-white/60 text-sm">Level 1</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="w-1/4 h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
              </div>
              <div className="flex justify-between text-white/60 text-xs">
                <span>XP: 250/1000</span>
                <span>Next Level: 750 XP</span>
              </div>
            </div>
          </div>

          {/* Game Modes */}
          <div className="w-72 bg-black/90 rounded-lg p-4 space-y-3">
            <h3 className="text-white/90 font-bold text-lg tracking-wider">GAME MODES</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedMode('story')}
                className={`w-full p-2.5 rounded-lg flex items-center gap-3 transition-all duration-300
                  ${selectedMode === 'story' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Story Mode</div>
                  <div className="text-xs opacity-70">Experience the journey</div>
                </div>
              </button>

              <button
                onClick={() => setSelectedMode('battle')}
                className={`w-full p-2.5 rounded-lg flex items-center gap-3 transition-all duration-300
                  ${selectedMode === 'battle' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Battle Arena</div>
                  <div className="text-xs opacity-70">Fight other players</div>
                </div>
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="space-y-3 mt-12">
            <Link
              to="/characters"
              className="pokemon-text text-4xl transform hover:scale-105 
                transition-transform duration-300 block"
            >
              ANIMONS
            </Link>
            
            <Link
              to="/about"
              className="pokemon-text text-4xl transform hover:scale-105 
                transition-transform duration-300 block"
            >
              ABOUT
            </Link>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="absolute right-28 top-1/2 -translate-y-1/2 z-20 space-y-4">
          {/* Featured Box */}
          <div className="w-96 bg-black/90 rounded-lg overflow-hidden">
            {/* Featured Header */}
            <div className="p-4 border-b border-white/10">
              <h2 className="text-white/90 font-bold text-xl tracking-wider">FEATURED COLLECTION</h2>
            </div>

            {/* Main Featured Video */}
            <div className="aspect-video relative">
              <video
                key={featuredVideos[currentVideo]}
                src={`./Featured/${featuredVideos[currentVideo]}.mp4`}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-bold text-xl">
                  {featuredVideos[currentVideo]}
                </h3>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${currentVideo === index 
                        ? 'bg-cyan-400 w-4' 
                        : 'bg-white/50 hover:bg-white/70'}`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <button
                onClick={() => setCurrentVideo((prev) => 
                  prev === 0 ? featuredVideos.length - 1 : prev - 1
                )}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white
                  bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-300"
                aria-label="Previous video"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentVideo((prev) => 
                  (prev + 1) % featuredVideos.length
                )}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white
                  bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-300"
                aria-label="Next video"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Video Previews */}
            <div className="p-2 grid grid-cols-3 gap-2">
              {featuredVideos.slice(0, 3).map((video, index) => (
                <div 
                  key={video}
                  onClick={() => setCurrentVideo(index)}
                  className={`aspect-video relative cursor-pointer overflow-hidden rounded 
                    ${currentVideo === index ? 'ring-2 ring-cyan-400' : 'opacity-70'}`}
                >
                  <video
                    src={`./Featured/${video}.mp4`}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                </div>
              ))}
            </div>

            {/* Patch Notes Section */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center justify-between text-white/60 text-sm">
                <span>PATCH NOTES</span>
                <span className="text-xs">15.15 MB</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="w-96 bg-black/90 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h3 className="text-white/90 text-xl font-bold">Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-white/70">
                <span>Total Animons</span>
                <span className="font-medium">9</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Latest Update</span>
                <span className="font-medium">2 days ago</span>
              </div>
            </div>
          </div>

          {/* News Ticker */}
          <div className="w-96 bg-black/90 border-l-4 border-cyan-500 rounded-lg p-4">
            <div className="text-cyan-400 font-medium mb-2">LATEST NEWS</div>
            <div className="text-white/80 text-sm">
              New Animon "Kichi" has joined the roster! Check out the featured section.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-8 right-8 z-20 flex justify-between items-center text-white/50 text-sm">
          <div>© 2024 Animon. All rights reserved.</div>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">Support</button>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default HomeScreen;