import { useState, useLayoutEffect } from "react"

function useDynamicValue(ref) {
 
  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        setElementWidth(width);
        setElementHeight(height);
      }
    }

    handleResize(); // initial call to get width and height of the element

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, [ ref ] );
  
  return { elementWidth, elementHeight }
  
}

export {useDynamicValue}