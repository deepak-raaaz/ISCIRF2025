
const AboutHIT = () => {
    return <section id="about-hit" className="py-10 max-sm:py-10 bg-blue-50">
    <div className="max-container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Haldia Institute of Technology</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* <!-- Image Column --> */}
        <div className="relative">
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <img src="/hit2.jpg" alt="Professional setting at Haldia Institute of Technology" width="5066" height="3377" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="font-bold text-lg">Excellence in Technical Education Since 1996</p>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">Haldia Institute of Technology, Haldia, West Bengal (India)</div>
          
          {/* <!-- Decorative element --> */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-blue-200 rounded-lg -z-10"></div>
        </div>
        
        {/* <!-- Content Column --> */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
          Haldia Institute of Technology (An Autonomous Tire-I NBA Accredited Institute of ICARE, Haldia; Approved by AICTE, and Affiliated to MAKAUT) began its journey in the year 1996. It is the first private and accredited academic institution catering technical education inWest Bengal. The Institute is situated at Haldia an industrial hub in Eastern India. Since inception, Haldia Institute of Technology isdedicated to the objectives of creating highly trained professional manpowerin various disciplines of Engineering, Technology and Social Science. <br className="mb-2"/> The Institute is also dedicated to the contribution of higher scientific research in Technology as well as in Applied Science and Social Science. The institute offers 4 years UG (B. Tech) degree courses in EE, ECE, AEIE, CE, ME, IT, CSE, Chemical, Biotechnology, Cyber Security, Data Science and Al& ML. It also offersPG courses in Chemical, CSE, ECE, BT, ME, MBA and MCA. It has been accredited with grade A by NAAC and all of the departments are NBA accredited
          </p>
          
         
        </div>
      </div>
      
      
    </div>
  </section>
};

export default AboutHIT;


