'use client';

import Image from 'next/image';

interface StudentCommitteeMember {
  name: string;
  title: string;
  department: string;
  image: string;
}

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

const MemberCard: React.FC<{ member: StudentCommitteeMember }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6">
    <div className="flex items-center">
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
      <div className="ml-6 flex-1 ">
        <h4 className="text-lg font-bold text-gray-800 line-clamp-2">{member.name}</h4>
        {/* <p className="text-blue-600 text-sm line-clamp-2">{member.title}</p> */}
        <p className="text-gray-600 text-sm mt-1">{member.department}</p>
      </div>
    </div>
  </div>
);

const studentCommitteeMembers: StudentCommitteeMember[] = [
  {
    name: "Sourav Suman",
    title: "Student Coordinator",
    department: "CSE(DS)",
    image: "/students/sourav.png"
  },
  {
    name: "Deepak Kumar",
    title: "Technical Team Lead",
    department: "CSE(DS)",
    image: "/students/deepak.png"
  },
  
  {
    name: "Artisha Banerjee",
    title: "Content Writer",
    department: "CSE(DS)",
    image: "/students/artisha.png"
  },
  {
    name: "Ankush Panja",
    title: "Design Team Lead",
    department: "CSE(DS)",
    image: "/students/ankush.png"
  },
  {
    name: "Dipak Kumar",
    title: "Marketing Coordinator",
    department: "CSE(DS)",
    image: "/students/dipak.png"
  },
  {
    name: "Ayush Raj",
    title: "Event Manager",
    department: "CSE(DS)",
    image: "/students/ayushraj.jpeg"
  },
  {
    name: "Ayush Kumar",
    title: "Marketing Coordinator",
    department: "CSE(DS)",
    image: "/students/ayushkumar.png"
  },
  {
    name: "Sovana Manjhi",
    title: "Marketing Coordinator",
    department: "CSE(DS)",
    image: "/students/sovana.png"
  },
  {
    name: "Rupesh Kumar",
    title: "Marketing Coordinator",
    department: "CSE(DS)",
    image: "/students/rupesh.png"
  }
];

const StudentCommittee: React.FC = () => {
  return (
    <section id="student-committee" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Committee</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated student committee members working behind the scenes to make ISCIRF 2025 a success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentCommitteeMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCommittee;