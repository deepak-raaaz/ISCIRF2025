'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { AdvisoryMember, internationalAdvisors, nationalAdvisors } from '@/data/advisoryCommittees';


const ProfileImage: React.FC<{ src: string; alt: string; size?: 'sm' | 'md' }> = ({ src, alt, size = 'md' }) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24'
  };

  return (
    <div className={`relative ${sizes[size]} rounded-full overflow-hidden border-2 border-white shadow-md`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={size === 'md'}
      />
    </div>
  );
};

const AdvisorCard: React.FC<{ member: AdvisoryMember }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        {member.image ? (
          <ProfileImage src={member.image} alt={`${member.name} portrait`} size="md" />
        ) : (
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>
      <div className="ml-6 flex-1">
        <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mb-1">
          {member.country || 'India'}
        </div>
        <h4 className="text-lg font-bold text-gray-800 line-clamp-2">{member.name}</h4>
        <p className="text-blue-600 text-sm line-clamp-2">{member.title}</p>
        {/* {member.profileLink && (
          <div className="flex mt-3 space-x-2">
            <a 
              href={member.profileLink} 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        )} */}
      </div>
    </div>
  </div>
);

const TabButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 md:px-6 rounded-t-lg font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-white text-blue-600'
    }`}
    aria-selected={isActive}
    role="tab"
  >
    {children}
  </button>
);

const AdvisoryCommittees: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'national' | 'international'>('national');

  const handleTabChange = useCallback((tab: 'national' | 'international') => {
    setActiveTab(tab);
  }, []);

  return (
    <section id="advisory-committee" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Advisory Committees</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our distinguished academic advisors guiding the symposium&apos;s vision and direction.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-6" role="tablist">
            <TabButton
              isActive={activeTab === 'national'}
              onClick={() => handleTabChange('national')}
            >
              National Advisory Committee
            </TabButton>
            <TabButton
              isActive={activeTab === 'international'}
              onClick={() => handleTabChange('international')}
            >
              International Advisory Committee
            </TabButton>
          </div>
          <hr className="border-t-2 border-blue-600" />
        </div>
        
        {/* National Advisory Committee Content */}
        <div 
          className={`relative transition-opacity duration-300 ${
            activeTab === 'national' ? 'opacity-100' : 'opacity-0 hidden'
          }`}
          role="tabpanel"
          aria-hidden={activeTab !== 'national'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalAdvisors.map((member, index) => (
              <AdvisorCard key={`national-${index}`} member={member} />
            ))}
          </div>
        </div>
        
        {/* International Advisory Committee Content */}
        <div 
          className={`relative transition-opacity duration-300 ${
            activeTab === 'international' ? 'opacity-100' : 'opacity-0 hidden'
          }`}
          role="tabpanel"
          aria-hidden={activeTab !== 'international'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalAdvisors.map((member, index) => (
              <AdvisorCard key={`international-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCommittees;