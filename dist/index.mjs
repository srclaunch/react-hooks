import { useState, useEffect, useRef } from 'react';

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

const noop = () => {
};
function useInterval(callback, delay, immediate) {
  const savedCallback = useRef(noop);
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    if (!immediate)
      return;
    if (delay === null || delay === false)
      return;
    savedCallback.current();
  }, [immediate]);
  useEffect(() => {
    if (delay === null || delay === false)
      return void 0;
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

/**
 * Update the document title with provided string
 * @param title is a string.
 */
function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}

export { useDebounce, useInterval, useTitle };
//# sourceMappingURL=index.mjs.map
