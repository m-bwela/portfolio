import { useEffect } from 'react';

const BASE = 'Tye Nzambu';

/**
 * Sets document.title for the current page.
 * Usage: usePageTitle('About') → "About | Tye Nzambu"
 */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Full Stack Developer`;
    return () => { document.title = `${BASE} | Full Stack Developer`; };
  }, [title]);
}
