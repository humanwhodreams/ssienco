import { useEffect, useState } from 'react';

/**
 * @param [threshold=30] the Y position
 *
 * @default threshold - 30
 */
function useWindowScroll(threshold: number = 30) {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.scrollY > threshold)
      );
    }
  }, []);

  return {
    scroll,
  };
}

export { useWindowScroll };
