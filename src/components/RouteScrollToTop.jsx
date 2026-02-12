import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top when the route changes.
 * Distinct from ScrollToTop (the progress-ring button).
 */
export default function RouteScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset all possible scroll containers
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
