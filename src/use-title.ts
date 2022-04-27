import { useEffect } from 'react';

/**
 * Update the document title with provided string
 * @param title is a string.
 */
export function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, []);
}
