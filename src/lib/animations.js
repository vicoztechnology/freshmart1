/**
 * @param {Element} node
 */
export default function fadeScale (
    node, { delay = 0, duration = 100, easing = (/** @type {any} */ x) => x, baseScale = 0 }
  ) {
    const o = +getComputedStyle(node).opacity;
    const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
    const s = m ? m[1] : 1;
    const is = 1 - baseScale;
  
    return {
      delay,
      duration,
      css: (/** @type {any} */ t) => {
        const eased = easing(t);
        // @ts-ignore
        return `opacity: ${eased * o}; transform: scale(${(eased * s * is) + baseScale})`;
      }
    };
  }