import React from 'react';
import Image from 'next/image';

interface ScopeAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const ScopeArea: React.FC<ScopeAreaProps> = ({ icon, title, description, tags }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105">
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 bg-blue-600 rounded-full p-3 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="pl-16">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-600/10 text-blue-600 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const scopeAreas = [
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "AI-Driven Supply Chain & Optimization",
    description: "Enhancing logistics, demand forecasting, and real-time decision-making using AI, heuristic algorithms, and mathematical modeling.",
    tags: ["Smart Logistics", "Predictive Analytics", "AI Optimization"]
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Modelling, Simulation & Data-Driven Innovation",
    description: "Advancing digital twins, simulation-based control, and big data analytics for automation and intelligent insights.",
    tags: ["Digital Twins", "Big Data", "Simulation"]
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Soft Computing & Intelligent Computing",
    description: "Exploring fuzzy logic, neural networks, genetic algorithms, cognitive computing, and self-learning AI models for complex problem-solving.",
    tags: ["Neural Networks", "Fuzzy Logic", "Genetic Algorithms"]
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Intelligent Systems & Applications",
    description: "Integrating AI-powered automation, IoT-enabled decision-making, smart robotics, and adaptive systems in various industries.",
    tags: ["IoT Solutions", "Smart Robotics", "Adaptive Systems"]
  },
  {
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Next-Gen Research & Technological Breakthroughs",
    description: "Covering blockchain, quantum computing, edge computing, AI for sustainability, and disruptive innovations in science and engineering.",
    tags: ["Blockchain", "Quantum Computing", "Sustainability"]
  }
];

const Scope: React.FC = () => {
  return (
    <section id="scope" className="py-10 bg-white">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Scope of ISCIRF 2025
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Explore cutting-edge research areas and technological advancements that define the future of computational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {scopeAreas.slice(0, 3).map((area, index) => (
                <ScopeArea key={index} {...area} />
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="order-1 lg:order-2">
            <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/research.jpeg"
                alt="Person working on computational research and analytics"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-600/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-blue-600/90 backdrop-blur-sm px-4 py-3 rounded-lg inline-block mb-2">
                  Innovate
                </div>
                <h3 className="text-2xl font-bold mb-2">Research that Matters</h3>
                <p className="text-blue-50">
                  Addressing real-world challenges through computational intelligence
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {scopeAreas.slice(3).map((area, index) => (
                <ScopeArea key={index} {...area} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Contribute?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Submit your research paper and be part of the conversation shaping the future of computational intelligence.
            </p>
            <Link
              href="/submit-paper"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-[#362d89] transition-colors duration-300"
            >
              <span>Submit Your Paper</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Scope;