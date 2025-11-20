/**
 * Get current document direction (RTL or LTR)
 */
export const getDir = (): 'rtl' | 'ltr' => {
  if (typeof document === 'undefined') return 'ltr';
  return (document.documentElement.getAttribute('dir') || document.dir || 'ltr') as 'rtl' | 'ltr';
};

/**
 * Get direction sign for transforms
 * RTL = -1 (moves right/positive X), LTR = +1 (moves left/negative X)
 */
export const dirSign = (): number => {
  return getDir() === 'rtl' ? -1 : 1;
};

