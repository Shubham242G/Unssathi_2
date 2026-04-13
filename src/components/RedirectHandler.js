// Create a file: components/RedirectHandler.js
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const urlMappings = {
  // Old camelCase URLs -> New kebab-case URLs
  'mutualDivorce': '/services/mutual-Divorce',
  'contestedDivorce': '/services/contested-Divorce',
  'childCustody': '/services/child-Custody',
  'judicialSeparation': '/services/judicial-Separation',
  'childVisitation': '/services/child-Visitation',
  'annulmentOfMarriage': '/services/annulment-Of-Marriage',
  'conjugalRights': '/services/conjugal-Rights',
  'maintenanceAlimony': '/services/maintanance-And-Alimony',
  'dowryCases': '/services/dowry',
  'cruelty': '/services/cruelty',
  'whyUnsaathi': '/why-Unsaathi',
  'howUnsaathi': '/how-Unsaathi',
  'aboutUs': '/About-Us',
  'connectWithUs': '/connect-With-Us',
};

export default function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    
    // Check if current path matches any old URL pattern
    if (urlMappings[path]) {
      // Perform 301 redirect (permanent)
      navigate(urlMappings[path], { replace: true });
    }
  }, [location, navigate]);
  
  return null;
}