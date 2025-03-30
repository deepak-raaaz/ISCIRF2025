'use client';

  import { committeeMembers, chiefPatron, patrons, CommitteeMember, Patron, organizingSecretary } from '@/data/committee';
import Image from 'next/image';
import { useState } from 'react';




const ProfileImage: React.FC<{ src: string; alt: string; size: 'sm' | 'md' | 'lg' }> = ({ src, alt, size }) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };

  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-20 w-20'
  };

  return (
    <div className={`relative ${sizes[size]} rounded-full overflow-hidden border-4 border-white shadow-lg bg-blue-50 flex items-center justify-center`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${iconSizes[size]} text-blue-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )}
    </div>
  );
};

const PatronCard: React.FC<{ patron: Patron }> = ({ patron }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
    <ProfileImage src={patron.image} alt={`${patron.name} portrait`} size="sm" />
    <div className="ml-4">
      <h4 className="text-lg font-bold text-gray-800">{patron.name}</h4>
      <p className="text-gray-600">{patron.title}</p>
    </div>
  </div>
);

export const CommitteeMemberCard: React.FC<{ member: CommitteeMember }> = ({ member }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative h-40 bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-blue-50 flex items-center justify-center">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name} portrait`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>
      </div>
    </div>
    <div className="p-6 text-center -mt-6">
      <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
      <p className="text-blue-600 font-medium mb-2">{member.title}</p>
      {member.department && (
        <p className="text-gray-600 text-sm">{member.department}</p>
      )}
    </div>
  </div>
);

const OrganizingCommittee: React.FC = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const handleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  return (
    <section id="organizing-committee" className="py-10 max-sm:py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Organizing Committee</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind ISCIRF 2025 working to make this symposium a success.
          </p>
        </div>
        
        {/* Chief Patron and Patrons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Chief Patron */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden h-full">
              <div className="bg-blue-600 text-white py-3 px-6">
                <h3 className="text-xl font-bold">Chief Patron</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <ProfileImage src={chiefPatron.image} alt={`${chiefPatron.name} portrait`} size="md" />
                  <h4 className="text-lg font-bold text-gray-800 mt-4">{chiefPatron.name}</h4>
                  <p className="text-blue-600 font-medium">{chiefPatron.title}</p>
                  <p className="text-gray-600 text-center mt-2">{chiefPatron.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Patrons */}
          <div className="lg:col-span-2">
            <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden h-full">
              <div className="bg-blue-600 text-white py-3 px-6">
                <h3 className="text-xl font-bold">Patrons</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {patrons.map((patron, index) => (
                    <PatronCard key={index} patron={patron} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Organizing Secretary */}
        <div className="mb-16">
          <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white py-3 px-6">
              <h3 className="text-xl font-bold">Organizing Secretary</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <ProfileImage src={organizingSecretary.image} alt={`${organizingSecretary.name} portrait`} size="md" />
                <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0">
                  <h4 className="text-xl font-bold text-gray-800">{organizingSecretary.name}</h4>
                  <p className="text-blue-600 font-medium">{organizingSecretary.title}</p>
                  <p className="text-gray-600 mt-2">{organizingSecretary.department}</p>
                  <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                    {organizingSecretary.email && (
                      <a href={`mailto:${organizingSecretary.email}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                    )}
                    {organizingSecretary.phone && (
                      <a href={`tel:${organizingSecretary.phone}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {organizingSecretary.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Committee Members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Committee Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeMembers.slice(0, showAllMembers ? committeeMembers.length : 4).map((member, index) => (
              <CommitteeMemberCard key={index} member={member} />
            ))}
          </div>
          
          {/* View All Link */}
          {committeeMembers.length > 4 && !showAllMembers && (
          <div className="mt-8 text-center">
            <span onClick={handleShowAllMembers} className="cursor-pointer inline-flex items-center text-blue-500 hover:text-blue-600 transition">
              View All Committee Members
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
          )}
          {committeeMembers.length > 4 && showAllMembers && (
            <div className="mt-8 text-center">
              <span onClick={handleShowAllMembers} className="cursor-pointer inline-flex items-center text-blue-500 hover:text-blue-600 transition">
                View Less
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;