import { useEffect } from 'react';

export const useReviReady = (isReady, timeout = 30000) => {
  useEffect(() => {
    if (isReady) {
      // Small delay to ensure DOM is fully updated after state change
      const timer = setTimeout(() => {
        window.__REVI_READY__ = true;
        console.log('[useReviReady] ✅ Page ready for capture');
      }, 100);
      return () => clearTimeout(timer);
    }
    
    // Not ready yet - reset flag
    window.__REVI_READY__ = false;
    console.log('[useReviReady] ⏳ Waiting for data...');
    
    // Safety timeout - force ready after timeout
    const timeoutId = setTimeout(() => {
      console.warn('[useReviReady] ⚠️ Timeout reached, forcing ready');
      window.__REVI_READY__ = true;
    }, timeout);
    
    return () => {
      clearTimeout(timeoutId);
      // Don't force ready on cleanup unless it's still false
      if (window.__REVI_READY__ === false) {
        window.__REVI_READY__ = true;
      }
    };
  }, [isReady, timeout]);
};