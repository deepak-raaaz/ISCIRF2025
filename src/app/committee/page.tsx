"use client";

import React from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { CommitteeMemberCard } from '@/components/landing-page/OrganizingCommittee';
import { committeeMembers } from '@/data/committee';


const CommitteePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb className="mb-8" />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organizing Committee
          </h1>
          <div className="w-20 h-1 bg-[#463AA1] mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Meet the dedicated team behind ISCIRF 2025, working to bring you an exceptional conference experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {committeeMembers.map((member, index) => (
              <CommitteeMemberCard key={index} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage; 