'use client';


interface FooterLink {
  href: string;
  label: string;
}

// interface SocialLink {
//   href: string;
//   icon: React.ReactNode;
// }

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const FooterLink: React.FC<FooterLink> = ({ href, label }) => (
  <li>
    <a href={href} className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
      {label}
    </a>
  </li>
);

// const SocialIcon: React.FC<SocialLink> = ({ href, icon }) => (
//   <a href={href} className="bg-blue-800 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300">
//     {icon}
//   </a>
// );

const ContactItem: React.FC<ContactInfo> = ({ icon, text, href }) => (
  <div className="flex items-start space-x-3">
    <div className="text-blue-300 mt-0.5">{icon}</div>
    {href ? (
      <a href={href} className="text-blue-200 hover:text-white transition-colors duration-300">
        {text}
      </a>
    ) : (
      <span className="text-blue-200">{text}</span>
    )}
  </div>
);

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    {children}
  </div>
);

const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { href: "https://docs.google.com/forms/d/e/1FAIpQLSdrkjJwQY7j3HLy4MvT1wT9JklcQKbHUmiH9zTK8uX8Bxo26A/viewform", label: "Registration" },
    { href: "/#event-schedule", label: "Schedule" },
    { href: "/#speakers", label: "Speakers" },
    { href: "/#sponsors", label: "Sponsors" }
  ];

  // const socialLinks: SocialLink[] = [
  //   {
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     href: "#",
  //     icon: (
  //       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  //       </svg>
  //     )
  //   }
  // ];

  const contactInfo: ContactInfo[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "taff2025@hithaldia.ac.in",
      href: "mailto:taff2025@hithaldia.ac.in"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "+91 96144 69031",
      href: "tel:+919614469031"
    },
    
  ];

  return (
    <footer id="footer" className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <FooterSection title="ISCIRF 2025">
            <p className="text-blue-200 mb-6">
              International Symposium on Computational Intelligence and Research Frontiers
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-blue-100">April 9-10, 2025</p>
              </div>
              <div className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-h-5 min-w-5 text-blue-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-blue-100">Haldia Institute of Technology, ICARE Complex, Hatiberia Haldia, Dist- Purba Medinipore, West Bengal - 721657 </p>
              </div>
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us">
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <ContactItem key={index} {...info} />
              ))}
            </div>
          </FooterSection>

          
        </div>

        

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-blue-300 text-sm mb-2">
            © 2025 International Symposium on Computational Intelligence and Research Frontiers. All Rights Reserved.
          </p>
          <p className="text-blue-300 text-sm mb-2">
           Developed by <a href="https://d4deepak.com" target="_blank" className="text-blue-200 hover:text-white transition-colors duration-300">Deepak Kumar</a>
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;