import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE = 'Tye Nzambu';

/**
 * Sets document.title for the current page.
 * Skips title update when the component is embedded inside Home ("/").
 * Usage: usePageTitle('About') → "About | Tye Nzambu"
 */
export default function usePageTitle(title) {
  const { pathname } = useLocation();

  useEffect(() => {
    // When embedded in Home, only the Home component (title=null) sets the title
    if (title && pathname === '/') return;

    document.title = title ? `${title} | ${BASE}` : `${BASE} | Full Stack Developer`;
    return () => { document.title = `${BASE} | Full Stack Developer`; };
  }, [title, pathname]);
}
