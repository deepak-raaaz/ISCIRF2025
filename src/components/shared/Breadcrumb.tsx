"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    // Remove any query parameters
    const path = pathname?.split('?')[0];
    
    if (!path) return [];

    // Split the path into segments
    const segments = path.split('/').filter(Boolean);
    
    // Generate breadcrumb items
    return segments.map((segment, index) => {
      // Create the URL for this segment
      const url = `/${segments.slice(0, index + 1).join('/')}`;
      
      // Format the segment text (capitalize and replace hyphens with spaces)
      const text = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return { text, url };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className} max-container`}>
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link 
            href="/"
            className="text-[#463AA1] hover:text-blue-600 transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.url} className="flex items-center">
            <svg 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7" 
              />
            </svg>
            
            {index === breadcrumbs.length - 1 ? (
              <span className="ml-2 text-gray-600">{breadcrumb.text}</span>
            ) : (
              <Link
                href={breadcrumb.url}
                className="ml-2 text-[#463AA1] hover:text-blu transition-colors duration-300"
              >
                {breadcrumb.text}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 