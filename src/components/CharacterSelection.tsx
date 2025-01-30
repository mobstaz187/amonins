import React, { useState } from 'react';
import AnimatedPage from './AnimatedPage';
import ParticlesBackground from './ParticlesBackground';

interface Character {
  id: number;
  name: string;
  role: string;
  description: string;
  roleDescription: string;
  image: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "SARUFFI",
    role: "SENTINEL",
    description: 'A mysterious guardian with unparalleled defensive capabilities. Saruffi excels at protecting sites and controlling space with advanced technological prowess.',
    roleDescription: "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
    image: './Characters/Saruffi.png',
  }
];

const CharacterSelection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gradient-to-br from-sky-300 to-sky-100 relative overflow-hidden">
        {/* Default Background */}
        <img 
          src="./logo-default-animon.png"
          alt="Default Animon Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${selectedCharacter ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Particles Effect */}
        {!selectedCharacter && <ParticlesBackground />}

        {/* Video Background */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${selectedCharacter ? 'opacity-100' : 'opacity-0'}`}>
          {selectedCharacter && (
            <video
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src="./Characters/Saruffi.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
            />
          )}
        </div>

        {/* Main Character Display */}
        <div className="absolute top-12 right-12 z-10 text-right">
          {selectedCharacter && (
            <div className="space-y-6 transition-all duration-700 transform translate-x-0 opacity-100">
              <h1 className="text-[72px] font-bold text-yellow-200 leading-none tracking-[0.2em] drop-shadow-lg transition-all duration-700">
                {selectedCharacter.name}
              </h1>
              <div className="max-w-md ml-auto space-y-4 transition-all duration-700 delay-200">
                <p className="text-white/90 text-sm leading-relaxed tracking-wide">
                  {selectedCharacter.description}
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white/80 text-xs leading-relaxed tracking-wide">
                    {selectedCharacter.roleDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lock In Button */}
        {selectedCharacter && (
          <div className="absolute bottom-32 right-12 z-10">
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-20 py-4 rounded-lg 
              hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 
              uppercase tracking-[0.2em] font-medium text-lg shadow-xl 
              transform translate-y-0 opacity-100">
              Lock In
            </button>
          </div>
        )}

        {/* Character Selection Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10">
          <div className="flex justify-center items-center h-full gap-1">
            <button
              onClick={() => {
                setIsVideoLoaded(false);
                setSelectedCharacter(characters[0]);
              }}
              className={`w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg
                ${selectedCharacter?.id === characters[0].id ? 'ring-2 ring-cyan-400 scale-110' : ''}`}
            >
              <img 
                src={characters[0].image} 
                alt={characters[0].name}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default CharacterSelection;