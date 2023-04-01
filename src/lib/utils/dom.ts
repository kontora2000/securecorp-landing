import { easeInOutQuad } from './animation';

/**
 * SmoothScrolling to element, applies polyfill for Safari
 * @param {HTMLElement} element
 */
export const smoothScroll = (element: HTMLElement) => {
  if ('scrollBehavior' in document.documentElement.style) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const targetPosition = element.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, 600);
    window.scrollTo(0, run);
    if (timeElapsed < 600) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

/**
 * Get scrollbar width for page (need to add it when scrolling is turned off)
 * @returns
 */
export const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  if (outer.parentNode) {
    outer.parentNode.removeChild(outer);
  }
  return scrollbarWidth;
};

/**
 * Cross-browser turn on / off of page scrolling (for modals, dialogs, etc)
 * @param {boolean} flag
 */
export const toggleOverflow = (flag: boolean) => {
  const htmlElement = document.querySelector('html');
  if (htmlElement === null) {
    return;
  }
  if (flag) {
    const paddingRight = getScrollbarWidth();
    document.body.style.paddingRight = `${paddingRight}px`;
    document.body.style.overflow = 'hidden';
    htmlElement.style.overflow = 'hidden';
  } else {
    document.body.style.paddingRight = '';
    document.body.style.overflowY = '';
    htmlElement.style.overflow = '';
  }
};
