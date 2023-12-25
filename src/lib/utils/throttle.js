export const throttle = (func, limit) => {
    let inThrottle;
    return () => {
        if (!inThrottle) {
            func.call(this);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};
//# sourceMappingURL=throttle.js.map