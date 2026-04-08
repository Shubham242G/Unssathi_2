import { useEffect } from 'react';

export const useReviReady = (isReady, timeout = 30000) => {
  useEffect(() => {
    if (isReady) {
      window.__REVI_READY__ = true;
      return;
    }
    
    window.__REVI_READY__ = false;
    
    const timeoutId = setTimeout(() => {
      console.warn('ReviReady timeout after', timeout, 'ms');
      window.__REVI_READY__ = true;
    }, timeout);
    
    return () => {
      clearTimeout(timeoutId);
      window.__REVI_READY__ = true;
    };
  }, [isReady, timeout]); // ✅ Simple dependencies, no spread
};