import React from 'react';
import Image from 'next/image';

interface ThemeItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ThemeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ icon, title, description }) => (
  <div className="group">
    <div className="flex items-center bg-blue-600/5 hover:bg-blue-600/10 p-4 rounded-lg transition-colors duration-300 cursor-pointer">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
    </div>
    <div className="pl-16 mt-2 hidden group-hover:block animate-fadeIn">
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ThemeCard: React.FC<ThemeCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
    <div className="h-3 bg-blue-600"></div>
    <div className="p-6">
      <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const mainThemes = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "📌 Supply Chain Management",
    description: "Research focusing on AI-driven supply chain optimization, resilient logistics networks, and real-time inventory management."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "📌 Optimization",
    description: "Advanced optimization algorithms, multi-objective optimization, combinatorial optimization, and metaheuristic approaches."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "📌 Modelling & Simulation",
    description: "Digital twins, agent-based modeling, simulation-based decision making, and predictive analytics systems."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "📌 Data-Driven Innovation",
    description: "Big data analytics, knowledge discovery, data mining, and machine learning approaches for intelligent insights."
  }
];

const additionalThemes = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "📌 Exploring Soft Computing Frontiers",
    description: "Fuzzy logic, neural networks, evolutionary algorithms, swarm intelligence, and hybrid approaches."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "📌 Intelligent Computing",
    description: "Cognitive computing, human-computer interaction, NLP, computer vision, and reinforcement learning systems."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "📌 Intelligent Systems and Applications",
    description: "Smart environments, IoT ecosystems, industrial automation, and intelligent decision support systems."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "📌 Next-generation Research",
    description: "Quantum computing, blockchain technology, edge computing, green AI, and breakthrough technologies."
  }
];

const Themes: React.FC = () => {
  return (
    <section id="themes" className="py-20 bg-blue-50">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Themes
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Discover the key research areas and technological themes that will be covered at ISCIRF 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side image */}
          <div className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/research2.jpg"
                alt="Professional research and collaboration environment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/50 to-transparent"></div>
            </div>
            
            <div className="absolute top-4 left-4 right-4 p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Research Areas</h3>
              <p className="text-gray-600 mb-4">
                ISCIRF 2025 will explore groundbreaking computational approaches addressing critical challenges across industries.
              </p>
              <div className="flex items-center justify-between text-sm text-blue-600">
                <span>8 core themes</span>
                <span>30+ sub-topics</span>
                <span>100+ research areas</span>
              </div>
            </div>
          </div>

          {/* Right side themes */}
          <div>
            <div className="space-y-6">
              {mainThemes.map((theme, index) => (
                <ThemeItem key={index} {...theme} />
              ))}
            </div>
          </div>
        </div>

        {/* Additional themes in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {additionalThemes.map((theme, index) => (
            <ThemeCard key={index} {...theme} />
          ))}
        </div>

        {/* Call to Action for Submission */}
        {/* <div className="mt-16 flex justify-center">
          <div className="bg-blue-600/5 rounded-xl p-6 md:p-8 shadow-lg max-w-3xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Research Paper on These Themes?
            </h3>
            <p className="text-gray-600 mb-6">
              Submit your original work and contribute to the advancement of computational intelligence and research frontiers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/submit-paper"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-[#362d89] transition-colors duration-300 font-semibold"
              >
                Submit Your Paper
              </Link>
              <Link
                href="/guidelines"
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600/5 transition-colors duration-300 font-semibold"
              >
                View Submission Guidelines
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Themes;