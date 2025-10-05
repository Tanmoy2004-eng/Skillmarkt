import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { Check, Award, Shield, Download } from 'lucide-react';

interface Certificate {
  title: string;
  price: string;
  formLink: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const certificates: Certificate[] = [
  {
    title: 'B.Tech Certificate',
    price: '₹729',
    formLink: 'https://shorturl.at/a7x2T',
    color: 'from-cyan-500 to-blue-500',
    gradientFrom: 'cyan',
    gradientTo: 'blue',
  },
  {
    title: 'B.Arch Certificate',
    price: '₹729',
    formLink: 'https://shorturl.at/a7x2T',
    color: 'from-violet-500 to-purple-500',
    gradientFrom: 'violet',
    gradientTo: 'purple',
  },
  {
    title: 'B.Pharm Certificate',
    price: '₹729',
    formLink: 'https://shorturl.at/a7x2T',
    color: 'from-pink-500 to-rose-500',
    gradientFrom: 'pink',
    gradientTo: 'rose',
  },
];

const features = [
  { icon: Award, text: '8.0 Points' },
  { icon: Download, text: 'Digital Copy' },
  { icon: Shield, text: 'Udemy & MAKAUT Verification' },
];

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const handleBuyNow = (formLink: string) => {
    window.open(formLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'grab',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },
          particles: {
            color: {
              value: ['#06b6d4', '#8b5cf6', '#ec4899', '#3b82f6', '#10b981'],
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.6,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            shape: {
              type: ['circle', 'triangle', 'polygon'],
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 mb-4 tracking-tight animate-pulse">
              SkillMark
            </h1>
            <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            Authentic Certificates for B.Tech, B.Arch and B.Pharm
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Professional certification with verified credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full px-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500 flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`inline-block p-3 rounded-2xl bg-gradient-to-br ${cert.color} mb-4`}>
                  <Award className="text-white" size={32} />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {cert.title}
                </h2>

                <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${cert.color} text-transparent bg-clip-text mb-6`}>
                  {cert.price}
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${cert.color} flex-shrink-0`}>
                          <Icon className="text-white" size={18} />
                        </div>
                        <span className="text-gray-200 text-base sm:text-lg font-medium">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleBuyNow(cert.formLink)}
                  className={`w-full bg-gradient-to-r ${cert.color} text-white font-bold py-4 sm:py-5 px-6 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] transform hover:-translate-y-2 hover:scale-105 text-base sm:text-lg relative overflow-hidden group/button`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Buy Now
                    <svg
                      className="w-5 h-5 group-hover/button:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/button:scale-x-100 transition-transform origin-left"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Trusted by thousands of students across India
          </p>
        </div>
      </div>

      <footer className="relative z-10 py-6 border-t border-white/10">
        <div className="text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} All Rights Reserved by{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              SN SECURITY
            </span>
          </p>
        </div>
      </footer>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </div>
  );
}

export default App;
