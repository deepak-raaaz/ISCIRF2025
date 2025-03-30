'use client';

import Image from 'next/image';

interface Speaker {
  id: number;
  name: string;
  title: string;
  institution: string;
  image: string;
}

interface PlenarySpeaker {
  name: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

interface ProfileImageProps {
  src: string;
  alt: string;
  size: 'sm' | 'md' | 'lg';
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, size }) => {
  const sizes = {
    sm: 'w-28 h-28',
    md: 'w-36 h-36',
    lg: 'w-40 h-40'
  };

  const iconSizes = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20'
  };

  return (
    <div className={`relative ${sizes[size]} rounded-full overflow-hidden border-4 border-white shadow-xl bg-blue-50 flex items-center justify-center`}>
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

const plenarySpeaker: PlenarySpeaker = {
  name: "Prof. (Dr.) Josef Jablonsky",
  title: "Plenary Speaker",
  location: "Prague, Czech Republic",
  description: "Distinguished Professor of Operations Research at Prague University of Economics and Business, with expertise in multi-criteria decision making and optimization techniques.",
  image: "/speakers/1.jpg"
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Prof. (Dr.) José Luis Verdegay",
    title: "Keynote Speaker",
    institution: "Universidad de Granada, Spain",
    image: "/speakers/2.png",
  },
  {
    id: 2,
    name: "Prof. (Dr.) Sankar Kumar Roy",
    title: "Keynote Speaker",
    institution: "Vidyasagar University, Midnapur",
    image: "/speakers/3.jpeg",
  },
];

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 p-6 max-w-[280px]">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <ProfileImage src={speaker.image} alt={`${speaker.name} portrait`} size="sm" />
      </div>
      <h4 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{speaker.name}</h4>
      <p className="text-gray-600 text-sm line-clamp-2">{speaker.institution}</p>
      <p className="text-blue-600 text-sm font-medium mb-2">{speaker.title}</p>
      
    </div>
  </div>
);

const PlenarySpeakerCard: React.FC<{ speaker: PlenarySpeaker }> = ({ speaker }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 max-w-[320px] mx-auto">
    <div className="flex flex-col items-center text-center p-8">
      <div className="mb-6">
        <ProfileImage src={speaker.image} alt={`${speaker.name} portrait`} size="md" />
      </div>
      <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
        {speaker.title}
      </div>
      <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2">{speaker.name}</h3>
      <p className="text-gray-600 mb-4">{speaker.location}</p>
      {/* <p className="text-gray-600 text-sm line-clamp-3">{speaker.description}</p> */}
    </div>
  </div>
);

const MeetOurGuestSpeakers: React.FC = () => {
  const visibleSpeakers = speakers.slice(0, 3);

  return (
    <section id="speakers" className="py-20 max-sm:py-10 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Guest Speakers
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for insights from leading experts in computational intelligence and research.
          </p>
        </div>

        <PlenarySpeakerCard speaker={plenarySpeaker} />

        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Keynote Speakers</h3>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-6 py-6">
              {visibleSpeakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurGuestSpeakers;