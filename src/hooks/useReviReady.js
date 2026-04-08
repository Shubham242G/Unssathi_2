import { useEffect } from 'react';

export const useReviReady = (dependencies = [], timeout = 30000) => {
  useEffect(() => {
    window.__REVI_READY__ = false;
    
    const timeoutId = setTimeout(() => {
      console.warn('ReviReady timeout after', timeout, 'ms');
      window.__REVI_READY__ = true;
    }, timeout);
    
    return () => {
      clearTimeout(timeoutId);
      window.__REVI_READY__ = true;
    };
  }, [timeout, ...dependencies]); // Fixed: proper dependency array
};