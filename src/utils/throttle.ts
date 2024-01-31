export const throttle = (func: () => any, limit: number): (() => void) => {
  let inThrottle: boolean;
  return () => {
    if (!inThrottle) {
      func.call(this);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
