// components/ScheduleSection.tsx
'use client';

import { useState } from 'react';

const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <section id="event-schedule" className="py-20 max-sm:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Event Schedule
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Join us for an exciting two-day symposium featuring keynote speeches, technical sessions, and poster presentations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Column */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden shadow-lg h-[250px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4936.170990625835!2d88.07101217042205!3d22.05151139666622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0bd0fcacc69%3A0x409c7ac845fe6280!2sHaldia%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1743352326588!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                </div>

                <div className="mt-6 bg-white p-5 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Schedule Overview
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      April 9-10, 2025
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      9:00 AM - 4:45 PM daily
                    </li>
                  </ul>

                  <div className="mt-6">
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdrkjJwQY7j3HLy4MvT1wT9JklcQKbHUmiH9zTK8uX8Bxo26A/viewform"
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Tabs */}
            <div className="w-full md:w-2/3">
              <div className="flex border-b border-gray-300 mb-6">
                <button
                  onClick={() => setActiveDay('day1')}
                  className={`py-3 px-6 font-medium ${
                    activeDay === 'day1'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Day 1 - April 9
                </button>
                <button
                  onClick={() => setActiveDay('day2')}
                  className={`py-3 px-6 font-medium ${
                    activeDay === 'day2'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Day 2 - April 10
                </button>
              </div>

              {/* Day 1 Schedule */}
              <div className={`${activeDay === 'day1' ? 'block' : 'hidden'} space-y-6`}>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="space-y-5">
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">9:00 - 10:00</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Registration</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">10:00 - 10:30</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Inaugural Session</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">10:30 - 11:45</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Session I</h4>
                        <p className="text-sm text-gray-600">Plenary Speaker-01: Prof. (Dr.) Josef Jablonsky, Prague University of Economics & Business, Prague, Czech Republic</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">11:45 - 12:00</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Tea/Coffee Break</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">12:00 - 13:15</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Session I</h4>
                        <p className="text-sm text-gray-600">Keynote Speaker-01: Prof. (Dr.) Sankar Kumar Roy, Department of Applied Mathematics, Vidyasagar University, Midanpore</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">13:15 - 14:30</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Lunch Break</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">14:30 - 16:00</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Technical Session II</h4>
                        <p className="text-sm text-gray-600">Chairperson: Prof. (Dr.) Sankar Kumar Roy</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">14:30 - 16:30</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Technical Session III</h4>
                        <p className="text-sm text-gray-600">Poster Presentation by Students</p>
                        <p className="text-sm text-gray-600">Chairpersons: Dr. Kunal Pradhan, Mr. Soumen Ghosh & CHE</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">16:30 - 16:45</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Tea/Coffee Break</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 Schedule */}
              <div className={`${activeDay === 'day2' ? 'block' : 'hidden'} space-y-6`}>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="space-y-5">
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">11:00 - 12:15</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Session I</h4>
                        <p className="text-sm text-gray-600">Keynote Speaker-02: Prof. (Dr.) Santi Prasad Maity, Department of Information Technology, IIEST, Shibpur, Howrah</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">12:15 - 12:30</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Tea/Coffee Break</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">12:30 - 13:15</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Valedictory Session</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">13:15 - 14:30</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Lunch Break</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">14:30 - 16:00</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Technical Session II</h4>
                        <p className="text-sm text-gray-600">Chairperson: Prof. (Dr.) Santi Prasad Maity</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">14:30 - 16:30</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Technical Session III</h4>
                        <p className="text-sm text-gray-600">Poster Presentation by Students</p>
                        <p className="text-sm text-gray-600">Chairpersons: Dr. Kunal Pradhan, Mr. Soumen Ghosh & CHE</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 flex-shrink-0 text-gray-500">16:30 - 16:45</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Tea/Coffee Break</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                * The schedule is subject to change. Please check back for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;