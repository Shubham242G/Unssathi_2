import { useEffect } from 'react';

export const useReviReady = (dependencies = [], timeout = 30000) => {
  useEffect(() => {
    // Signal that we're starting to load
    window.__REVI_READY__ = false;
    
    // Safety timeout - if something hangs, still mark as ready
    const timeoutId = setTimeout(() => {
      console.warn('ReviReady timeout after', timeout, 'ms');
      window.__REVI_READY__ = true;
    }, timeout);
    
    return () => {
      clearTimeout(timeoutId);
      // Only mark ready if we're unmounting naturally
      window.__REVI_READY__ = true;
    };
  }, dependencies);
};